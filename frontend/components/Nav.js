import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  MobileNavContainer,
  MobileHeaderText,
  MobileNavLinkContainer,
  LanguageButtonContainer,
  LinkBlock,
  ReverseLinkBlock,
  NavContainer,
  NavLinkContainer,
  NavStyles,
  ReverseContainer
} from './styles/NavStyles';
import MenuIcon from './icons/menu';

const MobileNavBar = ({ isItOpen, firstRender }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  if (isItOpen) {
    return (
      <MobileNavLinkContainer>
        <li>
          <ul>
            <LinkBlock exact to="/">
              {t('nav.home')}
            </LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/about">{t('nav.about')}</LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/contact">{t('nav.contact')}</LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/photos">{t('nav.photos')}</LinkBlock>
          </ul>
          <ul>
            <span onClick={() => changeLanguage('fi')}>fi</span>
          </ul>
          <ul>
            <span onClick={() => changeLanguage('en')}>en</span>
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
              {t('nav.home')}
            </ReverseLinkBlock>
          </ul>
          <ul>
            <ReverseLinkBlock to="/about">{t('nav.about')}</ReverseLinkBlock>
          </ul>
          <ul>
            <ReverseLinkBlock to="/contact">{t('nav.contact')}</ReverseLinkBlock>
          </ul>
          <ul>
            <ReverseLinkBlock to="/photos">{t('nav.photos')}</ReverseLinkBlock>
          </ul>
          <ul>
            <span onClick={() => changeLanguage('fi')}>fi</span>
          </ul>
          <ul>
            <span onClick={() => changeLanguage('en')}>en</span>
          </ul>
        </li>
      </ReverseContainer>
    );
  }

  return <div />;
};

export default function Nav() {
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
    <NavContainer>
      <NavLinkContainer>
        <NavStyles>
          <NavLink exact to="/">
            {t('nav.home')}
          </NavLink>
          <NavLink to="/about">{t('nav.about')}</NavLink>
          <NavLink to="/contact">{t('nav.contact')}</NavLink>
          <NavLink to="/photos">{t('nav.photos')}</NavLink>
        </NavStyles>
      </NavLinkContainer>
      <LanguageButtonContainer>
        <button onClick={() => changeLanguage('fi')}>fi</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </LanguageButtonContainer>

      <MobileNavContainer>
        <div>
          <MobileHeaderText>PD FLORAL</MobileHeaderText>
          <MenuIcon animation="x-cross" handler={() => handleClick()} />
        </div>

        <MobileNavBar isItOpen={open} firstRender={firstRender} />
      </MobileNavContainer>
    </NavContainer>
  );
};

