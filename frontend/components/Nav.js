import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles';
import MenuIcon from './icons/menu';

const MobileNavContainer = styled.div`
  @media (min-width: 641px) {
    display: none;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
  }
  @media (min-width: 320px) {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  margin-top: 1rem;
  position: fixed;
  display: block;
  clear: both;
  right: 0;
  left: 0;
  z-index: 1030;
  *::after,
  *::before {
    display: table;
    content: ' ';
    clear: both;
  }
`;

const MobileHeaderText = styled.a`
  font-size: 22px;
  float: left;
`;

const MobileNavLinkContainer = styled.div`
  z-index: 99;
  height: 1px;
  text-align: center;
  /* display: none;
  visibility: hidden; */
  max-height: 300px;
  font-size: 22px;
  overflow-x: visible;
  border-bottom: 1px solid #ccc;
  display: block;
`;

const MobileNavLink = styled.li`
  list-style: none;
  position: relative;
`;

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const isOpen = { display: this.state.isOpen ? '' : 'none' };

    return (
      <div>
        <NavStyles>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/photos">Photos</NavLink>
        </NavStyles>

        <MobileNavContainer>
          <div>
            <MobileHeaderText>PD FLORAL</MobileHeaderText>
            <MenuIcon animation="x-cross" handler={this.handleClick.bind(this)} />
          </div>

          <MobileNavLinkContainer>
            <ul style={isOpen}>
              <MobileNavLink>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </MobileNavLink>
              <MobileNavLink>
                <NavLink to="/about">About</NavLink>
              </MobileNavLink>
              <MobileNavLink>
                <NavLink to="/contact">Contact</NavLink>
              </MobileNavLink>
              <MobileNavLink>
                <NavLink to="/photos">Photos</NavLink>
              </MobileNavLink>
            </ul>
          </MobileNavLinkContainer>
        </MobileNavContainer>
      </div>
    );
  }
}

export default Nav;
