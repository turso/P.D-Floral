import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MobileNavContainer,
  MobileHeaderText,
  MobileNavLinkContainer,
  LinkBlock,
  NavStyles
} from './styles/NavStyles';
import MenuIcon from './icons/menu';

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
    const isItOpen = this.state.isOpen;

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

          {isItOpen ? (
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
          ) : (
            <div />
          )}
        </MobileNavContainer>
      </div>
    );
  }
}

export default Nav;
