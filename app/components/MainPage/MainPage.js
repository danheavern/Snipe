import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, StyleSheet, ScrollView, ListView, TouchableHighlight} from 'react-native';

import {
  Router,
  Scene,
  Actions,
} from 'react-native-router-flux';

export default class MainPage extends Component{
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
        marginTop: 60
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
    }

});
AppRegistry.registerComponent('MainPage', () => MainPage);