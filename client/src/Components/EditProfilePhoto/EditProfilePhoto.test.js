import React from 'react';
import { shallow, render, mount } from 'enzyme';
import EditProfilePhoto from './EditProfilePhoto';

describe('EditProfilePhoto', () => {
  let props;
  let shallowEditProfilePhoto;
  let renderedEditProfilePhoto;
  let mountedEditProfilePhoto;

  const shallowTestComponent = () => {
    if (!shallowEditProfilePhoto) {
      shallowEditProfilePhoto = shallow(<EditProfilePhoto {...props} />);
    }
    return shallowEditProfilePhoto;
  };

  const renderTestComponent = () => {
    if (!renderedEditProfilePhoto) {
      renderedEditProfilePhoto = render(<EditProfilePhoto {...props} />);
    }
    return renderedEditProfilePhoto;
  };

  const mountTestComponent = () => {
    if (!mountedEditProfilePhoto) {
      mountedEditProfilePhoto = mount(<EditProfilePhoto {...props} />);
    }
    return mountedEditProfilePhoto;
  };  

  beforeEach(() => {
    props = {};
    shallowEditProfilePhoto = undefined;
    renderedEditProfilePhoto = undefined;
    mountedEditProfilePhoto = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
