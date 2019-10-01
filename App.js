import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Splash from './splach';
import LoginScreen from './LoginScreen';
import {createStore} from 'redux';
import rootReducers from './Reducers';
import {Provider} from 'react-redux';

const store = createStore(rootReducers);


const StackCard = createStackNavigator({
    Splash:{screen: Splash},
    LoginScreen:{screen: LoginScreen,
                  navigationOptions: {
                    title: "Login",
                    headerLeft:null
                   },
  },
    Home: {screen: HomeScreen,
            navigationOptions: {
                //title: "Home",
                header:null
                },
    },
    Profile: {screen: Profile},
 
  },
  {
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
},
  
  );
  
const App = createAppContainer(StackCard);



export default class MyApp extends React.Component {
  render() {
    return (
    <Provider store={store}>
    <App />
    </Provider>
    
    );
  }};
