import React, {Component} from 'react';
import {AppRegistry,
        Dimensions,
        StyleSheet,
        Text,
        TouchableHighlight,
        View
      } from 'react-native';

import Camera from 'react-native-camera';

import {
  Router,
  Scene,
} from 'react-native-router-flux';


export default class CameraView extends Component{
  render(){
    return(
       <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type="front">
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Snipe</Text>
        </Camera>
      </View>
      );
  }
  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
      Actions.mainPage({
          
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
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
    opacity: 0.5
  }
});

AppRegistry.registerComponent('CameraView', () => CameraView);