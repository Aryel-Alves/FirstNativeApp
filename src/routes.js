import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';

export default createStackNavigator({
    Main
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: 'blue', 
        },
        headerTintColor: '#FFF' // cor das letras do titulo
    },
});