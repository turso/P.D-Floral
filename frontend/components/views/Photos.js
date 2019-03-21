import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';
import moment from 'moment';
import photoService from '../../services/photos';

const PhotoCard = styled.a`
  /* border-style: solid;
  border-width: medium;
  text-align: center; */
  display: block;
  /* padding: 4px; */
  margin-bottom: 20px;
  line-height: 2;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  /* border-radius: 4px; */
`;

const StyledText = styled.div`
  font-size: 1.3rem;
  max-width: 100%;
  padding: 0.9rem;
  font-weight: 400;
  /* border-style: solid;
  border-width: medium;
  text-align: center;
  padding: 0.5rem;
  margin-top: 1rem; */
`;

const StyledImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media screen and (max-width: 320px) {
    max-width: 100%;
  }
`;

const ProfileContainer = styled.div`
  padding: 0.9rem;
  height: 5.5rem;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  border-color: white;
  margin: 0 11px 0 0;
  height: 30px;
  float: left;
`;

const ProfileName = styled.span`
  font-size: 14px;
  /* margin-top: 6px;
  line-height: 20px; */
  color: #3a3a3a;
`;

const ProfileDate = styled.span`
  float: right;
  font-size: 14px;
`;

const style = {
  marginTop: '1rem'
};

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

      return <Masonry style={style}>{photoCards}</Masonry>;
    }

    return <div />;
  }
}
