import React from 'react';
import { NavLink } from 'react-router-dom';
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

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isFirstRendered: true
    };
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      isFirstRendered: false
    });
  }

  render() {
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

          <MobileNavBar isItOpen={this.state.isOpen} firstRender={this.state.isFirstRendered} />
        </MobileNavContainer>
      </div>
    );
  }
}

export default Nav;
