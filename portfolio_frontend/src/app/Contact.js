import React from 'react';

import { 
    Container, 
    Row, 
    Col } from 'reactstrap';

class Distance extends React.Component {
    render(){
        return(
            <h1>Distance</h1>
        )
    }
}


class Guestbook extends React.Component {
    render(){
        return(
            <h1>Guestbook</h1>
        )
    }
}

class Contact extends React.Component {
    render(){
        return(
            <Container>
                <Distance />
                <Guestbook />
            </Container>
        )
    }
}

export default Contact;