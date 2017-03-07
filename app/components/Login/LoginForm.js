import React, {Component} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity, Text, ListView} from 'react-native';

export default class LoginForm extends Component{
	render(){
	    return(
	        <View style={styles.container}>
	           	<TextInput 
	           		placeholder="username or email"
	           		style={styles.input}
	       		/>
	       		<TextInput
	       			placeholder="password"
	       			style={styles.input}
	       			secureTextEntry
	   			/>

	   			<TouchableOpacity style={styles.buttonContainer}>
	   				<Text style={styles.buttonText}>LOGIN</Text>
	   			</TouchableOpacity>
	   			<TouchableOpacity style={styles.buttonContainer}>
	   				<Text style={styles.buttonText}>SIGN UP</Text>
	   			</TouchableOpacity>
	   			
	        </View>
	    );
	}
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
    	height: 40,
    	backgroundColor: 'white',
    	opacity: 0.5,
    	marginBottom: 10,
    	paddingHorizontal: 10
    },
    buttonContainer: {
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
    }

});