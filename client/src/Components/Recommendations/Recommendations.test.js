import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Recommendations from './Recommendations';

describe('Recommendations', () => {
  let props;
  let shallowRecommendations;
  let renderedRecommendations;
  let mountedRecommendations;

  const shallowTestComponent = () => {
    if (!shallowRecommendations) {
      shallowRecommendations = shallow(<Recommendations {...props} />);
    }
    return shallowRecommendations;
  };

  const renderTestComponent = () => {
    if (!renderedRecommendations) {
      renderedRecommendations = render(<Recommendations {...props} />);
    }
    return renderedRecommendations;
  };

  const mountTestComponent = () => {
    if (!mountedRecommendations) {
      mountedRecommendations = mount(<Recommendations {...props} />);
    }
    return mountedRecommendations;
  };  

  beforeEach(() => {
    props = {};
    shallowRecommendations = undefined;
    renderedRecommendations = undefined;
    mountedRecommendations = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
