import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { isThereMulti } from '../utils/utility';

import InstagramFeedGalleryItem from './InstagramFeedGalleryItem';

const InstaStyles = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

class InstagramFeedGallery extends Component {
  constructor() {
    super();
    this.state = {
      instagramGalleryItems: []
    };
  }

  componentDidMount() {
    fetch('/feed', { method: 'POST' })
      .then(res => res.json())
      .then(res => {
        if (isThereMulti(res, res.status, res.items)) {
          let items = res.items
            .map(item => ({
              src: item.image,
              caption: item.caption,
              id: item.id,
              url: item.url
            }))
            .slice(0, 11);
          const instagramProfileLink = {
            src: '/assets/images/turso_insta.jpg',
            caption: 'Instagram Profile Image',
            id: 'instagramProfileImage',
            url: 'https://www.instagram.com/turso/'
          };
          items.push(instagramProfileLink);
          items = items.map(item => (
            <InstagramFeedGalleryItem
              src={item.src}
              caption={item.caption}
              id={item.id}
              url={item.url}
            />
          ));
          this.setState({ instagramFeedGalleryItems: items });
        }
      })
      .catch(err => {
        if (err) {
          console.log(
            'frontend - InstagramFeedGallery-component',
            `Error while requesting the instagram-feed: ${err}`
          );
        }
      });
  }

  render() {
    return <InstaStyles>{this.state.instagramFeedGalleryItems}</InstaStyles>;
  }
}

export default InstagramFeedGallery;
