import React, { Component, createRef } from 'react';

import { Parent, Child } from './styles/MasonryStyles';

export default class Masonry extends Component {
  static defaultProps = {
    rowHeight: 70, // in pixels
    colWidth: `17em`
  };

  state = { spans: [] };
  ref = createRef();
  // sums up the heights of all child nodes for each grid item
  sumUp = (acc, node) => acc + node.scrollHeight;

  computeSpans = () => {
    const { rowHeight } = this.props;
    const spans = [];
    Array.from(this.ref.current.children).forEach(child => {
      const childHeight = Array.from(child.children).reduce(this.sumUp, 0);
      const span = Math.ceil(childHeight / rowHeight);
      spans.push(span + 1);
      child.style.height = span * rowHeight + `px`;
    });
    this.setState({ spans });
  };

  componentDidMount() {
    this.computeSpans();
    window.addEventListener('resize', this.computeSpans);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.computeSpans);
  }

  render() {
    return (
      <Parent ref={this.ref} {...this.props}>
        {this.props.children.map((child, i) => (
          <Child key={i} span={this.state.spans[i]}>
            {child}
          </Child>
        ))}
      </Parent>
    );
  }
}
