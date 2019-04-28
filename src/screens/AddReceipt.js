import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity, ScrollView } from "react-native";
import { Form, Textarea, Item, Input, DatePicker } from 'native-base';
import ImagePicker from "react-native-image-picker";
import db from "../config/db";
import firebase from '@firebase/app';
import '@firebase/storage';
import '@firebase/database';
import '@firebase/auth';
import RNFetchBlob from 'react-native-fetch-blob';

// let studentsRef = db.ref('/receipt');

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob=Blob

imageRef = null
yameng = null

export default class DetailsScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      receipt:[],
      avatarSource: null,
      chosenDate: new Date(),
      image_uri: null,
      description: null,
      title: null,
      amount: 0,
      type: null,
      url: null
    };
    this.setDate.bind(this);
  }

  componentDidMount() {
    let query = firebase.database().ref('/receipt').orderByChild("images")
      query.once('value', (snapshot) => {
      let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({receipt: firebaseData},()=>{
              this.state.receipt.map((element) => {
                this.setState({
                  url: element.url
                });
              });
            });
          }
     });
  }

  setDate(newDate){
    this.setState({ chosenDate: newDate });
  }

  onUploadPress = async () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } 
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });

          yameng = response.uri
      }
    });
  }

  uploadImage(uri, mime = 'image/jpg') {
    return new Promise((resolve, reject) => {
      let uploadBlob = null

      imageName = this.state.title
      desc = this.state.description
      date = this.state.chosenDate
      amt = this.state.amount

      imageRef = firebase.storage().ref('images').child(`${imageName}.jpg`)

      fs.readFile(uri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          // Alert.alert(url)
          resolve(url)
          this.setState({ url: url})
          // Alert.alert(this.state.url)
          // this.state.url = imageRef.getDownloadURL()
          this.storeReference(this.state.url, imageName, desc, date, amt)
        })
        .catch((error) => {
          reject(error)
      })
    })
  }

  storeReference(url, title, description, date, amount) {
    firebase.database().ref('/receipt').child(title).set({
      url: url,
      description: description,
      date: date,
      amount: amount
  })  
  }

  onAddPress(url) {
    this.uploadImage(url)
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <Text style={styles.headerText}>Add Receipt</Text>

        <View style={styles.alignment}>
          <Text>Title : </Text>
          <Form>
            <Textarea style={{ flexDirection: 'row' }} width={100} rowSpan={2} bordered onChangeText={(title) => this.setState({title})} placeholder="" />
          </Form>
        </View>

        <View style={styles.alignment}>
          <Text>Receipt :</Text>
          <Button style={{flexDirection: 'row'}} onPress={() => this.onUploadPress()} title="Upload" />
          {/* <Button style={styles.button} onPress={() => this.props.navigation.navigate('Camera')} title="Upload" /> */}
        </View>

        <View>
          <Image style={{flexDirection: 'row'}} source={this.state.avatarSource} style={{width: 100, height: 100}} />
          
        </View>

        <View style={styles.alignment}>
          <Text>Description :</Text>
          <Form>
            <Textarea style={{ flexDirection: 'row' }} width={200} rowSpan={5} bordered onChangeText={(description) => this.setState({description})} placeholder="" />
          </Form>
        </View>

        

        <View style={styles.alignment}>
          <DatePicker
            defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date(2019, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
          />
          <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
          {/* <Item>
            <Input bordered placeholder="Date" />
          </Item> */}
        </View>

        <View style={styles.alignment}>
          <Text>Amount :</Text>
          <Form>
            <Textarea width={100} rowSpan={2} bordered onChangeText={(amount) => this.setState({amount})} placeholder="RM 0.00" />
          </Form>
        </View>

        <Image source={this.state.url} />

        <TouchableOpacity style={styles.buttonContainer2} onPress={() => this.onAddPress(yameng)}>
          <Text style={styles.Text}> Add </Text>  
        </TouchableOpacity>
        
        
        {/* <Button style={styles.button} onPress={() => this.props.navigation.navigate('Home')} title="Add" /> */}
        
      </View>
      </ScrollView>
    //   <View style={styles.gallery}>
    //   <Button style={{ flexDirection: 'column' }} onPress={() => this.onUploadPress()} title="Upload" />
    //   {/* <CameraRollPicker selected={[]} maximum={1} callback={this.getSelectedImages} /> */}
    //   <Text style={styles.welcome}>
    //     Image Gallery
    //   </Text>        
    // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: '',
    // alignItems: 'center',
    backgroundColor: '#ACAF48',
    textAlignVertical: 'top'
  },
  headerText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  button: {
    flexDirection: 'column'  
  },
  buttonContainer2: {
    marginTop:25,
    marginLeft:80,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#32B5D2",
  },
  alignment: {
    flexDirection: 'row',
    alignSelf: 'auto',
    marginTop: 20,
    marginLeft: 20
  },
  uploadAvatar: {
    flexDirection: 'row'
  }
});