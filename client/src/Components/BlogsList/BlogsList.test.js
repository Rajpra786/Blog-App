import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BlogsList from './BlogsList';

describe('BlogsList', () => {
  let props;
  let shallowBlogsList;
  let renderedBlogsList;
  let mountedBlogsList;

  const shallowTestComponent = () => {
    if (!shallowBlogsList) {
      shallowBlogsList = shallow(<BlogsList {...props} />);
    }
    return shallowBlogsList;
  };

  const renderTestComponent = () => {
    if (!renderedBlogsList) {
      renderedBlogsList = render(<BlogsList {...props} />);
    }
    return renderedBlogsList;
  };

  const mountTestComponent = () => {
    if (!mountedBlogsList) {
      mountedBlogsList = mount(<BlogsList {...props} />);
    }
    return mountedBlogsList;
  };  

  beforeEach(() => {
    props = {};
    shallowBlogsList = undefined;
    renderedBlogsList = undefined;
    mountedBlogsList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
