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
                    <CardFooter>
                       card1
                    </CardFooter>
                </Card>
            </Col>
            <Col sm="4" md="2">
                <Card>
                    <CardBody>
                    <img src={'../../assets/img/avatars/rodrigo.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </CardBody>
                    <CardFooter>
                       card2
                    </CardFooter>
                </Card>
            </Col>
            <Col sm="4" md="2">
                <Card>

                    <CardBody>
                    <img src={'../../assets/img/avatars/marcelo.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />                 
                    </CardBody>
                    <CardFooter>
                       card3
                    </CardFooter>
                </Card>
            </Col>
            <Col sm="4" md="2">
                <Card>

                    <CardBody>
                    <img src={'../../assets/img/avatars/zé.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />                 
                    </CardBody>
                    <CardFooter>
                       card4
                    </CardFooter>
                </Card>
            </Col>
             
          </Row>

        </div>
      );
    }
  }
  
  export default Home;