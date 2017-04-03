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
           <View style={styles.info}> 
               <View style={styles.logoContainer}>
                <Image 
                    source={require('../../../Images/BirdLogo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Snipe</Text>
                <Text style={styles.subtitle}>A tag game made with React Native</Text>
               </View>
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
        backgroundColor: '#CF000F'  //flatuicolorpicker.com Monza
    },
    info: {
        marginTop: 70,
        alignItems: 'center',
        flexGrow: 1
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
        justifyContent: 'center',
        opacity: 1.0
    },
    subtitle: {
        color: 'white',
        width: 200,
        textAlign: 'center',
        opacity: 0.85,
    },
    logoContainer: {
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 160,
        width: 160,
        opacity: 1.0
    },
    formContainer: {
        flexGrow: 1

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