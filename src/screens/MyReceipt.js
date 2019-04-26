import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import db from "../config/db";
// import firebase from '@firebase/app';
import '@firebase/storage';
import ImageComponent from "../components/ImageComponent";

let studentsRef = db.ref('/students');

export default class DetailsScreen extends Component {

  constructor(){
    super();
    this.state = {
    receipt: []
    }
  }
  
  componentDidMount() {
    studentsRef.on('value', (snapshot) => {
        let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({receipt: firebaseData});
            console.log(this.state.receipt);
          }
     });
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>My Receipt</Text>
        </View>
        <View>
          <ImageComponent receipt={this.state.receipt} />
          <Image>{this.props.receipt}</Image>
          {/* <Image source={{ uri: httpsReference }}/> */}
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