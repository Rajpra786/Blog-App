import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let props;
  let shallowFooter;
  let renderedFooter;
  let mountedFooter;

  const shallowTestComponent = () => {
    if (!shallowFooter) {
      shallowFooter = shallow(<Footer {...props} />);
    }
    return shallowFooter;
  };

  const renderTestComponent = () => {
    if (!renderedFooter) {
      renderedFooter = render(<Footer {...props} />);
    }
    return renderedFooter;
  };

  const mountTestComponent = () => {
    if (!mountedFooter) {
      mountedFooter = mount(<Footer {...props} />);
    }
    return mountedFooter;
  };  

  beforeEach(() => {
    props = {};
    shallowFooter = undefined;
    renderedFooter = undefined;
    mountedFooter = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
