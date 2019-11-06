import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const toggleLinkKeyframes = keyframes`
  0% {
    display:block;
  }
  55% {
    opacity: 0.3;
  }
  65% {
    visibility: hidden;
  }
  100% {
    visibility:hidden;
    display: none;
    opacity: 0.1;
  }
`;

const toggleReverseKeyFrames = keyframes`
    0% {
    height: 225px;
    display: block;
    z-index: 99;
  }
  100% {
    height: 0px;
    display: none;
    z-index: -1;
  }
`;

const toggleReverseUlKeyFrames = keyframes`
    0% {
    height: 44px;
    display: block;
  }
  100% {
    height: 0px;
    display: none;
  }
`;

const ReverseContainer = styled.div`
  li {
    z-index: 99;
    text-align: center;
    font-size: 22px;
    overflow-x: visi§e;
    list-style: none;
    animation-name: ${toggleReverseKeyFrames};
    animation-duration: 0.6s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
  ul {
    list-style: none;
    position: relative;
    animation-name: ${toggleReverseUlKeyFrames};
    animation-duration: 0.6s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
  span {
    animation-name: ${toggleLinkKeyframes};
    animation-duration: 0.6s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
`;

const ReverseLinkBlock = styled(NavLink)`
  display: block;
  animation-name: ${toggleLinkKeyframes};
  animation-duration: 0.6s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const toggleNavKeyframes = keyframes`
  0% {
    height: 0px;
    display: none;
  }
  100% {
    height: 44px;
    display: block;
  }
`;

const toggleNavContainerKeyframes = keyframes`
    0% {
    height: 0px;
    display: none;
  }
  100% {
    height: 225px;
    display: block;
  }
`;

const MobileNavContainer = styled.div`
  @media only screen and (min-width: 705px) {
    display: none;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
  }
  @media only screen and (min-width: 320px) {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  margin-top: 1rem;
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

const MobileHeaderImg = styled.img`
  border-style: none;
    height: 11rem;
    position: absolute;
    left: -3.5rem;
    top: -2.1rem;
`;

const MobileNavLinkContainer = styled.div`
  li {
    margin-top: 1.5rem;
    z-index: 99;
    text-align: center;
    font-size: 22px;
    overflow-x: visible;
    list-style: none;
    animation-name: ${toggleNavContainerKeyframes};
    animation-duration: 0.6s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
  ul {
    list-style: none;
    position: relative;
    animation-name: ${toggleNavKeyframes};
    animation-duration: 0.6s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
  span {
    display: block;
    cursor: pointer;
    :hover {
      background: #EBCBD0;
    }
  }
`;

const LinkBlock = styled(NavLink)`
  color: white;
  display: block;
  cursor: pointer;
  :hover {
    background: #EBCBD0;
  }
`;

const LanguageBlock = styled.ul`
  color: white;
  display: block;
  cursor: pointer;
  :hover {
    background: #EBCBD0;
  }
`;

const NavStyles = styled.ul`
  @media only screen and (max-width: 705px) {
    display: none;
  }

  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    &:after {
      height: 2px;
      background: #EBCBD0;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.6s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

const LanguageButtonContainer = styled.div`
  @media only screen and (max-width: 705px) {
    display: none;
  }
  display: flex;
  float: right;
  button {
    color: white;
    padding-top: 1.3rem;
    padding-right: 2rem;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.5rem;
    background: none;
    border: 0;
    line-height: 2;
    cursor: pointer;
    &:after {
      height: 2px;
      background: #EBCBD0;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.6s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;

const NavLinkContainer = styled.div`
  float: left;
  display: flex;
`;

const NavContainer = styled.div`
  @media only screen and (max-width: 705px) {
    padding-bottom: 1rem;
  }
  @media only screen and (min-width: 705px) {
    padding-top: 1rem;
  }
`;

export {
  MobileNavContainer,
  MobileHeaderImg,
  MobileNavLinkContainer,
  LanguageButtonContainer,
  LanguageBlock,
  LinkBlock,
  ReverseLinkBlock,
  NavContainer,
  NavLinkContainer,
  NavStyles,
  ReverseContainer,
};
