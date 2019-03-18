import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import routes from './components/routes';
import FancyRoute from './components/FancyRoute';
import Nav from './components/Nav';

// import { anecdoteInitialization } from './actionCreators';

const Inner = styled.div`
  max-width: 1440px;
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
        <Inner>
          <GlobalStyle />
          <Router>
            <div>
              <Nav />
              <Switch>{routes.map((route, i) => <FancyRoute key={i} {...route} />)}</Switch>
            </div>
          </Router>
        </Inner>
      </div>
    );
  }
}

export default connect(null)(App);
