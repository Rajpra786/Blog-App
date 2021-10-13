import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProfileUpdate from './ProfileUpdate';

describe('ProfileUpdate', () => {
  let props;
  let shallowProfileUpdate;
  let renderedProfileUpdate;
  let mountedProfileUpdate;

  const shallowTestComponent = () => {
    if (!shallowProfileUpdate) {
      shallowProfileUpdate = shallow(<ProfileUpdate {...props} />);
    }
    return shallowProfileUpdate;
  };

  const renderTestComponent = () => {
    if (!renderedProfileUpdate) {
      renderedProfileUpdate = render(<ProfileUpdate {...props} />);
    }
    return renderedProfileUpdate;
  };

  const mountTestComponent = () => {
    if (!mountedProfileUpdate) {
      mountedProfileUpdate = mount(<ProfileUpdate {...props} />);
    }
    return mountedProfileUpdate;
  };  

  beforeEach(() => {
    props = {};
    shallowProfileUpdate = undefined;
    renderedProfileUpdate = undefined;
    mountedProfileUpdate = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
