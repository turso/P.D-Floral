import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import photoService from '../services/photos';

export default props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     insta: [],
  //     token: ''
  //   };
  // }

  // async componentDidMount() {
  //   // const res = await axios.get(
  //   //   'https://api.instagram.com/v1/users/self/media/recent/?access_token=8356548.7a68eb1.f6f6e3d9a16d4c809c225d6900211457'
  //   // );
  //   // const data = res.data.data;
  //   // this.setState({
  //   //   insta: dat
  //   // });
  //   // console.log(`Tällaista dataa tuli ${data}`);
  //   const insta = await photoService.getAll();
  //   this.setState({
  //     insta
  //   });
  //   console.log('token on ', insta);
  // }

  return (
    <div>
      {/* Tähän kuvia ja täällä on myös{' '}
        {this.state.insta.map(x => (
          <img src={x.images.standard_resolution.url} key={x.images.standard_resolution.url} />
        ))} */}
      {/* {console.log(this.state.insta)} */}
    </div>
  );
};
