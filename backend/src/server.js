const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cronjob = require('node-schedule');
const axios = require('axios');

async function get_linkData() {

    var icone_links = [];

    try {
        icone_links = await axios.get("http://localhost:3333/icone-link-show");

        icone_links.data.forEach(async function (link) {

            var link_status, clientA_status, clientB_status, link_upload, link_download, lastData_time;
            try {

                const responseA_download = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCInOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host=" +  "'" + link.clientA_ip + "'" + "+AND+ifName=" + "'" + link.clientA_interface + "'" +")");
                const responseA_upload = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCOutOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host=" + "'" + link.clientA_ip + "'" + "+AND+ifName=" + "'" + link.clientA_interface + "'" + ")");
                const responseASide_link_status = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(ifOperStatus)+FROM+ifEstatisticas+WHERE+agent_host=" + "'" + link.clientA_ip + "'" + "+AND+ifName=" + "'" + link.clientA_interface + "'");
                const response_clientA_status = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(percent_packet_loss)+FROM+pingMetrics+WHERE+url=" + "'" + link.clientA_ip + "'");

                const responseB_download = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCInOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host=" +  "'" + link.clientB_ip + "'" + "+AND+ifName=" + "'" + link.clientB_interface + "'" +")");
                const responseB_upload = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCOutOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host=" + "'" + link.clientB_ip + "'" + "+AND+ifName=" + "'" + link.clientB_interface + "'" + ")");
                const response_clientB_status = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(percent_packet_loss)+FROM+pingMetrics+WHERE+url=" + "'" + link.clientB_ip + "'");

                const responseBSide_link_status = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(ifOperStatus)+FROM+ifEstatisticas+WHERE+agent_host=" + "'" + link.clientB_ip + "'" + "+AND+ifName=" + "'" + link.clientB_interface + "'");
                
                console.log();

                if (responseASide_link_status.data.results[0].series[0].values[0][1] == 1) {
                    link_status = "up";
                    link_download = responseA_download.data.results[0].series[0].values[0][1];
                    link_upload = responseA_upload.data.results[0].series[0].values[0][1];

                    lastData_time = responseA_download.data.results[0].series[0].values[0][0];

                }
                else if (responseBSide_link_status.data.results[0].series[0].values[0][1] == 1) {
                    link_status = "up";
                    link_upload = responseB_download.data.results[0].series[0].values[0][1];
                    link_download = responseB_upload.data.results[0].series[0].values[0][1];

                    lastData_time = responseB_download.data.results[0].series[0].values[0][0];

                }
                else
                {
                    link_status = "down";
                    link_upload = 0;
                    link_download = 0;
                    lastData_time = Date().now();
                }

               
                if(response_clientA_status.data.results[0].series[0].values[0][1] == 100)
                    clientA_status = "down";
                else
                    clientA_status = "up";

                if(response_clientB_status.data.results[0].series[0].values[0][1] == 100)
                    clientB_status = "down";
                else
                    clientB_status = "up";

                if(Date.now() - lastData_time > 240000)
                {
                    link_status = "up";
                    link_download = 0;
                    link_upload = 0;
                    clientA_statu = "up";
                    clientB_status = "up"

                }
              
                axios.put("http://localhost:3333/icone-link-update",
                    {
                        "key": {"link_name": link.link_name},
                        "fields":{
                            "link_status": link_status,
                            "link_download": link_download,
                            "link_upload": link_upload,
                            "clientA_status": clientA_status,
                            "clientB_status": clientB_status
                        }

                    },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json"
                        }
                    }
                );

                

                


            } catch{

                console.log("Erro na comunicação com o influxdb.");
                return "error";
            }


            
            return "sucess!"


        });
    } catch{
        console.log("api error!");
        return "error";
    }

    
    return "sucess";



}

mongoose.connect('mongodb+srv://site-pop-pe:site-pop-pe@pop-pe-crfuj.mongodb.net/site?retryWrites=true&w=majority',

    {
        useNewUrlParser: true, useFindAndModify: false
    });

const server = express();
server.use(express.json());
server.use(routes);



var task = cronjob.scheduleJob('* * * * *', async function () {

    get_linkData();
    
});







server.listen(3333);

