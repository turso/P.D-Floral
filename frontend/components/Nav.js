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
  li {
    z-index: 99;
    height: 0;
    text-align: center;
    background-color: coral;
    /* display: none;
  visibility: hidden; */
    max-height: 300px;
    font-size: 22px;
    overflow-x: visible;
    border-bottom: 1px solid #ccc;
    display: block;
    transition: all 0.5s ease;
  }
  ul {
    list-style: none;
    position: relative;
  }
`;

const MobileNavLink = styled.li`
  list-style: none;
  position: relative;
  /* background-color: green; */
`;

const LinkBlock = styled(NavLink)`
  display: block;
  transition: all 0.5s ease;
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
    // TODO: Change height: 200 to something better (not hardcoded)
    const isOpen = { height: this.state.isOpen ? '200px' : '0' };
    const isVisible = { display: this.state.isOpen ? '' : 'none' };
    const High = { height: this.state.isOpen ? '44px' : '0' };

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
            <li style={isOpen}>
              <ul>
                <LinkBlock exact to="/" style={(isVisible, High)}>
                  Home
                </LinkBlock>
              </ul>
              <ul>
                <LinkBlock to="/about" style={(isVisible, High)}>
                  About
                </LinkBlock>
              </ul>
              <ul>
                <LinkBlock to="/contact" style={(isVisible, High)}>
                  Contact
                </LinkBlock>
              </ul>
              <ul>
                <LinkBlock to="/photos" style={(isVisible, High)}>
                  Photos
                </LinkBlock>
              </ul>
            </li>
          </MobileNavLinkContainer>
        </MobileNavContainer>
      </div>
    );
  }
}

export default Nav;
