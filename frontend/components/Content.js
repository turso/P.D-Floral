import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  color: red;
  display: flex;
  flex-flow: row wrap;
  height: auto;
  > * {
    flex: 1 100%;
  }
`;

const Content = props => <StyledContent>{props.children}</StyledContent>;

export default Content;
