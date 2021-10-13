import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Blogs from './Blogs';

describe('Blogs', () => {
  let props;
  let shallowBlogs;
  let renderedBlogs;
  let mountedBlogs;

  const shallowTestComponent = () => {
    if (!shallowBlogs) {
      shallowBlogs = shallow(<Blogs {...props} />);
    }
    return shallowBlogs;
  };

  const renderTestComponent = () => {
    if (!renderedBlogs) {
      renderedBlogs = render(<Blogs {...props} />);
    }
    return renderedBlogs;
  };

  const mountTestComponent = () => {
    if (!mountedBlogs) {
      mountedBlogs = mount(<Blogs {...props} />);
    }
    return mountedBlogs;
  };  

  beforeEach(() => {
    props = {};
    shallowBlogs = undefined;
    renderedBlogs = undefined;
    mountedBlogs = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
