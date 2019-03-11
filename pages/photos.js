import React, { Component } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Axios from 'axios';
import Photo from '../components/Photo';

const Center = styled.div`text-align: center;`;

const PhotoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default class Photos extends Component {
  static async getInitialProps({ req, res }) {
    const isServer = !!req;
    if (isServer) {
      const images = res.locals.images;
      console.log('FRONTISSA KUVAT OVAT SERVER SIDE', images);
      console.log('got data in server side:');
      return { images };
    } else {
      const response = await Axios.get('/api/getPhotos');
      console.log('CLIENT FRONT KUVAT OVAT ', response.data.images);
      console.log('got data in client side.');
      return { images: response.data.images };
    }
  }

  render() {
    return (
      <Center>
        <PhotoList>
          {this.props.images.map(photo => (
            <Photo key={photo.images.low_resolution.url} data={photo} />
            // <img src={x.images.low_resolution.url} key={x.images.low_resolution.url} />
          ))}
        </PhotoList>
      </Center>
    );
  }
}
