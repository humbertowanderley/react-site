import React, { Component } from 'react';
import { 

    Card,
    CardBody,
    CardHeader,
    CardFooter,
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

    render() {
      return (
        <div className="animated fadeIn">
          
          <Row>
            <Col sm="4" md="2">
                <Card>
                    <CardBody>
                    <img src={'../../assets/img/avatars/zuleika.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />     
                    </CardBody>
                    <CardFooter className="text-center">
                    <p>Zuleika Tenório</p> <p>Coordenadora</p>
                    </CardFooter>
                </Card>
            </Col>
            <Col sm="4" md="2">
                <Card>
                    <CardBody>
                    <img src={'../../assets/img/avatars/rodrigo.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </CardBody>
                    <CardFooter className="text-center">
                       <p>Rodrigo Braynner</p> <p>Supervisor</p>
                    </CardFooter>
                </Card>
            </Col>
            <Col sm="4" md="2">
                <Card>

                    <CardBody>
                    <img src={'../../assets/img/avatars/marcelo.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />                 
                    </CardBody>
                    <CardFooter className="text-center">
                       <p>Marcelo Monteiro</p> <p>Analista</p>
                    </CardFooter>
                </Card>
            </Col>
            <Col sm="4" md="2">
                <Card>

                    <CardBody>
                    <img src={'../../assets/img/avatars/zé.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />                 
                    </CardBody>
                    <CardFooter className="text-center">
                     
                       <p>José Carlos</p> <p>Analista</p>
                    </CardFooter>
                </Card>
            </Col>
             
          </Row>

        </div>
      );
    }
  }
  
  export default Home;