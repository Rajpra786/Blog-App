import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CategoryBar from './CategoryBar';

describe('CategoryBar', () => {
  let props;
  let shallowCategoryBar;
  let renderedCategoryBar;
  let mountedCategoryBar;

  const shallowTestComponent = () => {
    if (!shallowCategoryBar) {
      shallowCategoryBar = shallow(<CategoryBar {...props} />);
    }
    return shallowCategoryBar;
  };

  const renderTestComponent = () => {
    if (!renderedCategoryBar) {
      renderedCategoryBar = render(<CategoryBar {...props} />);
    }
    return renderedCategoryBar;
  };

  const mountTestComponent = () => {
    if (!mountedCategoryBar) {
      mountedCategoryBar = mount(<CategoryBar {...props} />);
    }
    return mountedCategoryBar;
  };  

  beforeEach(() => {
    props = {};
    shallowCategoryBar = undefined;
    renderedCategoryBar = undefined;
    mountedCategoryBar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
