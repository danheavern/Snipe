import React, {Component} from 'react';
import {AppRegistry,
        Dimensions,
        StyleSheet,
        Text,
        TouchableOpacity,
        View,
        Image
      } from 'react-native';

import Camera from 'react-native-camera';

import {firebaseRef} from '../../services/Firebase'

import {
  Router,
  Scene,
  Actions,
} from 'react-native-router-flux';


export default class CameraView extends Component{
  constructor(props){
        super(props);
        this.imagesRef = firebaseRef.database().ref('images');
        this.storageRef = firebaseRef.storage().ref();
        this.state = {
            imageURL: '',
            imagePath: '',
            camType: 'back',
            index: 1,
        };
        this.newImageRef = this.storageRef.child('image' + this.state.index);
        this.newImageFolderRef = this.storageRef.child('images/image' + this.state.index);
    }
  render(){
    return(
       <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={this.state.camType}
          captureTarget={Camera.constants.CaptureTarget.memory}
          >
          <View style={styles.buttonRow}>
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Snipe</Text>
            <TouchableOpacity style={styles.switch} onPress={this.switchCam.bind(this)}>
              <Image style={styles.switchImage} source={require('../../../Images/exchange.png')}/>
            </TouchableOpacity>
          </View>        
        </Camera>
      </View>
      );
  }
  takePicture() {
    this.camera.capture()
      .then((data) => this.postImage(data))
      .catch(err => console.error(err));
      Actions.gamePage({
          // new ImageURL: 
      });
  }
  switchCam(){
    if(this.state.camType === 'back'){
      this.setState({
        camType: 'front'
      });
    }
    else{
      this.setState({
        camType: 'back'
      });
    }
  }
  postImage(data) {
    

    this.setState({
      index: this.state.index + 1
    });
  }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  capture: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
    opacity: 0.5
  },
  switch: {
    margin: 40

  },
  switchImage: {
    height: 35,
    width: 35,
    opacity: 0.5,
    padding: 10
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

AppRegistry.registerComponent('CameraView', () => CameraView);