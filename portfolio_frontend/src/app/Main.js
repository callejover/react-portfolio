import React, { Component } from "react";
import Contact from './Contact';

import { Route, NavLink, HashRouter } from "react-router-dom";
import { 
    Button, 
    Container, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    Form, 
    FormGroup,
    Label,
    Input
} from 'reactstrap';


// NOTE!!!!!!   NavLink used in React-Router, not Bootstap!


class NavComponent extends React.Component {
    render(){
        return(
            <Container>
                <Navbar color="light" light expand="md">
                    <NavLink to="/">Bio</NavLink>
                    <NavbarToggler onClick={this.toggle} />
                    <Nav>
                        <NavItem>
                            <NavLink to="/school">School</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

class Bio extends React.Component {
    render(){
        return(
            <Container>
                <h1>Bio</h1>
            </Container>
        )
    }
}

class School extends React.Component {
    render(){
        return(
            <Container>
                <h1>School</h1>
            </Container>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <NavComponent />
                    <Route exact path="/" component={Bio} />
                    <Route path="/school" render={() => <School />} />
                    <Route path="/contact" render={() => <Contact />} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;