/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import appConfig from './app.json';

const appName = appConfig.expo ? appConfig.expo.name : appConfig.name;


AppRegistry.registerComponent(appName, () => App);
