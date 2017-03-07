import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import FriendsList from './app/components/FriendsList/FriendsList';
import Signup from './app/components/Signup/Signup';
import Login from './app/components/Login/Login';


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
       <View>
        <FriendsList />
       </View>
      );
  }
}

AppRegistry.registerComponent('Snipe', () => Snipe);