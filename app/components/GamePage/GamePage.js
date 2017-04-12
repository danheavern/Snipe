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

export default class GamePage extends Component{
  constructor(props){
        super(props);
        
        this.imagesRef = firebaseRef.database().ref('images');
        this.images = [];
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            newImageURL: '',
            imageSource: this.ds.cloneWithRows([]),
            messageText: '',
            user: 'user one',
            user2: 'user two'
        };
        
    }
    componentDidMount() {
      Actions.refresh({title: this.props.name});
      this.imagesRef.on('child_added', (dataSnapshot) => {
        this.images.push({id: dataSnapshot.key, text: dataSnapshot.val().url});
        this.setState({
          imageSource: this.state.imageSource.cloneWithRows(this.images)
        });
      });
      this.imagesRef.on('child_removed', (dataSnapshot) => {
        this.images = this.images.filter((x) => x.id !== dataSnapshot.key);
        this.setState({
          imageSource: this.state.imageSource.cloneWithRows(this.images)
        });
      });
    }

    addGame() {
      // TODO: write addGame so that game is added on button press
      if(this.state.newImageURL !== ''){
        this.imagesRef.push({
          url: this.state.newImageURL
        });
        this.setState({
          newImageURL: ''
        });
      }
    }

    removeGame(rowData){
      //TODO: write removeGame so that game is removed onPress
      this.imagesRef.child(rowData.id).remove();
    }
    goToGame(rowData){
      Actions.cameraView({

      });
    }
    // TODO: write sendMessage() so that messageText gets posted to firebase
    //  and message shows up in chat
    sendMessage(){
      this.setState({
        messageText: ''
      });
    }
    approveImage(rowData) {
      // TODO
    }
    disapproveImage(rowData) {
      // TODO
    }


  render(){
    return(
        <View style={styles.container}>
            <ListView
              dataSource={this.state.imageSource}
              renderRow={this.renderRow.bind(this)}
              style={styles.list}
              enableEmptySections={true}
            />
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Type a message..." onChangeText={(text) => this.setState({messageText: text})} value={this.state.newGame}/>
              <TouchableOpacity
                onPress={() => this.sendMessage()}
                style={styles.button}
              >
                <Image source ={require('../../../Images/create-group-button.png')} style={styles.buttonImage}/>
              </TouchableOpacity>
            </View>
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
            <View style={styles.rowHeader}>
              <Text style={styles.rowHeaderText}>
                <Text style={styles.userText}>{this.state.user} </Text> 
                tagged 
                <Text style={styles.userText}> {this.state.user2}</Text>
              </Text>
            </View>
            <Image source={{uri: rowData.text}} style={styles.photoSquare}/>
              <View style={styles.buttonRow}>
              <TouchableOpacity
                  onPress={() => this.approveImage(rowData)}
                  style={styles.upButton}
                >
                  <Image source ={require('../../../Images/thumbs-up.png')} style={styles.upButtonImage}/>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => this.disapproveImage(rowData)}
                  style={styles.downButton}
                >
                  <Image source ={require('../../../Images/thumbs-down.png')} style={styles.downButtonImage}/>
              </TouchableOpacity>
              </View>
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
        flexDirection:'column',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'#f4f4f4',
        marginBottom:3,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    rowText: {
        justifyContent: 'flex-start',
        marginLeft: 15
    },
    rowHeader: {
      height: 30,
      width: 300,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    rowHeaderText: {
      justifyContent: 'flex-start',
      marginLeft: 5
    },
    photoSquare: {
      height: 300,
      width: 300,
      justifyContent: 'center'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 25,
      marginTop: 15,
      marginRight: 30
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
    upButton: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: 20
    },
    upButtonImage: {
      padding: 5,
      height: 30,
      width: 30
    },
    downButton: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: 20
    },
    downButtonImage: {
      padding: 5,
      height: 30,
      width: 30
    },
    list: {
      // marginBottom: 25
    },
    buttonRow: {
      height: 45,
      width: 300,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      flexDirection: 'row'
    },
    userText: {
      fontWeight: 'bold'
    }

});
AppRegistry.registerComponent('GamePage', () => GamePage);