import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Editor from './Editor';

describe('Editor', () => {
  let props;
  let shallowEditor;
  let renderedEditor;
  let mountedEditor;

  const shallowTestComponent = () => {
    if (!shallowEditor) {
      shallowEditor = shallow(<Editor {...props} />);
    }
    return shallowEditor;
  };

  const renderTestComponent = () => {
    if (!renderedEditor) {
      renderedEditor = render(<Editor {...props} />);
    }
    return renderedEditor;
  };

  const mountTestComponent = () => {
    if (!mountedEditor) {
      mountedEditor = mount(<Editor {...props} />);
    }
    return mountedEditor;
  };  

  beforeEach(() => {
    props = {};
    shallowEditor = undefined;
    renderedEditor = undefined;
    mountedEditor = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
