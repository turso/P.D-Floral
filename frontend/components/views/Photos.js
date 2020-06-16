/* eslint-disable no-extend-native */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';
import moment from 'moment';
import Spinner from 'react-spinkit';
import photoService from '../../services/photos';
import {
  PhotoCard,
  StyledText,
  StyledImg,
  ProfileContainer,
  ProfilePicture,
  ProfileName,
  ProfileDate,
  SpinnerStyle,
} from '../styles/PhotoStyles';

const FormatDateToNow = createdTime => {
  const dateNow = moment(new Date()).format('X');
  const timeDifference = dateNow - createdTime;
  const formattedTime = Math.round(timeDifference / 60 / 60 / 24);
  const months = formattedTime / 30;

  if (months >= 2) {
    return `${Math.round(months)} Mo`;
  }
  return `${formattedTime} Days`;
};

String.prototype.parseHashtag = function() {
  return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
    const tag = t.replace('#', '');

    return t.link(`https://www.instagram.com/explore/tags/${tag}`);
  });
};

const PhotoCards = photos =>
  photos.map(photo => (
    <div className="card" key={photo.caption.id}>
      <PhotoCard>
        <ProfileContainer>
          <ProfilePicture src={photo.user.profile_picture} />
          <ProfileName>{photo.user.username}</ProfileName>
          <ProfileDate>{FormatDateToNow(photo.created_time)}</ProfileDate>
        </ProfileContainer>
        <StyledImg src={photo.images.standard_resolution.url} />
        <StyledText>
          <div
            dangerouslySetInnerHTML={{
              __html: photo.caption.text.parseHashtag(),
            }}
          />
        </StyledText>
      </PhotoCard>
    </div>
  ));

export default function Photos() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    let isMounted = true;

    photoService.getAll().then(data => {
      if (isMounted) {
        setPhotos(data);
      }
    });
    return () => (isMounted = false);
  }, []);

  if (photos) {
    return <Masonry className="masonry">{PhotoCards(photos)}</Masonry>;
  }
  return (
    <SpinnerStyle>
      <Spinner name="folding-cube" color="#EBCBD0" />
    </SpinnerStyle>
  );
}
