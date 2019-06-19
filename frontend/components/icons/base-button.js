import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MobileButton = styled.button`
  float: right;
  position: relative;
  padding-top: 0.3rem;
`;

class BaseIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Nav } = this.props;

    const animation = this.props.animations[
      this.props.animation ? this.props.animation : this.props.defaultAnimation
    ];
    const transform = Nav.navOpen ? 'tcon-transform' : '';
    const animationClass = animation.map(s => `${s}`).join(' ');
    const buttonClass = ['tcon', animationClass, `${transform}`].join(' ');

    return (
      <MobileButton
        aria-label={this.props.ariaLabel}
        className={buttonClass}
        onClick={() => {
          this.props.handler();
        }}
      >
        {this.props.children}
      </MobileButton>
    );
  }
}

const mapStateToProps = state => {
  return {
    Nav: state.Nav
  };
};

export default connect(mapStateToProps, null)(BaseIcon);
