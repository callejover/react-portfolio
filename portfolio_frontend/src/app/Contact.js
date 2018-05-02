import React from 'react';
import { 
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
 } from 'reactstrap';
 
class Contact extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){

    fetch('https://callejoverbackend.herokuapp.com/api/comments',{
      
    })
    .then(data => data.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>GuestBook</h3>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="guest-name">Name</Label>
                <Input type="text" name="guest-name" id="guest-name" />
              </FormGroup>
              <FormGroup>
                <Label for="guest-message">Message</Label>
                <Input type="textarea" name="guest-text" id="exampleText" />
              </FormGroup>
            </Col>
            <Col>
              <Button>Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }

}
 
export default Contact;