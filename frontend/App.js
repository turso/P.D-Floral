import React from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

// import { anecdoteInitialization } from './actionCreators';

const Inner = styled.div`
  max-width: 120px;
  margin: 0 auto;
  /* padding: 2rem; */
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-weight: 900;
  }
  *,
*::after
,*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
} 
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: 'Raleway', sans-serif;
    padding: 0;
    margin: 0;
    line-height: 2;
  }
  h1 {
    font-weight: 900 !important;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

class App extends React.Component {
  // componentDidMount = async () => {
  //   this.props.anecdoteInitialization();
  // };

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Programming Anecdotes</h1>
      </div>
    );
  }
}

export default connect(null)(App);
