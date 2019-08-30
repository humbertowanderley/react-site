import React, { Component } from 'react';
import axios from 'axios';
import { 
    Card,
    CardBody,
    CardHeader,
    Col, Row,
    ButtonGroup,
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, 
    Badge,  Pagination, PaginationItem, PaginationLink, Table} from 'reactstrap';
import Widget04 from '../Widgets/Widget04';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    
        this.state = {
          dropdownOpen: false,
          radioSelected: 2,
          icone_clientes_up: 0,
          icone_clientes_down: 0
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
        });
      }
    
      onRadioBtnClick(radioSelected) {
        this.setState({
          radioSelected: radioSelected,
        });
      }
    
      loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

      componentDidMount() {


        this.getInfo();
        this.interval = setInterval(() => this.getInfo(), 60000);



    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    async getInfo(){
        
        try{
            const clientsStatus = await axios.get("http://localhost:3333/icone-info");

            this.setState({icone_clientes_up: clientsStatus.data.clients_up,
            icone_clientes_down: clientsStatus.data.clients_down});

        }catch{
            console.log("erro na api.");
            return "error";
        }

        return "sucess";


    }

    render() {
      return (
        <div className="animated fadeIn">
          
          <Row>
            <Col sm="6" md="4">
                <Card className="text-white bg-info">
                    <CardHeader>
                        Rede Icone
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm="6" md="6">
                                <Widget04 icon="icon-people" color="success" header={this.state.icone_clientes_up} value="100" invert>Clientes UP
                                    <ButtonGroup className="float-right">
                                        <ButtonDropdown id='widget1' isOpen={this.state.widget1} toggle={() => { this.setState({ widget1: !this.state.widget1 }); }}>
                                            <DropdownToggle caret className="p-0" color="transparent">
                                            <i className="icon-settings"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem disabled>Disabled action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        </ButtonGroup>
                                    </Widget04>
                            </Col>
                            <Col sm="6" md="6">
                                <Widget04 icon="icon-people" color="danger" header={this.state.icone_clientes_down} value="100" invert>Clientes Down
                                    <ButtonGroup className="float-right">
                                        <ButtonDropdown id='widget2' isOpen={this.state.widget2} toggle={() => { this.setState({ widget2: !this.state.widget2 }); }}>
                                            <DropdownToggle caret className="p-0" color="transparent">
                                            <i className="icon-settings"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem disabled>Disabled action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        </ButtonGroup>
                                    </Widget04>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="6" md="4">
                <Card className="text-white bg-info">
                    <CardHeader>
                        Rede PoP-PE
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm="6" md="6">
                                <Widget04 icon="icon-people" color="success" header="61" value="100" invert>Clientes UP
                                    <ButtonGroup className="float-right">
                                        <ButtonDropdown id='widget3' isOpen={this.state.widget3} toggle={() => { this.setState({ widget3: !this.state.widget3 }); }}>
                                            <DropdownToggle caret className="p-0" color="transparent">
                                            <i className="icon-settings"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem disabled>Disabled action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        </ButtonGroup>
                                    </Widget04>
                            </Col>
                            <Col sm="6" md="6">
                                <Widget04 icon="icon-people" color="danger" header="4" value="100" invert>Clientes Down
                                    <ButtonGroup className="float-right">
                                        <ButtonDropdown id='widget2' isOpen={this.state.widget4} toggle={() => { this.setState({ widget4: !this.state.widget4 }); }}>
                                            <DropdownToggle caret className="p-0" color="transparent">
                                            <i className="icon-settings"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem disabled>Disabled action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        </ButtonGroup>
                                    </Widget04>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="6" md="4">
                <Card className="text-white bg-info">
                    <CardHeader>
                        Repepe
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm="6" md="6">
                                <Widget04 icon="icon-people" color="success" header="5" value="100" invert>Clientes UP
                                    <ButtonGroup className="float-right">
                                        <ButtonDropdown id='widget1' isOpen={this.state.widget5} toggle={() => { this.setState({ widget5: !this.state.widget5 }); }}>
                                            <DropdownToggle caret className="p-0" color="transparent">
                                            <i className="icon-settings"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem disabled>Disabled action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        </ButtonGroup>
                                    </Widget04>
                            </Col>
                            <Col sm="6" md="6">
                                <Widget04 icon="icon-people" color="danger" header="2" value="100" invert>Clientes Down
                                    <ButtonGroup className="float-right">
                                        <ButtonDropdown id='widget2' isOpen={this.state.widget6} toggle={() => { this.setState({ widget6: !this.state.widget6 }); }}>
                                            <DropdownToggle caret className="p-0" color="transparent">
                                            <i className="icon-settings"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem disabled>Disabled action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        </ButtonGroup>
                                    </Widget04>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
             
          </Row>

          <Row>
            <Col xs="12" lg="12">
                <Card>
                    <CardHeader>
                    <i className="fa fa-align-justify"></i> Últimos Eventos
                    </CardHeader>
                    <CardBody>
                    <Table responsive size="sm">
                        <thead>
                        <tr>
                        <th>Cliente</th>
                        <th>Duração</th>
                        <th>Rede</th>
                        <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td>Instituição 1</td>
                        <td>02h 23min</td>
                        <td>ICONE</td>
                        <td>
                            <Badge color="danger">Down</Badge>
                        </td>
                        </tr>
                        <tr>
                        <td>Instituição 2</td>
                        <td>00h 20min</td>
                        <td>PoP-PE</td>
                        <td>
                            <Badge color="warning">Warning</Badge>
                        </td>
                        </tr>

                        <tr>
                        <td>Instituição 3</td>
                        <td>00h 12min</td>
                        <td>Repepe</td>
                        <td>
                            <Badge color="danger">Down</Badge>
                        </td>
                        </tr>
                        
                        
                        </tbody>
                    </Table>
                    <Pagination>
                        <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                        <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                    </CardBody>
                </Card>
            </Col>
</Row>
        </div>
      );
    }
  }
  
  export default Home;