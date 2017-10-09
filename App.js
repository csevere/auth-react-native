import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm'; 



class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDS1IWnsgvmNJxzRz3EL4F5lGnsnn5I7Ak',
      authDomain: 'authentication-4e604.firebaseapp.com',
      databaseURL: 'https://authentication-4e604.firebaseio.com',
      projectId: 'authentication-4e604',
      storageBucket: 'authentication-4e604.appspot.com',
      messagingSenderId: '301499452336'
    });
  }



  render() {
    return (
      <View>
        <Header headerText = "Authentication" />
        <LoginForm /> 
      </View>
    );
  }
}


export default App; 
//lifecycle methods invoked in component; define. automatically called
