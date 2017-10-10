import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Header, Buttons, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm'; 



class App extends Component {

  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDS1IWnsgvmNJxzRz3EL4F5lGnsnn5I7Ak',
      authDomain: 'authentication-4e604.firebaseapp.com',
      databaseURL: 'https://authentication-4e604.firebaseio.com',
      projectId: 'authentication-4e604',
      storageBucket: 'authentication-4e604.appspot.com',
      messagingSenderId: '301499452336'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <CardSection>
            <Buttons pressIt = {() => firebase.auth().signOut()}>
              Log Out
            </Buttons>
          </CardSection> 
        ) 
      case false:
        return <LoginForm />;
      default:
        return <Spinner size = "large" />
    } 
  }



  render() {
    return (
      <View>
        <Header headerText = "Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}


export default App; 
//lifecycle methods invoked in component; define. automatically called
