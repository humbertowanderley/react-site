import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row, Collapse, Fade, ButtonDropdown,DropdownItem,
DropdownMenu, DropdownToggle } from 'reactstrap';
import { Map, TileLayer} from 'react-leaflet';
import NetworkLayer from './GeoLayers/NetworkLayer';



import { ReactLeafletSearch } from 'react-leaflet-search';

import 'leaflet/dist/leaflet.css';
import './RedeIcone.css';
import 'react-leaflet-search/lib/react-leaflet-search.css';

class RedeIcone extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      dropdownOpen: false,
      timeout: 300,
      dropdownLayerValue: "Aneis"

    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

 

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropdownRingClick(layer){
    this.setState({
      dropdownLayerValue: layer
    });

  }

  render() {

    

    return (
      
      <div className="animated fadeIn">
        
        <Row>
          <Col xs="12" sm="12" md="12" >
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  Mapa - Rede Icone
                  <div className="card-header-actions">
                  <ButtonDropdown className="mr-1" isOpen={this.state.dropdownOpen} toggle={() => { this.toggleDropdown(); }}>
                  <DropdownToggle caret color="secondary">
                    {this.state.dropdownLayerValue}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Aneis</DropdownItem>
                    <DropdownItem onClick={()=>{this.dropdownRingClick("Anel Federal");}}>Federal</DropdownItem>
                    <DropdownItem onClick={()=>{this.dropdownRingClick("Anel Estadual");}}>Estadual</DropdownItem>
                    <DropdownItem onClick={()=>{this.dropdownRingClick("Anel Privado");}}>Privado</DropdownItem>
                    <DropdownItem onClick={()=>{this.dropdownRingClick("Anel UFRPE");}}>UFRPE</DropdownItem>
                    <DropdownItem onClick={()=>{this.dropdownRingClick("Anel UFPE");}}>UFPE</DropdownItem>
                    <DropdownItem onClick={()=>{this.dropdownRingClick("Anel UPE");}}>UPE (10Gb)</DropdownItem>
                   

                  </DropdownMenu>
                </ButtonDropdown>
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-setting"><i className="icon-magnifier"></i></a>
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                    
                  
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                  
                  <Map className="map" center={[-8.0378381, -34.8628969]} zoom={14}>
                   
                    <TileLayer
                      attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, 
                      <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, 
                      Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                      url='https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
                    />

                  {/* <ReactLeafletSearch position="topleft" /> */}

                      

                   

                    {/* 'estadual
                          ufrpe' */}
                    <NetworkLayer geolayer={this.state.dropdownLayerValue}/>
                    
                  </Map>


                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>

        </Row>
      </div>
    );
  }
}

export default RedeIcone;
