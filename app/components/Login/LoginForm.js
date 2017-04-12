import React, {Component} from 'react';
import {
    TextInput, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Text, 
    ListView
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';
export default class LoginForm extends Component{
	state ={
        name: '',
        password: '',
    };
    render(){
	    return(
	        <View style={styles.container}>
	           	<TextInput 
	           		placeholder="username or email"
	           		style={styles.input}
                    onChangeText={(text) => {
                        this.setState({
                            name: text,
                        })
                    }}
	       		/>
	       		<TextInput
	       			placeholder="password"
	       			style={styles.input}
	       			secureTextEntry
                    onChangeText={(text) => {
                        this.setState({
                            password: text,
                        })
                    }}
	   			/>

	   			<TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => {
                        //navigate to friends page
                        Actions.mainPage({
                            name: this.state.name,
                        });
                    }}
                >
	   				<Text style={styles.buttonText}>LOGIN</Text>
	   			</TouchableOpacity>
	   			<TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => {
                        //navigate to signup page
                        Actions.signup({
                            name: this.state.name,
                        });
                    }}
                >
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
    	backgroundColor: '#22313F',
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