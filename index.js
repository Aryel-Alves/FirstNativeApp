import {AppRegistry} from 'react-native';
import App from './src'; // não precisa passar o index pois procura pelo index automaticamente
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
