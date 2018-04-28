import React from "react";
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
            <Container id="navbar">
                <Navbar color="faded" light expand="md" fixed="bottom" className="app">
                    <Nav id="nav">
                        <NavItem>
                        <NavLink to="/">Bio</NavLink>
                        </NavItem>
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
            <Container id="bio">
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

class App extends React.Component {
    render() {
        return (
            <Container className="app">
                <HashRouter>
                    <div>
                        <NavComponent />
                        <Route exact path="/" component={Bio} />
                        <Route path="/school" render={() => <School />} />
                        <Route path="/contact" render={() => <Contact />} />
                    </div>
                </HashRouter>
            </Container>
        );
    }
}

export default App;
