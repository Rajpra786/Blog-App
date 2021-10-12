import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  let props;
  let shallowUserProfile;
  let renderedUserProfile;
  let mountedUserProfile;

  const shallowTestComponent = () => {
    if (!shallowUserProfile) {
      shallowUserProfile = shallow(<UserProfile {...props} />);
    }
    return shallowUserProfile;
  };

  const renderTestComponent = () => {
    if (!renderedUserProfile) {
      renderedUserProfile = render(<UserProfile {...props} />);
    }
    return renderedUserProfile;
  };

  const mountTestComponent = () => {
    if (!mountedUserProfile) {
      mountedUserProfile = mount(<UserProfile {...props} />);
    }
    return mountedUserProfile;
  };  

  beforeEach(() => {
    props = {};
    shallowUserProfile = undefined;
    renderedUserProfile = undefined;
    mountedUserProfile = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
