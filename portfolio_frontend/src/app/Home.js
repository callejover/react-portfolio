import React from "react";

import { 
    Button, 
    Container, 
    Row,
    Col
} from 'reactstrap';

export default class Home extends React.Component {
    render(){
        return(
            <Container id="home">
                <h1>Carl Jovér</h1>
                <h2>Front End developer</h2>
                <p>Swedish web developer focusing on Front End.</p>
                <p>Available for hire, summer 2019</p>
            </Container>
        )
    }
}