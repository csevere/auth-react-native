import React from 'react';
import App from './App';
import {AppRegistry} from 'react-native'; 

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

AppRegistry.registerComponent('auth-react-native', () => App);
