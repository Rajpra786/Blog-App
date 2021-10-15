import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Buttons from './Buttons';

describe('Buttons', () => {
  let props;
  let shallowButtons;
  let renderedButtons;
  let mountedButtons;

  const shallowTestComponent = () => {
    if (!shallowButtons) {
      shallowButtons = shallow(<Buttons {...props} />);
    }
    return shallowButtons;
  };

  const renderTestComponent = () => {
    if (!renderedButtons) {
      renderedButtons = render(<Buttons {...props} />);
    }
    return renderedButtons;
  };

  const mountTestComponent = () => {
    if (!mountedButtons) {
      mountedButtons = mount(<Buttons {...props} />);
    }
    return mountedButtons;
  };  

  beforeEach(() => {
    props = {};
    shallowButtons = undefined;
    renderedButtons = undefined;
    mountedButtons = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
