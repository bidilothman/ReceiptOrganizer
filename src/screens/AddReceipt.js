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

let studentsRef = db.ref('/students');

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob=Blob

imageRef = null

export default class DetailsScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
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
    let query = studentsRef.orderByChild("images")
      query.once('value', (snapshot) => {
      let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({receipt: firebaseData},()=>{
              this.state.students.map((element) => {
                this.setState({
                  url: element.url
                  // name: element.name,
                  // matricno: element.matricno,
                  // major: element.major,
                  // year: element.year,
                  // status: element.status
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

          

          this.uploadImage(response.uri)

          // this.storeReference()

          // let uploadBlob = null
          // const imageRef = firebase.storage().ref('images').child("test.jpg")
          // let mime = 'image/jpg'
          // fs.readFile(source, 'base64')
          //   .then((data) => {
          //     return Blob.build(data, { type: `${mime};BASE64` })
          // })
          // .then((blob) => {
          //     uploadBlob = blob
          //     return imageRef.put(blob, { contentType: mime })
          //   })
          //   .then(() => {
          //     uploadBlob.close()
          //     return imageRef.getDownloadURL()
          //   })
          //   .then((url) => {
          //     // URL of the image uploaded on Firebase storage
          //     console.log(url);
              
          //   })
          //   .catch((error) => {
          //     console.log(error);
      
          //   })  
      

        // this.getSelectedImages(this.state.avatarSource, this.state.avatarSource);
          // .then(() => {
          //   Alert.alert("Success");
          // })
          // .catch((error) => {
          //   Alert.alert(error);
          // })
      }
    });
  }

  uploadImage(uri, mime = 'image/jpg') {
    return new Promise((resolve, reject) => {
      // const uploadUri = Platform.OS === 'android' ? uri.replace('file://', '') : uri
      let uploadBlob = null

      imageName = this.state.title

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
          this.setState({ url: url })
          // Alert.alert(this.state.url)
          // this.state.url = imageRef.getDownloadURL()
          this.storeReference(this.state.url)
        })
        .catch((error) => {
          reject(error)
      })
    })
  }

  storeReference(url) {
    // Alert.alert('AKU MARAHHH!!!')

  //   imageName = this.state.title
  //   imageRef = firebase.storage().ref('images').child(`${imageName}.jpg`)
  //   // currentUser = firebase.auth().currentUser
    firebase.database().ref('/receipt').child('images').set({
    //   // type: 'image',
      url: url
  })  
  }

  

  // uploadImage = async (uri, imageName) => {
  //   const response = await fetch(uri);
  //   const blob = response.blob();

  //   var ref = firebase.storage().ref().child("images/" + imageName);
  //   return ref.put(blob);
  // }
  // getSelectedImages = (selectedImages, currentImage) => {
    
  //   const image = currentImage.uri

  //   const Blob = RNFetchBlob.polyfill.Blob
  //   const fs = RNFetchBlob.fs
  //   window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
  //   window.Blob = Blob

   
  //   let uploadBlob = null
  //   const imageRef = firebase.storage().ref('images/').child("test.jpg")
  //   let mime = 'image/jpg'
  //   fs.readFile(image, 'base64')
  //     .then((data) => {
  //       return Blob.build(data, { type: `${mime};BASE64` })
  //   })
  //   .then((blob) => {
  //       uploadBlob = blob
  //       return imageRef.put(blob, { contentType: mime })
  //     })
  //     .then(() => {
  //       uploadBlob.close()
  //       return imageRef.getDownloadURL()
  //     })
  //     .then((url) => {
  //       // URL of the image uploaded on Firebase storage
  //       console.log(url);
        
  //     })
  //     .catch((error) => {
  //       console.log(error);

  //     })  

  // }

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
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
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

        <TouchableOpacity style={styles.buttonContainer2} onPress={() => this.props.navigation.navigate('Home')}>
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