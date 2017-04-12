import * as firebase from 'firebase';
var config = {
      apiKey: "AIzaSyC0s8f9TZtc0tV4TVWeOq0gTevJvKx5Fn4",
      authDomain: "snipe-c9392.firebaseapp.com",
      databaseURL: "https://snipe-c9392.firebaseio.com/",
      storageBucket: "gs://snipe-c9392.appspot.com",
    };
export const firebaseRef = firebase.initializeApp(config);