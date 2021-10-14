import React from 'react';
import { shallow, render, mount } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  let props;
  let shallowNavBar;
  let renderedNavBar;
  let mountedNavBar;

  const shallowTestComponent = () => {
    if (!shallowNavBar) {
      shallowNavBar = shallow(<NavBar {...props} />);
    }
    return shallowNavBar;
  };

  const renderTestComponent = () => {
    if (!renderedNavBar) {
      renderedNavBar = render(<NavBar {...props} />);
    }
    return renderedNavBar;
  };

  const mountTestComponent = () => {
    if (!mountedNavBar) {
      mountedNavBar = mount(<NavBar {...props} />);
    }
    return mountedNavBar;
  };  

  beforeEach(() => {
    props = {};
    shallowNavBar = undefined;
    renderedNavBar = undefined;
    mountedNavBar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
