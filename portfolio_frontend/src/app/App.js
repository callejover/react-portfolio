import React from "react";
import Guestbook from './Guestbook';
import Eos from './Eos';
import Home from './Home';
import FrontEnd from './Frontend';

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
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/frontend">Front End</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/eos">Eos price</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Guestbook</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            comments: [],
            currency: []
        })

        this.updateComments = this.updateComments.bind(this);
    }

    updateComments(){
        fetch("https://callejoverbackend.herokuapp.com/api/comments")
          .then(response => response.json())
          .then(data => this.setState({ comments: data }));
    }

    componentDidMount() {
        this.updateComments();
        fetch('https://api.coinmarketcap.com/v2/ticker/1765/?convert=SEK')
            .then(response => response.json())
            .then(coin => this.setState({
                currency: coin.data.quotes.SEK.price
            }))
    }

    render() {
        return (
            <Container className="app">
                <HashRouter>
                    <div>
                        <NavComponent />
                        <Route exact path="/" component={Home} />
                        <Route path="/frontend" render={() => <FrontEnd />} />
                        <Route path="/eos" render={() => <Eos currency={this.state.currency}/>} />
                        <Route path="/contact" render={() => <Guestbook comments={this.state.comments} updateComments={this.updateComments} />} />
                    </div>
                </HashRouter>
            </Container>
        );
    }
}

export default App;
