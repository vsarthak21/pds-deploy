import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import "./index.css";
  import LoginModal from './LoginModal';


let cs = ["fontstyle"];


export default class Example extends React.Component {
  constructor(props) {
    super(props);
     
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      showLogin : 1
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  loginClicked = () =>{
      console.log('clicked');
      this.setState({
          showLogin : 0
      },()=>
        console.log(this.state.showLogin)
      );
     ;
    
  }
  
  render() {
    return (
      <div>
          <div>
          <Navbar color="blue" light expand="md">
          <NavbarBrand href="/">
          <img className="img-responsive" src={require('./logo.PNG')} alt="logo"></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink  style={{color: 'white', textDecoration: 'none'}} onClick={this.loginClicked} >Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: 'white', textDecoration: 'none'}} href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
          </div>
        
        <div>
            <LoginModal />
        </div>
      </div>

    );
  }
}

