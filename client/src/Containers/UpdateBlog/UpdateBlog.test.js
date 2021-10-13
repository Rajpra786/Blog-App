import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UpdateBlog from './UpdateBlog';

describe('UpdateBlog', () => {
  let props;
  let shallowUpdateBlog;
  let renderedUpdateBlog;
  let mountedUpdateBlog;

  const shallowTestComponent = () => {
    if (!shallowUpdateBlog) {
      shallowUpdateBlog = shallow(<UpdateBlog {...props} />);
    }
    return shallowUpdateBlog;
  };

  const renderTestComponent = () => {
    if (!renderedUpdateBlog) {
      renderedUpdateBlog = render(<UpdateBlog {...props} />);
    }
    return renderedUpdateBlog;
  };

  const mountTestComponent = () => {
    if (!mountedUpdateBlog) {
      mountedUpdateBlog = mount(<UpdateBlog {...props} />);
    }
    return mountedUpdateBlog;
  };  

  beforeEach(() => {
    props = {};
    shallowUpdateBlog = undefined;
    renderedUpdateBlog = undefined;
    mountedUpdateBlog = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
