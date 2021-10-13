import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CreatePost from './CreatePost';

describe('CreatePost', () => {
  let props;
  let shallowCreatePost;
  let renderedCreatePost;
  let mountedCreatePost;

  const shallowTestComponent = () => {
    if (!shallowCreatePost) {
      shallowCreatePost = shallow(<CreatePost {...props} />);
    }
    return shallowCreatePost;
  };

  const renderTestComponent = () => {
    if (!renderedCreatePost) {
      renderedCreatePost = render(<CreatePost {...props} />);
    }
    return renderedCreatePost;
  };

  const mountTestComponent = () => {
    if (!mountedCreatePost) {
      mountedCreatePost = mount(<CreatePost {...props} />);
    }
    return mountedCreatePost;
  };  

  beforeEach(() => {
    props = {};
    shallowCreatePost = undefined;
    renderedCreatePost = undefined;
    mountedCreatePost = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
