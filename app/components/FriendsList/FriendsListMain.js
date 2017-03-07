import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import FriendsList from './FriendsList';

export default class FrindsListMain extends Component{
	render(){
	        return(
	               <View>
		                <View style={styles.header}>
		                    <Text style={styles.headerText}>Friends</Text>
		                </View>
	                	<FriendsList />
	                </View>
	            )
	    }

    }
    const styles = StyleSheet.create({
    header: {
        height: 25,
        padding: 10,
        backgroundColor: 'black'
    },
    headerText: {
        color: 'white'
    }

});

AppRegistry.registerComponent('FriendsListMain', () => FriendsList);