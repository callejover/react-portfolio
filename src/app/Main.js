import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Bio extends React.Component {
    render(){
        return(
            <h1>Bio</h1>
        )
    }
}

class School extends React.Component {
    render(){
        return(
            <h1>School</h1>
        )
    }
}

class Contact extends React.Component {
    render(){
        return(
            <h1>Contact</h1>
        )
    }
}


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                <Route exact path="/" component={Bio} />
                <Route path="/school" render={() => <School />} />
                <Route path="/contact" render={() => <Contact />} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;