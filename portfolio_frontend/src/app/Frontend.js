import React from "react";

import { 
    Button, 
    Container, 
    Row,
    Col
} from 'reactstrap';

export default class FrontEnd extends React.Component {
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