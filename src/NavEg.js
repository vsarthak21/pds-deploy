import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Form, FormControl } from 'react-bootstrap';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';



import styled from "styled-components";

const IconCnt = styled.div`
  
  padding:20px;  
  display: flex;
  justify-content: center;
  
  
`;

const PopHead = styled.div`
 
  justify-content: center;
  display: flex;
  
  
`;



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.togglePop = this.togglePop.bind(this);
    this.logoutClicked=this.logoutClicked.bind(this);
    this.profileClicked=this.profileClicked.bind(this);

    this.state = {
      isOpen: false,
      popoverOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  togglePop() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
      // popoverOpen: true
    });
    console.log(this.state.popoverOpen)
  }

  logoutClicked(){
    console.log('logout');
  }

  profileClicked(){
    console.log('profile clicked');
  }
  


  render() {
    return (
      <div>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand className="mr-2" href="/"><strong>PDS APPLICATION</strong></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem onClick={this.props.changePdsToggler}>
                  <NavLink href="#" >PDS</NavLink>
                </NavItem>
                <UncontrolledDropdown>
                  <DropdownToggle nav className="mr-2">
                    BOS
                </DropdownToggle>
                </UncontrolledDropdown>

                <Form inline className="mr-2">
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <NavLink href="">SEARCH</NavLink>
                </Form>

                <NavItem >
                  {/* <NavLink href="">LOGOUT</NavLink> */}
                </NavItem>

                <NavItem >
                  {/* <NavLink href="">LOGOUT</NavLink> */}
                </NavItem>

                <NavItem >
                  {/* <NavLink href="">LOGOUT</NavLink> */}
                </NavItem>

                <NavItem >
                  <i id="Popover" style={{ paddingTop: 4 }} class="big inverted user circle icon" onClick={this.togglePop}></i>


                  <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover" >
                    <PopoverHeader>
                      <PopHead> Profile </PopHead>
                    </PopoverHeader>

                    <PopoverBody>
                      {/* <IconCnt>
                        <img class="ui medium circular image" src="/images/wireframe/square-image.png" />
                        <label> Sanket Shivam </label>

                      </IconCnt> */}
                      
                      <div class="ui segment">
                        <div class="ui two column very relaxed grid">
                          <div class="column">
                            <img class="ui medium circular image" src="/images/wireframe/square-image.png" />

                          </div>
                          <div class="column">
                            <label> Sanket Shivam </label>
                            <p><small> sanket.shivam467@gmail.com </small></p>
                          </div>
                        </div>
                       
                      </div>
                      <IconCnt>
                        <button  onClick={this.profileClicked} class="ui left floated button">My Profile</button>
                        <button onClick={this.logoutClicked} class="ui right floated inverted red button">Log Out</button>
                      </IconCnt>

                    </PopoverBody>

                  </Popover>


                </NavItem>


                {/* <NavItem>
                <img
                  src="../public/user.png"
                  width="10"
                  height="10"
                  className="d-inline-block align-top"
                  alt="abcd"
                />
              </NavItem> */}

              </Nav>
            </Collapse>
          </Navbar>
        </div>



      </div>
    );
  }
}
