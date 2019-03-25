import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';
import moment from 'moment';
import photoService from '../../services/photos';
import {
  PhotoCard,
  StyledText,
  StyledImg,
  ProfileContainer,
  ProfilePicture,
  ProfileName,
  ProfileDate
} from '../styles/PhotoStyles';

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
            <ProfileContainer>
              <ProfilePicture src={photo.user.profile_picture} />
              <ProfileName>{photo.user.username}</ProfileName>
              <ProfileDate>{FormatDateToNow(photo.created_time)}</ProfileDate>
            </ProfileContainer>
            <StyledImg src={photo.images.standard_resolution.url} />
            {/* <div> {photo.caption.text}</div> */}
            <StyledText>{photo.caption.text}</StyledText>
          </PhotoCard>
        </div>
      ));

      return <Masonry className="masonry">{photoCards}</Masonry>;
    }

    return <div />;
  }
}
