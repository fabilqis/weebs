import React from 'react';
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import Why from '../pages/Why'


import{ 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem
    } from 'reactstrap';

    import{
      Route,
      HashRouter,
      Link
    } from "react-router-dom";

export default class Navbars extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  render() {
    return (
    <HashRouter>
    <div>
        <Navbar className="fixed-top" color="warning" light  expand="md">
          <NavbarBrand className='brand' to="/">Weebs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
            <NavItem className='navitem' >
                <NavLink tag={Link}className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem className='navitem'>
                <NavLink tag={Link} className="text-dark" to="/whyme">Why Me?</NavLink>
              </NavItem>
              <NavItem className='navitem'>
                <NavLink tag={Link} className="text-dark" to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route path='/contact' component={Contacts}/>
        <Route path='/whyme' component={Why}/>
        <Route exact path='/' component={Home}/>
      </div>
      </HashRouter>
    );
  }
}