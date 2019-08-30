import React, { Component } from 'react';
import { Marker, Polyline, Popup, Tooltip } from 'react-leaflet';
import icons from './icons';
import geodata_ufrpe from './Geodata/geo_ufrpe';
import geodata_estadual from './Geodata/geo_estadual';
import axios from 'axios';
import './NetworkLayer.css'

import { Badge, Card, CardBody, CardHeader, Table, Row, Col } from 'reactstrap';









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
                    api_links: [],
                    api_acesslinks: [],
                    

                };
                break;
            case 'Anel Estadual':
                this.state = {
                    links_pending: true,
                    markers_pending: true,
                    markers: geodata_estadual[0],
                    links: geodata_estadual[1],
                    api_links: [],
                    api_acesslinks: [],
                }
                break;
            default:
                    this.state = {
                    links_pending: true,
                    markers_pending: true,
                    markers: geodata_estadual[0],
                    links: geodata_estadual[1],
                    api_links: [],
                    api_acesslinks: [],
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
        var acesslinks = [];
        try{
            links = await axios.get("http://localhost:3333/icone-link-show");
            acesslinks = await axios.get("http://localhost:3333/icone-acesslink-show");
        }catch{
            console.log("api error!");
            return "error";
        }
        
        

        this.setState({api_links: links.data,
            api_acesslinks: acesslinks.data});
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
        var layer_terminals = [];
        var layer_acesslinks = [];

        this.state.api_links.filter(link => {
            return link.link_group === this.props.geolayer;
        }).forEach(link =>{

            var status_icon = null;
            var client_status_color = "danger";
            if (link.clientB_status === "up")
            {
                status_icon = icons.greenIcon;
                client_status_color = "success";
            }
            else
            {
                status_icon = icons.redIcon;
                client_status_color ="danger";
            }


            var link_status_color = "danger";
            if(link.link_status === "up")
                link_status_color = "success";
            else
                link_status_color = "danger";

            

                
            
            const marker = <Marker position={link.clientB_coordinates} icon={status_icon}>
                <Popup className="markers_Popup">
                    <Row>
                        <Col xs="4" lg="12">
                <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> {link.clientB_initials}
              </CardHeader>
              <CardBody>
                <Table responsive striped size="sm">
                  <thead>
                  <tr className="text-center">
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="text-center">
    
                    <td>
                      <Badge color={client_status_color}>{link.clientB_status}</Badge>
                    </td>
                  </tr>
    
                  </tbody>
                </Table>
    
              </CardBody>
            </Card>
            </Col>
            </Row>
                </Popup>
                <Tooltip direction="bottom" offset={[0, 20]} opacity={0.8} >{link.clientB_initials}</Tooltip>
            </Marker>;

            layer_markers.push(marker);

            const color = this.getLinkColor(link);

            const enlace = <Polyline positions={link.link_coordinates} weight={8} color={color}>
                <Popup className="markers_Popup">
                    <Row>
                        <Col xs="12" lg="12">
                <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> {link.link_name}
              </CardHeader>
              <CardBody>
                <Table responsive striped size="sm">
                  <thead>
                  <tr className="text-center">
                    <th>A Side</th>
                    <th>B Side</th>
                    <th>A <i className="fa fa-arrow-left fa-lg mt-4"></i> B</th>
                    <th>A  <i className="fa fa-arrow-right fa-lg mt-4"></i> B</th>
                    <th>Link Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="text-center">
                    <td>{link.clientA_initials}</td>
                    <td>{link.clientB_initials}</td>
                    <td>{link.link_download} Mbps</td>
                    <td>{link.link_upload} Mbps</td>
                    <td>
                      <Badge color={link_status_color}>{link.link_status}</Badge>
                    </td>
                  </tr>
    
                  </tbody>
                </Table>
    
              </CardBody>
            </Card>
            </Col>
            </Row>
                </Popup>
                <Tooltip sticky direction="bottom" offset={[0, 20]} opacity={0.8}>
                    {link.clientA_initials + ' <=> ' + link.clientB_initials}  
                </Tooltip>
            </Polyline>
            layer_links.push(enlace);


            





        });

        this.state.api_acesslinks.filter(acesslink => {
            return acesslink.link_group === this.props.geolayer;
        }).forEach(acesslink =>{
            const enlace = <Polyline positions={acesslink.link_coordinates} weight={2} color='green'>
                <Tooltip sticky direction="bottom" offset={[0, 20]} opacity={0.8}>
                    {acesslink.link_name}  
                </Tooltip>
            </Polyline>
            layer_acesslinks.push(enlace);

            const marker_terminal = <Marker position={acesslink.link_coordinates[acesslink.link_coordinates.length -1]} icon={icons.switchIcon}>
            </Marker>;

            layer_terminals.push(marker_terminal);
        });

        




        var layer = [layer_terminals,layer_markers, layer_links, layer_acesslinks];

        

        return (

            layer
            


        );



    }



}

export default NetworkLayer;