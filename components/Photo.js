import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const FormatDateToNow = createdTime => {
  const dateNow = moment(new Date()).format('X');
  const timeDifference = dateNow - createdTime;
  // let formatoituUnix = moment.unix(result).format('MMMM D, YYYY');
  const formattedTime = Math.round(timeDifference / 60 / 60 / 24);

  return formattedTime;
};

const Photo = ({ data }) => {
  return (
    <div>
      {FormatDateToNow(data.created_time)} days
      <img src={data.images.low_resolution.url} />
      {data.caption.text}
    </div>
  );
};

export default Photo;
