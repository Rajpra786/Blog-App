import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HomeCarousel from './HomeCarousel';

describe('HomeCarousel', () => {
  let props;
  let shallowHomeCarousel;
  let renderedHomeCarousel;
  let mountedHomeCarousel;

  const shallowTestComponent = () => {
    if (!shallowHomeCarousel) {
      shallowHomeCarousel = shallow(<HomeCarousel {...props} />);
    }
    return shallowHomeCarousel;
  };

  const renderTestComponent = () => {
    if (!renderedHomeCarousel) {
      renderedHomeCarousel = render(<HomeCarousel {...props} />);
    }
    return renderedHomeCarousel;
  };

  const mountTestComponent = () => {
    if (!mountedHomeCarousel) {
      mountedHomeCarousel = mount(<HomeCarousel {...props} />);
    }
    return mountedHomeCarousel;
  };  

  beforeEach(() => {
    props = {};
    shallowHomeCarousel = undefined;
    renderedHomeCarousel = undefined;
    mountedHomeCarousel = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
