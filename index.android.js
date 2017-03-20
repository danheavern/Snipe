import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, StyleSheet} from 'react-native';

import FriendsList from './app/components/FriendsList/FriendsList';
import Signup from './app/components/Signup/Signup';
import Login from './app/components/Login/Login';
import CameraView from './app/components/CameraView/CameraView';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

export default class Snipe extends Component{
   //  renderScene(route, navigator){
   //   switch(route.id){
   //     case 'Login':
   //       return (<Login navigator={navigator} title="Login" />)
      // case 'Signup':
   //       return (<Signup user={route.user} navigator={navigator} title="Signup" />)
   //   }
   //  }


  render(){
    return(
       <Router>
          <Scene key='root'>
            <Scene 
              key='home' 
              component={Login} 
              title='Login' 
              initial={true}
              navigationBarStyle={styles.navBar} 
              hideNavBar={true}
            />
            <Scene 
              key='signup' 
              component={Signup} 
              title='Signup' 
              titleStyle={styles.title}
              hideNavBar={false}
              navigationBarStyle={styles.navBar}
              backButtonImage={require('Snipe/Images/back.png')}
            />
            <Scene 
              key='friendsList' 
              component={FriendsList} 
              title='Friends' 
              titleStyle={styles.title}
              hideNavBar={false}
              navigationBarStyle={styles.navBar}
              backButtonImage={require('Snipe/Images/back.png')}
            />
            <Scene 
              key='cameraView' 
              component={CameraView} 
              title='Camera' 
              titleStyle={styles.title}
              hideNavBar={false}
              navigationBarStyle={styles.navBar}
              backButtonImage={require('Snipe/Images/back.png')}
            />
          </Scene>
       </Router>
      );
  }
}
const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#019875',
    },
    title: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '400',
      opacity: 0.7
    }
});

AppRegistry.registerComponent('Snipe', () => Snipe);