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
 
export default class Guestbook extends React.Component {
  render() {
    var listOfComments = this.props.comments.data;
    Array.isArray(listOfComments) ? 
      listOfComments = listOfComments.map(function(comment, index){
        return(
          <Comment author={comment.author} body={comment.body} key={index}/>
        )
      })
    : console.log('Not an array');
    return (
      <Container id="guestbook">
        <h1>Guestbook</h1>
        <p>Write something before you leave.</p>
        <Col id="comments-container">
          <ul>
            {listOfComments}
          </ul>
        </Col>
        <PostComment updateComments={this.updateComments}/>
      </Container>
    );
  }
}

// COMPONENT TO SHOW ALL THE COMMENTS
class Comment extends React.Component {
  render(){
    return(
      <Container>
        <div className="comment">
          <li>  
            <h3>{this.props.author}</h3>
            <p>{this.props.body}</p>
          </li>
        </div>
      </Container>
    )
  }
}

// COMPONENT TO POST A NEW COMMENT
class PostComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Your name',
      body: 'Your comment'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="guest-message">Message</Label>
              <Input name="body" type="textarea" value={this.state.value} onChange={this.handleInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
                <Label for="guest-name">Name</Label>
                <Input name="author" type="text" value={this.state.value} onChange={this.handleInputChange}/>
              </FormGroup>
          </Col>
          <Col id="submit-button">
            <Button value="Submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    )
  }

  
  // CUSTOM FUNCTIONS

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // SEND A POST REQUEST TO THE DB
  handleSubmit(event) {
      fetch('https://callejoverbackend.herokuapp.com/api/comments',
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({author: this.state.author, body: this.state.body})
    })
    .then(res => {
      console.log(res);
      alert('Thank you for posting! Please refresh the page to view your comment')
    })
    .catch(res => console.log(res))
    
    event.preventDefault();
  }
}