import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

export default class FriendsList extends Component{
    state ={
        friend: ''
    };
   constructor(){
    	super();
    	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	this.state = {
      		userDataSource: ds,
    	};
    }

    componentDidMount(){
    	this.fetchUsers();
    }

    fetchUsers(){
    	fetch('http://jsonplaceholder.typicode.com/users')
    		.then((response) => response.json())
    		.then((response) => {
    			this.setState({
    				userDataSource: this.state.userDataSource.cloneWithRows(response)
    			});
    		});
    }

    
  
	renderRow(user, sectionId, rowId, highlightRow){
	    	return(
	    		<TouchableHighlight onPress={() => {
                        //navigate to camera page
                        Actions.cameraView({
                            friend: this.state.friend
                        });
                    }}>
		    		<View style={styles.row}>
		    		  <Text style={styles.rowText}>{user.name}: {user.email}</Text>
		    		</View>
	    		</TouchableHighlight>
	    	);
	    }

  render(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>FRIENDS</Text>
            </View>
            <ListView
            	dataSource={this.state.userDataSource}
            	renderRow={this.renderRow.bind(this)}
            />
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#2ECC71'
    },
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#f4f4f4',
        marginBottom:3
    },
    rowText: {
        flex:1
    },
    header: {
        justifyContent:'center',
        padding:10,
        backgroundColor:'#f4f4f4',
        height: 60,
        marginBottom: 3
    },
    headerText: {
        flex:1,
        textAlign: 'center',
        fontSize: 25
    }

});

AppRegistry.registerComponent('FriendsList', () => FriendsList);