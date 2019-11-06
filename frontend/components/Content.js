import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import imgHome from '../static/PD_kukat0184.JPG';
import imgJoku from '../static/PD_kukat0235.JPG';

const StyledContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: auto;
  > * {
    flex: 1 100%;
  }

  background: url(${props => props.kuva}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
`;

const Content = props => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API

    if (props.location.pathname === '/') {
      setTest(true);
    } else {
      setTest(false);
    }
  }, [props.location.pathname]);

  const { location } = props;
  console.log('TILA ON NYT', test);
  return (
    <StyledContent kuva={test ? imgHome : imgJoku}>
      {props.children}
    </StyledContent>
  );
};

export default withRouter(Content);
