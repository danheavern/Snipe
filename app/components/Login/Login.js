import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, ListView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
   constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds,
        };
    } 
    
  render(){
    return(
        <View style={styles.container}>
           <View style={styles.logoContainer}>
            <Image 
                source={require('../../../Images/SnipeLogo2.png')}
                style={styles.logo}
            />
            <Text style={styles.formText}>An app made to tag your friends using React Native</Text>
           </View>
            <View style={styles.formContainer}>
               <LoginForm />
           </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ECC71'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        height: 70,
        width: 160,
        opacity: 0.85
    },
    formContainer: {
        // align: 'center',

    },
    formText: {
        color: 'white',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        opacity: 0.85
    }

});

AppRegistry.registerComponent('Login', () => Login);