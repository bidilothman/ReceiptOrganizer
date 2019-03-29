/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Loginpage from "./screens/Loginpage";
import Homepage from "./screens/Homepage";
import Signup from './screens/Signup'
// import firebase from 'react-native-firebase';
// import firebase from '@firebase/app';
// import '@firebase/database';
// import '@firebase/storage';
// import '@firebase/auth';

const RootStack = createStackNavigator(
  {
    Login: Loginpage,
    Home: Homepage,
    Signup: Signup
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component {

  // componentWillMount() {
  //   var config = {
  //     apiKey: "AIzaSyAkiBUpwb-3EjZ8TC6OT4nNQ-52bsCwrjY",
  //     authDomain: "react-native-7871f.firebaseapp.com",
  //     databaseURL: "https://react-native-7871f.firebaseio.com",
  //     projectId: "react-native-7871f",
  //     storageBucket: "react-native-7871f.appspot.com",
  //     messagingSenderId: "823831857106"
  //   };
  //   firebase.initializeApp(config);
  // }

  render() {
    return (
      <AppContainer />
    );
  }
}

