import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    height: 190px;
    display: block;
  }
`;

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
`;

const LinkBlock = styled(NavLink)`display: block;`;

const NavStyles = styled.ul`
  @media (max-width: 640px) {
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
    &:before {
      content: '';
      width: 2px;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
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

export { MobileNavContainer, MobileHeaderText, MobileNavLinkContainer, LinkBlock, NavStyles };
