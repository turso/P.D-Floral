import styled from 'styled-components';

const PhotoCard = styled.a`
  display: block;
  margin-bottom: 20px;
  line-height: 2;
  background-color: #fff;
  border: 1px solid #e5e5e5;
`;

const StyledText = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  max-width: 100%;
  padding: 0.9rem;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
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
  color: #3a3a3a;
`;

const ProfileDate = styled.span`
  float: right;
  font-size: 14px;
`;

const SpinnerStyle = styled.div`
  position: absolute;
  left: 48%;
  @media only screen and (min-width: 320px) {
    top: 65%;
  }
  @media only screen and (min-width: 375px) {
    top: 55%;
  }
  @media only screen and (min-width: 600px) {
    top: 45%;
  }
  @media only screen and (min-width: 1024px) {
    top: 30%;
  }
`;

export {
  PhotoCard,
  StyledText,
  StyledImg,
  ProfileContainer,
  ProfilePicture,
  ProfileName,
  ProfileDate,
  SpinnerStyle
};
