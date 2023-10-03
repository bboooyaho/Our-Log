/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import Monthly from './calendar/monthly';
import CalendarScreen from './calendar/weekly copy';

AppRegistry.registerComponent(appName, () => CalendarScreen);
