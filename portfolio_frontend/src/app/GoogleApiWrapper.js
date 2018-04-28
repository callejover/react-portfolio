import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Container } from 'reactstrap';
 
export class MapContainer extends Component {
  render() {
      const style = {
        height: '200px',
        width:  '200px'
      }
    return (
        <Container>
            <Map
                style={style}
                google={this.props.google} 
                zoom={5}>
            </Map>
        </Container>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCYEx_KNOEkmKBxgCTXGvfnewE0HPbrlb0')
})(MapContainer)