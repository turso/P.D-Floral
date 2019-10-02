import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import routes from './components/routes';
import FancyRoute from './components/FancyRoute';
import Nav from './components/Nav';
import Content from './components/Content';
import img from './static/PD_kukat0184.JPG';

const Inner = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  font-family: 'Raleway', sans-serif;
  /* max-width: 1440px; */
  margin: 0 auto;
  /* background-color: #0b0c11;
  color: white; */

  /* background: url(${img}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%; */
`;

const GlobalStyle = createGlobalStyle`
  /* html {
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
  } */
`;

const Loader = () => <div>loading...</div>;

export default function App() {
  return (
    <div>
      <Inner>
        <GlobalStyle />
        <Router>
          <div>
            <Content>
              <Suspense fallback={<Loader />}>
                <Nav />
              </Suspense>
              <Switch>
                {routes.map((route, i) => (
                  <FancyRoute key={i} {...route} />
                ))}
              </Switch>
            </Content>
          </div>
        </Router>
      </Inner>
    </div>
  );
}
