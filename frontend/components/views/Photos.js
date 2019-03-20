import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';
import moment from 'moment';
import photoService from '../../services/photos';
import Photo from '../Photo';

const PhotoCard = styled.a`
  /* border-style: solid;
  border-width: medium;
  text-align: center; */
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 2;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
`;

const StyledText = styled.div`
  font-size: 1.3rem;
  max-width: 100%;
  padding: 0.9rem;
  /* border-style: solid;
  border-width: medium;
  text-align: center;
  padding: 0.5rem;
  margin-top: 1rem; */
`;

const StyledImg = styled.img`@media screen and (max-width: 320px) {max-width: 100%;}`;

const FormatDateToNow = createdTime => {
  const dateNow = moment(new Date()).format('X');
  const timeDifference = dateNow - createdTime;
  const formattedTime = Math.round(timeDifference / 60 / 60 / 24);
  const months = formattedTime / 30;

  if (months >= 2) {
    return Math.round(months) + ' Mo';
  } else {
    return formattedTime + ' Days';
  }
};

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    photoService.getAll().then(data => this.setState({ data }));
  }

  render() {
    console.log('DATA ON TÄÄLLÄ TÄLLAISTA NYT', this.state.data);
    const photos = this.state.data;

    if (photos) {
      const photoCards = photos.map(photo => (
        <div className="card" key={photo.caption.id}>
          <PhotoCard>
            <div>{FormatDateToNow(photo.created_time)}</div>
            <StyledImg src={photo.images.low_resolution.url} />
            {/* <div> {photo.caption.text}</div> */}
            <StyledText>{photo.caption.text}</StyledText>
          </PhotoCard>
        </div>
      ));

      return <Masonry>{photoCards}</Masonry>;
    }

    return <div />;
  }
}
