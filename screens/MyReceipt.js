import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import db from "../config/db";
import firebase from '@firebase/app';
import '@firebase/storage';

// var storageRef = firebase.storage();
// var starsRef = storageRef.child('images/Nasir.jpg');
// starsRef.getDownloadURL().then(function(url) {
//   // Insert url into an <img> tag to "download"
// }).catch(function(error) {

//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//     case 'storage/object-not-found':
//       // File doesn't exist
//       break;

//     case 'storage/unauthorized':
//       // User doesn't have permission to access the object
//       break;

//     case 'storage/canceled':
//       // User canceled the upload
//       break;

//     case 'storage/unknown':
//       // Unknown error occurred, inspect the server response
//       break;
//   }
// });
var storage = firebase.storage();
var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/receipt-organizer-a2229.appspot.com/o/images%2FSetia.jpg?alt=media&token=195d05b6-9911-4981-92f3-4afa6b4628f5');

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>My Receipt</Text>
        </View>
        <View>
          <Image source={{ uri: httpsReference }}/>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Back" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row'  
  }
});