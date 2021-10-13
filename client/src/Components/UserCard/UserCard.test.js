import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UserCard from './UserCard';

describe('UserCard', () => {
  let props;
  let shallowUserCard;
  let renderedUserCard;
  let mountedUserCard;

  const shallowTestComponent = () => {
    if (!shallowUserCard) {
      shallowUserCard = shallow(<UserCard {...props} />);
    }
    return shallowUserCard;
  };

  const renderTestComponent = () => {
    if (!renderedUserCard) {
      renderedUserCard = render(<UserCard {...props} />);
    }
    return renderedUserCard;
  };

  const mountTestComponent = () => {
    if (!mountedUserCard) {
      mountedUserCard = mount(<UserCard {...props} />);
    }
    return mountedUserCard;
  };  

  beforeEach(() => {
    props = {};
    shallowUserCard = undefined;
    renderedUserCard = undefined;
    mountedUserCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
