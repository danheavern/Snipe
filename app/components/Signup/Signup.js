import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default class Signup extends Component{

  render(){
    return(
      	<View style={styles.container}>
            
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="username"
                defaultValue={this.props.name}
                style={styles.input}
              />
              <TextInput 
                placeholder="email"
                style={styles.input}
              />
              <TextInput 
                placeholder="phone number (XXX-XXX-XXXX)"
                style={styles.input}
              />
              <TextInput
                placeholder="password"
                style={styles.input}
                secureTextEntry
              />
              <TextInput
                placeholder="repeat password"
                style={styles.input}
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.submit}
              >
                <Text style={styles.buttonText}>SUBMIT</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Snipe Incorporated, Copyright 2017</Text>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        justifyContent: 'center',
        height: 60
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: '200',
        opacity: 0.8
    },
    container: {
        flex: 1,
        padding: 20,
        marginTop: 45,
        backgroundColor: '#2ECC71'
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
      height: 40,
      backgroundColor: 'white',
      opacity: 0.5,
      marginBottom: 10,
      paddingHorizontal: 10,
      justifyContent: 'center'
    },
    submit: {
      backgroundColor: '#019875',
      paddingVertical: 15,
      height: 40,
      justifyContent: 'center',
      marginBottom: 10
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '700',
      opacity: 0.85
    },
    footer: {
      flex: 1,
      marginTop: 10,
      alignItems: 'stretch'
    },
    footerText: {
      fontSize: 7,
      textAlign: 'center'
    }

});

AppRegistry.registerComponent('Signup', () => Signup);