import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CategoryCard from './CategoryCard';

describe('CategoryCard', () => {
  let props;
  let shallowCategoryCard;
  let renderedCategoryCard;
  let mountedCategoryCard;

  const shallowTestComponent = () => {
    if (!shallowCategoryCard) {
      shallowCategoryCard = shallow(<CategoryCard {...props} />);
    }
    return shallowCategoryCard;
  };

  const renderTestComponent = () => {
    if (!renderedCategoryCard) {
      renderedCategoryCard = render(<CategoryCard {...props} />);
    }
    return renderedCategoryCard;
  };

  const mountTestComponent = () => {
    if (!mountedCategoryCard) {
      mountedCategoryCard = mount(<CategoryCard {...props} />);
    }
    return mountedCategoryCard;
  };  

  beforeEach(() => {
    props = {};
    shallowCategoryCard = undefined;
    renderedCategoryCard = undefined;
    mountedCategoryCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
