import React, { Component } from 'react';
import styled from 'styled-components';

const InstaPost = styled.div`
  cursor: pointer;
  max-width: 100%;
  border: 3px solid white;
  margin-bottom: 20px;
  :hover {
    border: 3px solid rgb(38, 56, 68);
  }
`;

class InstagramFeedGalleryItem extends Component {
  openInstagramPostPage() {
    window.open(this.props.url, '_blank');
  }

  render() {
    return (
      <InstaPost>
        <img
          onClick={this.openInstagramPostPage.bind(this)}
          src={this.props.src}
          id={this.props.id}
          url={this.props.url}
          caption={this.props.caption}
        />
      </InstaPost>
    );
  }
}

export default InstagramFeedGalleryItem;
