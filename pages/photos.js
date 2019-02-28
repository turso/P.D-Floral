import React, { Component } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import PhotoList from '../components/PhotoList';
import Axios from 'axios';

export default class Photos extends Component {
  static async getInitialProps({ req, res }) {
    const isServer = !!req;
    if (isServer) {
      const images = res.locals.images;
      // console.log('FRONTISSA KUVAT OVAT SERVER SIDE', images);
      console.log('got data in server side:');
      return { images };
    } else {
      const response = await Axios.get('/api/getPhotos');
      // console.log('CLIENT FRONT KUVAT OVAT ', response.data.images);
      console.log('got data in client side.');
      return { images: response.data.images };
    }
  }

  // static async getInitialProps() {
  //   const res = await fetch(`/photos`);
  //   const images = await res.json();

  //   return { images };
  // }

  render() {
    return (
      <div>
        Tähän kuvia ja täällä on myös{' '}
        {this.props.images.map(x => (
          <img src={x.images.standard_resolution.url} key={x.images.standard_resolution.url} />
        ))}
        {/* {console.log('PROPSIT!!!', this.props.images)} */}
      </div>
    );
  }
}
