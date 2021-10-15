import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MiniBlogCard from './MiniBlogCard';

describe('MiniBlogCard', () => {
  let props;
  let shallowMiniBlogCard;
  let renderedMiniBlogCard;
  let mountedMiniBlogCard;

  const shallowTestComponent = () => {
    if (!shallowMiniBlogCard) {
      shallowMiniBlogCard = shallow(<MiniBlogCard {...props} />);
    }
    return shallowMiniBlogCard;
  };

  const renderTestComponent = () => {
    if (!renderedMiniBlogCard) {
      renderedMiniBlogCard = render(<MiniBlogCard {...props} />);
    }
    return renderedMiniBlogCard;
  };

  const mountTestComponent = () => {
    if (!mountedMiniBlogCard) {
      mountedMiniBlogCard = mount(<MiniBlogCard {...props} />);
    }
    return mountedMiniBlogCard;
  };  

  beforeEach(() => {
    props = {};
    shallowMiniBlogCard = undefined;
    renderedMiniBlogCard = undefined;
    mountedMiniBlogCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
