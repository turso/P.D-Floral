import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const PhotoCard = styled.div`
  /* background: tomato; */
  /* padding: 5px;
  max-width: 25rem;
  max-height: 36rem;
  margin-top: 10px;

  font-size: 0.9rem;
  text-align: center;
  border-style: solid;
  border-width: medium; */

  /* font-size: 0.9rem;
  max-width: 30rem;
  border-style: solid;
  border-width: medium;
  text-align: center;
  padding: 0.5rem;
  margin-top: 1rem; */
`;

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

const Photo = ({ data }) => {
  return (
    <Masonry>
      {/* {FormatDateToNow(data.created_time)} */}
      {/* <img src={data.user.profile_picture} /> */}
      <img src={data.images.low_resolution.url} />
      {/* {data.caption.text} */}
    </Masonry>
  );
};

export default Photo;
