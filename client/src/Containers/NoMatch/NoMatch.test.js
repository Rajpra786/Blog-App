import React from 'react';
import { shallow, render, mount } from 'enzyme';
import NoMatch from './NoMatch';

describe('NoMatch', () => {
  let props;
  let shallowNoMatch;
  let renderedNoMatch;
  let mountedNoMatch;

  const shallowTestComponent = () => {
    if (!shallowNoMatch) {
      shallowNoMatch = shallow(<NoMatch {...props} />);
    }
    return shallowNoMatch;
  };

  const renderTestComponent = () => {
    if (!renderedNoMatch) {
      renderedNoMatch = render(<NoMatch {...props} />);
    }
    return renderedNoMatch;
  };

  const mountTestComponent = () => {
    if (!mountedNoMatch) {
      mountedNoMatch = mount(<NoMatch {...props} />);
    }
    return mountedNoMatch;
  };  

  beforeEach(() => {
    props = {};
    shallowNoMatch = undefined;
    renderedNoMatch = undefined;
    mountedNoMatch = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
