import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ImagePlaceHolder from './ImagePlaceHolder';

describe('ImagePlaceHolder', () => {
  let props;
  let shallowImagePlaceHolder;
  let renderedImagePlaceHolder;
  let mountedImagePlaceHolder;

  const shallowTestComponent = () => {
    if (!shallowImagePlaceHolder) {
      shallowImagePlaceHolder = shallow(<ImagePlaceHolder {...props} />);
    }
    return shallowImagePlaceHolder;
  };

  const renderTestComponent = () => {
    if (!renderedImagePlaceHolder) {
      renderedImagePlaceHolder = render(<ImagePlaceHolder {...props} />);
    }
    return renderedImagePlaceHolder;
  };

  const mountTestComponent = () => {
    if (!mountedImagePlaceHolder) {
      mountedImagePlaceHolder = mount(<ImagePlaceHolder {...props} />);
    }
    return mountedImagePlaceHolder;
  };  

  beforeEach(() => {
    props = {};
    shallowImagePlaceHolder = undefined;
    renderedImagePlaceHolder = undefined;
    mountedImagePlaceHolder = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
