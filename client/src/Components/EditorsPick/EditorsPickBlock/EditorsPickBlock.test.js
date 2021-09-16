import React from 'react';
import { shallow, render, mount } from 'enzyme';
import EditorsPickBlock from './EditorsPickBlock';

describe('EditorsPickBlock', () => {
  let props;
  let shallowEditorsPickBlock;
  let renderedEditorsPickBlock;
  let mountedEditorsPickBlock;

  const shallowTestComponent = () => {
    if (!shallowEditorsPickBlock) {
      shallowEditorsPickBlock = shallow(<EditorsPickBlock {...props} />);
    }
    return shallowEditorsPickBlock;
  };

  const renderTestComponent = () => {
    if (!renderedEditorsPickBlock) {
      renderedEditorsPickBlock = render(<EditorsPickBlock {...props} />);
    }
    return renderedEditorsPickBlock;
  };

  const mountTestComponent = () => {
    if (!mountedEditorsPickBlock) {
      mountedEditorsPickBlock = mount(<EditorsPickBlock {...props} />);
    }
    return mountedEditorsPickBlock;
  };  

  beforeEach(() => {
    props = {};
    shallowEditorsPickBlock = undefined;
    renderedEditorsPickBlock = undefined;
    mountedEditorsPickBlock = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
