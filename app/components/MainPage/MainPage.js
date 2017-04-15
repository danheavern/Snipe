import React, {Component} from 'react';
import {AppRegistry, 
        Text, 
        TextInput,
        View,
        StyleSheet,  
        ListView, 
        TouchableOpacity, 
        Image
      } from 'react-native';

import {
  Router,
  Scene,
  Actions,
} from 'react-native-router-flux';

import {firebaseRef} from '../../services/Firebase'

export default class MainPage extends Component{
  constructor(props){
        super(props);
        
        this.gamesRef = firebaseRef.database().ref('games');
        this.games = [];
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            newGame: '',
            gameSource: this.ds.cloneWithRows([]),
            firstPress: true
        };
        
    }
    componentDidMount() {
      this.gamesRef.on('child_added', (dataSnapshot) => {
        this.games.push({id: dataSnapshot.key, text: dataSnapshot.val().game});
        this.setState({
          gameSource: this.state.gameSource.cloneWithRows(this.games)
        });
      });
      this.gamesRef.on('child_removed', (dataSnapshot) => {
        this.games = this.games.filter((x) => x.id !== dataSnapshot.key);
        this.setState({
          gameSource: this.state.gameSource.cloneWithRows(this.games)
        });
      });
    }

    addGame() {
      // TODO: write addGame so that game is added on button press
      if(this.state.newGame !== ''){
        this.gamesRef.push({
          game: this.state.newGame,
          members: 0
        });
        this.setState({
          newGame: ''
        });
      }
    }

    addPlayers(rowData) {
       
      Actions.addPlayers({
        gameData: rowData
      });
    }

    removeGame(rowData){
      //TODO: write removeGame so that game is removed onPress
      this.gamesRef.child(rowData.id).remove();
    }
    goToGame(rowData){
      Actions.gamePage({
        name: rowData.text,
        gameID: rowData.id
      });
    }


  render(){
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="New Group" onChangeText={(text) => this.setState({newGame: text})} value={this.state.newGame}/>
              <TouchableOpacity
                onPress={() => this.addGame()}
                style={styles.button}
              >
                <Image source ={require('../../../Images/create-group-button.png')} style={styles.buttonImage}/>
              </TouchableOpacity>
            </View>
            <ListView
              dataSource={this.state.gameSource}
              renderRow={this.renderRow.bind(this)}
              style={styles.list}
              enableEmptySections={true}
            />
            
        </View>
      );
  }

  renderRow(rowData) {
    return(
      <TouchableOpacity
        onPress={() => this.goToGame(rowData)}
      >
        <View>
          <View style={styles.row}>
            <Text style={styles.rowText}>{rowData.text}</Text>
            <TouchableOpacity
                onPress={() => this.addPlayers(rowData)}
                style={styles.trashButton}
              >
                <Image source ={require('../../../Images/trash.png')} style={styles.trashButtonImage}/>
              </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.removeGame(rowData)}
                style={styles.trashButton}
              >
                <Image source ={require('../../../Images/trash.png')} style={styles.trashButtonImage}/>
              </TouchableOpacity>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1
    },
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'#f4f4f4',
        marginBottom:3,
        alignItems: 'center',
        height: 50,
        marginLeft: 10,
        marginRight: 10
    },
    rowText: {
        justifyContent: 'flex-start',
        marginLeft: 15
    },
    photoSquare: {
      height: 200,
      width: 200,
      justifyContent: 'center'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 25,
      marginTop: 15,
      marginRight: 30,
    },
    input: {
      width: 200,
      justifyContent: 'flex-start',

    },
    separator: {
      height: 1,
      backgroundColor: '#CCCCCC',
      marginLeft: 10,
      marginRight: 10
    },
    button: {
      padding: 10,
      justifyContent: 'flex-end'
    },
    buttonImage: {
      padding: 5,
      height: 30,
      width: 30
    },
    buttonText: {
      marginLeft: 5
    },
    trashButton: {
      justifyContent: 'flex-end',
      marginRight: 20
    },
    trashButtonImage: {
      padding: 5,
      height: 20,
      width: 20
    },
    list: {
      // marginBottom: 25
    }

});
AppRegistry.registerComponent('MainPage', () => MainPage);