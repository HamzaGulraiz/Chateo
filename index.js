/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import 'react-native-gesture-handler';
// import {Provider} from 'react-redux';
// import store from './src/redux/Store';

// AppRegistry.registerComponent(appName, () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// ));

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from './src/redux/Store';

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
