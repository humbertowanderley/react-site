import React, { Component } from 'react';
import { Marker, Polyline, Popup, Tooltip } from 'react-leaflet';
import icons from './icons';
import geodata_ufrpe from './Geodata/geo_ufrpe';
import geodata_estadual from './Geodata/geo_estadual';
import axios from 'axios';
import './NetworkLayer.css'









class NetworkLayer extends Component {



    constructor(props) {

        super(props);

        switch (this.props.geolayer) {
            case 'Anel UFRPE':
                this.state = {
                    links_pending: true,
                    markers_pending: true,
                    markers: geodata_ufrpe[0],
                    links: geodata_ufrpe[1],
                    api_links: []
                    

                };
                break;
            case 'Anel Estadual':
                this.state = {
                    links_pending: true,
                    markers_pending: true,
                    markers: geodata_estadual[0],
                    links: geodata_estadual[1],
                    api_links: []
                }
                break;
            default:
                    this.state = {
                    links_pending: true,
                    markers_pending: true,
                    markers: geodata_estadual[0],
                    links: geodata_estadual[1],
                    api_links: []
                }
        }



        //    http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCInOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host='10.0.0.27'+AND+ifName='1:21')

    }

    // updateColors() {
    //     this.getLinksColor();
    //     this.getMarkersColor();
    // }

    async getLinks(){
        var links = [];
        try{
            links = await axios.get("http://localhost:3333/icone-link-show");
        }catch{
            console.log("api error!");
            return "error";
        }
        
        

        this.setState({api_links: links.data});
        return "sucess!";
    }


    // async getLinksColor() {


    //     var newFeatures = this.state.links.features.map(async function (feature) {
    //         var response_download, response_upload, bandwidth = 0;
    //         try {
               
    //             response_download = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCInOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host=" + feature.properties.ip + "+AND+ifName=" + feature.properties.port + ")");
    //             response_upload = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCOutOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host=" + feature.properties.ip + "+AND+ifName=" + feature.properties.port + ")");
    //             bandwidth = feature.properties.bandwidth;
    //         } catch{
    //             try {
    //                 const ip = await feature.then(function (data) { return data.properties.ip; });
    //                 const port = await feature.then(function (data) { return data.properties.port; });
    //                 const band = await feature.then(function (data) { return data.properties.bandwidth; });
    //                 bandwidth = band;

    //                 response_download = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCInOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host=" + ip + "+AND+ifName=" + port + ")");
    //                 response_upload = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(*)+FROM+(SELECT+(non_negative_difference(ifHCOutOctets))*((8/120)/1000000)+FROM+ifEstatisticas+WHERE+agent_host=" + ip + "+AND+ifName=" + port + ")");

    //             } catch{ console.log("Erro na comunicação com o database."); return "error"; }
    //         }

    //         const download = response_download.data.results[0].series[0].values[0][1];
    //         const upload = response_upload.data.results[0].series[0].values[0][1];
            
    //         var max_util = 0;
    //         if (download >= upload)
    //             max_util = (download / bandwidth) * 100;
    //         else
    //             max_util = (upload / bandwidth) * 100;
    //         var color = "black";
    //         if (max_util <= 25)
    //             color = 'blue'
    //         if (max_util > 25 && max_util <= 50)
    //             color = '#2cd459';
    //         if (max_util > 50 && max_util <= 75)
    //             color = '#c1cf0a';
    //         if (max_util > 75 && max_util <= 90)
    //             color = '#e39f0e';
    //         if (max_util > 90)
    //             color = '#f26535';

    //         // try{
    //         feature.properties.link_color = color;
            

    //         // }catch{
    //         //     await feature.then(function(data){data.properties.status = current_status;});
    //         // }

    //         return feature;

    //     });

    //     const solved = await Promise.all(newFeatures);

    //     this.setState(prevState => ({
    //         ...prevState,
    //         links: {
    //             ...prevState.links,
    //             features: solved
    //         }
    //     }));


    //     return "Sucess";

    // }


    // async getMarkersColor() {
    //     const newFeatures = this.state.markers.features.map(await async function (feature) {
    //         var response_packets_loss;
    //         try {
    //             response_packets_loss = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(percent_packet_loss)+FROM+pingMetrics+WHERE+url=" + feature.properties.ip);

    //         } catch{
    //             try {
    //                 const ip = await feature.then(function (data) { return data.properties.ip; });

    //                 response_packets_loss = await axios.get("http://localhost:8086/query?db=interfaces_icone&epoch=ms&q=SELECT+last(percent_packet_loss)+FROM+pingMetrics+WHERE+url=" + ip);

