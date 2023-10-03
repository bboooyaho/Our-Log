/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import Monthly from './calendar/monthly';

AppRegistry.registerComponent(appName, () => Monthly);
