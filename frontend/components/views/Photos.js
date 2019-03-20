import React, { Component } from 'react';
import photoService from '../../services/photos';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    photoService.getAll().then(data => this.setState({ data }));
  }

  render() {
    console.log('DATA ON TÄÄLLÄ TÄLLAISTA NYT', this.state.data);
    return <div>Photos</div>;
  }
}
