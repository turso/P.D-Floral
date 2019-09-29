/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { toggleNav, closeNav } from '../actions/navActions';
import {
  MobileNavContainer,
  MobileHeaderText,
  MobileNavLinkContainer,
  LanguageButtonContainer,
  LanguageBlock,
  LinkBlock,
  ReverseLinkBlock,
  NavContainer,
  NavLinkContainer,
  NavStyles,
  ReverseContainer,
} from './styles/NavStyles';
import MenuIcon from './icons/menu';

const MobileNavBar = ({ firstRender, closeNav, Nav }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const closeMobileNav = () => {
    setTimeout(() => {
      closeNav();
    }, 400);
  };

  if (Nav.navOpen) {
    return (
      <MobileNavLinkContainer>
        <li>
          <ul>
            <LinkBlock exact to="/" onClick={() => closeMobileNav()}>
              {t('nav.home')}
            </LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/about" onClick={() => closeMobileNav()}>
              {t('nav.about')}
            </LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/contact" onClick={() => closeMobileNav()}>
              {t('nav.contact')}
            </LinkBlock>
          </ul>
          <ul>
            <LinkBlock to="/photos" onClick={() => closeMobileNav()}>
              {t('nav.photos')}
            </LinkBlock>
          </ul>
          {i18n.language === 'en' && (
            <LanguageBlock>
              <span
                onClick={() => changeLanguage('fi')}
                onKeyPress={() => changeLanguage('fi')}
              >
                {t('lang')}
              </span>
            </LanguageBlock>
          )}
          {i18n.language === 'fi' && (
            <LanguageBlock>
              <span
                onClick={() => changeLanguage('en')}
                onKeyPress={() => changeLanguage('fi')}
              >
                {t('lang')}
              </span>
            </LanguageBlock>
          )}
        </li>
      </MobileNavLinkContainer>
    );
  }

  if (!Nav.navOpen && !firstRender) {
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
            <ReverseLinkBlock to="/contact">
              {t('nav.contact')}
            </ReverseLinkBlock>
          </ul>
          <ul>
            <ReverseLinkBlock to="/photos">{t('nav.photos')}</ReverseLinkBlock>
          </ul>
          <ul>
            <span
              onClick={() => changeLanguage('fi')}
              onKeyPress={() => changeLanguage('fi')}
            >
              {t('lang')}
            </span>
          </ul>
          <ul>
            <span
              onClick={() => changeLanguage('en')}
              onKeyPress={() => changeLanguage('fi')}
            >
              {t('lang')}
            </span>
          </ul>
        </li>
      </ReverseContainer>
    );
  }

  return <div />;
};

const Nav = ({ toggleNav, Nav, closeNav }) => {
  const [firstRender, setFirstRender] = useState(true);

  function handleClick() {
    toggleNav();
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
        {i18n.language === 'en' && (
          <button type="button" onClick={() => changeLanguage('fi')}>
            {t('lang')}
          </button>
        )}
        {i18n.language === 'fi' && (
          <button type="button" onClick={() => changeLanguage('en')}>
            {t('lang')}
          </button>
        )}
      </LanguageButtonContainer>

      <MobileNavContainer>
        <div>
          <MobileHeaderText>PD FLORAL</MobileHeaderText>
          <MenuIcon animation="x-cross" handler={() => handleClick()} />
        </div>

        <MobileNavBar firstRender={firstRender} closeNav={closeNav} Nav={Nav} />
      </MobileNavContainer>
    </NavContainer>
  );
};

const mapStateToProps = state => ({
  Nav: state.Nav,
});

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav()),
  closeNav: () => dispatch(closeNav()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
