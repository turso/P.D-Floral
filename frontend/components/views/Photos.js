import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';
import moment from 'moment';
import Spinner from 'react-spinkit';
import Content from '../Content';
import photoService from '../../services/photos';
import {
  PhotoCard,
  StyledText,
  StyledImg,
  ProfileContainer,
  ProfilePicture,
  ProfileName,
  ProfileDate,
  SpinnerStyle
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

const photoCards = photos =>
  photos.map(photo => (
    <div className="card" key={photo.caption.id}>
      <PhotoCard>
        <ProfileContainer>
          <ProfilePicture src={photo.user.profile_picture} />
          <ProfileName>{photo.user.username}</ProfileName>
          <ProfileDate>{FormatDateToNow(photo.created_time)}</ProfileDate>
        </ProfileContainer>
        <StyledImg src={photo.images.standard_resolution.url} />
        <StyledText>{photo.caption.text}</StyledText>
      </PhotoCard>
    </div>
  ));

const Photos = () => {
  let [photos, setPhotos] = useState(null);

  useEffect(() => {
    let isMounted = true;

    photoService.getAll().then(data => {
      if (isMounted) {
        setPhotos(data);
      }
    });
    return () => (isMounted = false);
  }, []);

  console.log('DATA ON TÄÄLLÄ TÄLLAISTA NYT', photos);

  if (photos) {
    return <Masonry className="masonry">{photoCards(photos)}</Masonry>;
  } else {
    return (
      <SpinnerStyle>
        <Spinner name="folding-cube" color="purple" />
      </SpinnerStyle>
    );
  }
};

export default Photos;
