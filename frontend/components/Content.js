import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  /* color: red;
  @media only screen and (min-width: 705px) {
    padding: 7rem 0rem;
  } */
`;

const Content = props => {
  return <StyledContent>{props.children}</StyledContent>;
};

export default Content;
