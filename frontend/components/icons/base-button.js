import React from 'react';
import styled from 'styled-components';

const MobileButton = styled.button`
  float: right;
  position: relative;
`;

class BaseIcon extends React.Component {
  constructor(props) {
    super(props);

    const isActive = props.isActive ? props.isActive : false;
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      active: isActive
    };
  }

  handleClick(event) {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    const animation = this.props.animations[
      this.props.animation ? this.props.animation : this.props.defaultAnimation
    ];
    const transform = this.state.active ? 'tcon-transform' : '';
    const animationClass = animation.map(s => `${s}`).join(' ');
    const buttonClass = ['tcon', animationClass, `${transform}`].join(' ');

    return (
      <MobileButton
        aria-label={this.props.ariaLabel}
        className={buttonClass}
        onClick={() => {
          this.handleClick();
          this.props.handler();
        }}
      >
        {this.props.children}
      </MobileButton>
    );
  }
}

export default BaseIcon;
