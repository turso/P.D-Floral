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
    height: 265px;
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
    overflow-x: visible;
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
    height: 265px;
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

const MobileHeaderText = styled.a`
  font-size: 22px;
  float: left;
`;

const MobileNavLinkContainer = styled.div`
  li {
    z-index: 99;
    text-align: center;
    font-size: 22px;
    overflow-x: visible;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
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
      background: yellow;
    }
  }
`;

const LinkBlock = styled(NavLink)`
  display: block;
  cursor: pointer;
  :hover {
    background: yellow;
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
    padding: 1rem 3rem;
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
      background: red;
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
    padding: 1rem 3rem;
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
      background: red;
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
  padding-bottom: 6rem;
  @media only screen and (max-width: 705px) {
    padding-bottom: 1rem;
  }
`;

export {
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
};
