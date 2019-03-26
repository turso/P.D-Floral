import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {
  MobileNavContainer,
  MobileHeaderText,
  MobileNavLinkContainer,
  LinkBlock,
  ReverseLinkBlock,
  NavStyles,
  ReverseContainer
} from './styles/NavStyles';
import MenuIcon from './icons/menu';

const MobileNavBar = ({ isItOpen, firstRender }) => {
  if (isItOpen) {
    return (
      <MobileNavLinkContainer>
        <li>
          <ul>
            <LinkBlock exact to="/">
              Home
            </LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/about">About</LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/contact">Contact</LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/photos">Photos</LinkBlock>
          </ul>
        </li>
      </MobileNavLinkContainer>
    );
  }

  if (!isItOpen && !firstRender) {
    return (
      <ReverseContainer>
        <li>
          <ul>
            <ReverseLinkBlock exact to="/">
              Home
            </ReverseLinkBlock>
          </ul>
          <ul>
            <ReverseLinkBlock to="/about">About</ReverseLinkBlock>
          </ul>
          <ul>
            <ReverseLinkBlock to="/contact">Contact</ReverseLinkBlock>
          </ul>
          <ul>
            <ReverseLinkBlock to="/photos">Photos</ReverseLinkBlock>
          </ul>
        </li>
      </ReverseContainer>
    );
  }

  return <div />;
};

const Nav = props => {
  // constructor() {
  //   super();
  //   this.state = {
  //     isOpen: false,
  //     isFirstRendered: true
  //   };
  // }
  let [isOpen] = useState(false);
  let [isFirstRendered] = useState(true);

  // handleClick() {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //     isFirstRendered: false
  //   });
  // }
  function handleClick() {
    isOpen(!isOpen);
    isFirstRendered(false);
  }

  return (
    <div>
      <NavStyles>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/photos">Photos</NavLink>
        <button onClick={() => changeLanguage('fi')}>fi</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </NavStyles>

      <MobileNavContainer>
        <div>
          <MobileHeaderText>PD FLORAL</MobileHeaderText>
          <MenuIcon animation="x-cross" handler={() => handleClick()} />
        </div>

        <MobileNavBar isItOpen={this.state.isOpen} firstRender={this.state.isFirstRendered} />
      </MobileNavContainer>
    </div>
  );
};

export default Nav;
