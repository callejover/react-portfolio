import React from 'react';
import GoogleApiWrapper from './GoogleApiWrapper';
import { Container } from 'reactstrap';
 
class Contact extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <Container>
        <h1>Contact</h1>
        <GoogleApiWrapper />
      </Container>
    );
  }

}
 
export default Contact;