    //             } catch{ console.log("Erro na comunicação com o database."); return "error"; }
    //         }


    //         const percent_packet_loss = response_packets_loss.data.results[0].series[0].values[0][1];

    //         var current_status = "none";

    //         if (percent_packet_loss === 100)
    //             current_status = 'down';
    //         else
    //             current_status = 'up'




    //         feature.properties.status = current_status;



    //         return feature;


    //     });
    //     const solved = await Promise.all(newFeatures);

    //     this.setState(prevState => ({
    //         ...prevState,
    //         markers: {
    //             ...prevState.markers,
    //             features: solved
    //         }
    //     }));

    //     return "Sucess";

    // }

    componentDidMount() {


        this.getLinks();
        this.interval = setInterval(() => this.getLinks(), 10000);



    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getLinkColor(link){

            const download = link.link_download;
            const upload = link.link_upload;
            const bandwidth = link.link_speed;
            const link_status = link.link_status;
            
            var max_util = 0;
            if (download >= upload)
                max_util = (download / bandwidth) * 100;
            else
                max_util = (upload / bandwidth) * 100;
            
            var color = 'black';
            if(link_status == "up")
            {
                if (max_util <= 25)
                    color = 'blue'
                if (max_util > 25 && max_util <= 50)
                    color = '#2cd459';
                if (max_util > 50 && max_util <= 75)
                    color = '#c1cf0a';
                if (max_util > 75 && max_util <= 90)
                    color = '#e39f0e';
                if (max_util > 90)
                    color = '#f26535';
            }else{
                color = "black";
            }
            
            


            return color;


    }




    render() {


        var layer_markers = [];
        var layer_links = [];

        this.state.api_links.filter(link => {
            return link.link_group === this.props.geolayer;
        }).forEach(link =>{

            var status_icon = null;
            if (link.clientB_status === "up")
                status_icon = icons.greenIcon
            else
                status_icon = icons.redIcon

            const marker = <Marker position={link.clientB_coordinates} icon={status_icon}>
                <Popup className="markers_Popup">
                    <div >
                        <iframe title={link.clientB_initials} src={link.clientB_graphs} width="450" height="300" frameBorder="0"></iframe>
                    </div>
                </Popup>
                <Tooltip direction="bottom" offset={[0, 20]} opacity={0.8} >{link.clientB_initials}</Tooltip>
            </Marker>

            layer_markers.push(marker);

            const color = this.getLinkColor(link);

            const enlace = <Polyline positions={link.link_coordinates} weight={8} color={color}>
                <Popup className="markers_Popup">
                    <div >
                        <iframe title={link.link_initials} src={link.link_graphs} width="450" height="300" frameBorder="0"></iframe>
                    </div>
                </Popup>
                <Tooltip sticky direction="bottom" offset={[0, 20]} opacity={0.8}>
                    {link.clientA_initials + ' <=> ' + link.clientB_initials}  
                </Tooltip>
            </Polyline>
            layer_links.push(enlace);





        });

        

        // this.state.markers.features.forEach(feature => {

        //     var status_icon = null;
        //     if (feature.properties.status === "up")
        //         status_icon = icons.greenIcon
        //     else
        //         status_icon = icons.redIcon

        //     const component = <Marker position={feature.geometry.coordinates} icon={status_icon}>
        //         <Popup className="markers_Popup">
        //             <div >
        //                 <iframe title={feature.properties.id} src={feature.properties.graphs} width="450" height="300" frameBorder="0"></iframe>
        //             </div>
        //         </Popup>
        //         <Tooltip direction="bottom" offset={[0, 20]} opacity={0.8} >{feature.properties.id}</Tooltip>
        //     </Marker>


        //     layer_markers.push(component);


        // });

        // this.state.links.features.forEach(feature => {
        //     const component = <Polyline positions={feature.geometry.coordinates} weight={8} color={feature.properties.link_color}>
        //         <Popup className="markers_Popup">
        //             <div >
        //                 <iframe title={feature.properties.id} src={feature.properties.graphs} width="450" height="300" frameBorder="0"></iframe>
        //             </div>
        //         </Popup>
        //         <Tooltip sticky direction="bottom" offset={[0, 20]} opacity={0.8}>
        //             {feature.properties.start_point+ ' <=> ' + feature.properties.end_point}  
        //         </Tooltip>
        //     </Polyline>
        //     layer_links.push(component);


        // });




        var layer = [layer_markers, layer_links];

        

        return (

            layer


        );



    }



}

export default NetworkLayer;