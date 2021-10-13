import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TagSelector from './TagSelector';

describe('TagSelector', () => {
  let props;
  let shallowTagSelector;
  let renderedTagSelector;
  let mountedTagSelector;

  const shallowTestComponent = () => {
    if (!shallowTagSelector) {
      shallowTagSelector = shallow(<TagSelector {...props} />);
    }
    return shallowTagSelector;
  };

  const renderTestComponent = () => {
    if (!renderedTagSelector) {
      renderedTagSelector = render(<TagSelector {...props} />);
    }
    return renderedTagSelector;
  };

  const mountTestComponent = () => {
    if (!mountedTagSelector) {
      mountedTagSelector = mount(<TagSelector {...props} />);
    }
    return mountedTagSelector;
  };  

  beforeEach(() => {
    props = {};
    shallowTagSelector = undefined;
    renderedTagSelector = undefined;
    mountedTagSelector = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
