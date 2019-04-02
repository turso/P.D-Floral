import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  let [open, setOpen] = useState(false);
  let [firstRender, setFirstRender] = useState(true);

  function handleClick() {
    setOpen(!open);
    setFirstRender(false);
  }

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

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

        <MobileNavBar isItOpen={open} firstRender={firstRender} />
      </MobileNavContainer>
    </div>
  );
};

export default Nav;
