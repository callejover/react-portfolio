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
    Row,
    Col,
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
                            <NavLink to="/frontend">Front End</NavLink>
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
                <h1>Cupcake ipsum dolor sit.</h1>
                <p>Cupcake ipsum dolor sit. Amet sesame snaps I love jelly-o. Jelly apple pie bonbon.
                    Jelly-o pastry gummi bears candy canes cake jelly. Candy canes marshmallow brownie croissant biscuit chocolate bar liquorice. Donut cake cotton candy jelly beans I love soufflé pudding. Brownie pastry I love cheesecake marzipan pudding I love biscuit.
                    Danish marshmallow cotton candy icing ice cream biscuit candy canes. Cotton candy chocolate bar oat cake. Sugar plum halvah pudding ice cream bonbon.
                    Chocolate cake cake cheesecake powder jelly-o. Sesame snaps I love danish liquorice jujubes halvah I love. Muffin pastry bonbon lollipop bonbon bonbon.
                    Fruitcake pastry I love chocolate cake powder. Tootsie roll chocolate candy canes. Sesame snaps wafer icing cotton candy macaroon pudding croissant danish dragée. Gummi bears lemon drops jelly-o lollipop I love.</p>
            </Container>
        )
    }
}

class FrontEnd extends React.Component {
    render(){
        return(
            <Container id="projects">
                <Row>
                    <Col>
                        <img id="sass" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt=""/>
                        <img id="html" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt=""/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img id="css" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt=""/>
                        <img id="js" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt=""/>
                    </Col>
                </Row>
                <Row>
                    <Col>   
                        <img id="bootstrap" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" alt=""/>
                        <img id="react" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

class Icons extends React.Component {
    render(){
        return(
            <Container>
                <h4>Icons</h4>
                <h4>More Icons</h4>
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
                        <Route path="/frontend" render={() => <FrontEnd />} />
                        <Route path="/contact" render={() => <Contact />} />
                        <Icons />
                    </div>
                </HashRouter>
            </Container>
        );
    }
}

export default App;
