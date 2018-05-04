import React from "react";

import { 
    Button, 
    Container, 
    Row,
    Col
} from 'reactstrap';

export default class Eos extends React.Component {
    render(){
        return(
            <Container id="eos">
                <Col id="eos-header">
                    <h1>EOS</h1>
                    <h2>Here you can see the latest price of the EOS cryptocurrency.</h2>
                    <p>Read more about their project on <a href="https://eos.io/"><strong>https://eos.io/</strong></a></p>
                </Col>
                <Col id="eos-price">
                    <h3>The current price of Eos is {Math.floor(this.props.currency)} SEK.</h3>
                </Col>
                <Col id="eos-footer">
                    <p>Source of the API call is <a href="https://coinmarketcap.com/api/"><strong>https://coinmarketcap.com/api/</strong></a></p>
                </Col>
            </Container>
        )
    }
}