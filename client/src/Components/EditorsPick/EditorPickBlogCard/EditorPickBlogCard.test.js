import React from 'react';
import { shallow, render, mount } from 'enzyme';
import EditorPickBlogCard from './EditorPickBlogCard';

describe('EditorPickBlogCard', () => {
  let props;
  let shallowEditorPickBlogCard;
  let renderedEditorPickBlogCard;
  let mountedEditorPickBlogCard;

  const shallowTestComponent = () => {
    if (!shallowEditorPickBlogCard) {
      shallowEditorPickBlogCard = shallow(<EditorPickBlogCard {...props} />);
    }
    return shallowEditorPickBlogCard;
  };

  const renderTestComponent = () => {
    if (!renderedEditorPickBlogCard) {
      renderedEditorPickBlogCard = render(<EditorPickBlogCard {...props} />);
    }
    return renderedEditorPickBlogCard;
  };

  const mountTestComponent = () => {
    if (!mountedEditorPickBlogCard) {
      mountedEditorPickBlogCard = mount(<EditorPickBlogCard {...props} />);
    }
    return mountedEditorPickBlogCard;
  };  

  beforeEach(() => {
    props = {};
    shallowEditorPickBlogCard = undefined;
    renderedEditorPickBlogCard = undefined;
    mountedEditorPickBlogCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
