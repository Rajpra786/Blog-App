import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SmallBlogCard from './SmallBlogCard';

describe('SmallBlogCard', () => {
  let props;
  let shallowSmallBlogCard;
  let renderedSmallBlogCard;
  let mountedSmallBlogCard;

  const shallowTestComponent = () => {
    if (!shallowSmallBlogCard) {
      shallowSmallBlogCard = shallow(<SmallBlogCard {...props} />);
    }
    return shallowSmallBlogCard;
  };

  const renderTestComponent = () => {
    if (!renderedSmallBlogCard) {
      renderedSmallBlogCard = render(<SmallBlogCard {...props} />);
    }
    return renderedSmallBlogCard;
  };

  const mountTestComponent = () => {
    if (!mountedSmallBlogCard) {
      mountedSmallBlogCard = mount(<SmallBlogCard {...props} />);
    }
    return mountedSmallBlogCard;
  };  

  beforeEach(() => {
    props = {};
    shallowSmallBlogCard = undefined;
    renderedSmallBlogCard = undefined;
    mountedSmallBlogCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
