import React from 'react';
import ReactDOM from 'react-dom';
import InfoMsg from './InfoMsg';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoMsg />, div);
  ReactDOM.unmountComponentAtNode(div);
});