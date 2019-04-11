import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, Alert } from "react-native";
import { Form, Textarea, Item, Input, DatePicker } from 'native-base';
import ImagePicker from "react-native-image-picker";
import db from "../config/db";
import firebase from '@firebase/app';
import '@firebase/storage';
import RNFetchBlob from 'react-native-fetch-blob';

// const Blob = RNFetchBlob.polyfill.Blob
// const fs = RNFetchBlob.fs
// window.XMLHttp = RNFetchBlob.polyfill.XMLHttpRequest
// window.Blob=Blob

export default class DetailsScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      dp: null,
      avatarSource: null,
      chosenDate: new Date(),
      image_uri: null
    };
    this.setDate.bind(this);
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
        // const source = { uri: response.uri };

        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };

        // this.setState({
        //   avatarSource: source,
        // });

          const Blob = RNFetchBlob.polyfill.Blob
          const fs = RNFetchBlob.fs
          window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
          window.Blob = Blob

          let uploadBlob = null
          const imageRef = firebase.storage().ref('images').child("test.jpg")
          let mime = 'image/jpg'
          fs.readFile(source, 'base64')
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
              // URL of the image uploaded on Firebase storage
              console.log(url);
              
            })
            .catch((error) => {
              console.log(error);
      
            })  
      

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

  // uploadImage(uri, mime = 'application/octet-stream') {
  //   return new Promise((resolve, reject) => {
  //     const uploadUri = Platform.OS === 'android' ? uri.replace('file://', '') : uri
  //     let uploadBlob = null

  //     const imageRef = firebase.storage().ref('images').child('image_001')

  //     fs.readFile(uploadUri, 'base64')
  //       .then((data) => {
  //         return Blob.build(data, { type: `${mime};BASE64` })
  //       })
  //       .then((blob) => {
  //         uploadBlob = blob
  //         return imageRef.put(blob, { contentType: mime })
  //       })
  //       .then(() => {
  //         uploadBlob.close()
  //         return imageRef.getDownloadURL()
  //       })
  //       .then((url) => {
  //         resolve(url)
  //       })
  //       .catch((error) => {
  //         reject(error)
  //     })
  //   })
  // }

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
      // <View style={styles.container}>
      //   <View>
      //     <Text style={{justifyContent: 'center'}}>Add Receipt</Text>
      //   </View>

      //   <View style={styles.alignment}>
      //     <Text>Receipt :</Text>
          
      //     {/* <Button style={styles.button} onPress={() => this.props.navigation.navigate('Camera')} title="Upload" /> */}
      //   </View>

      //   <View>
      //     <Image source={this.state.avatarSource} style={{width: 100, height: 100}} />
      //   </View>
      //   <Button style={{ flexDirection: 'column' }} onPress={() => this.onUploadPress()} title="Upload" />

      //   <View style={styles.alignment}>
      //     <Text>Description :</Text>
      //     <Form>
      //       <Textarea style={{ flexDirection: 'row' }} width={200} rowSpan={5} bordered placeholder="" />
      //     </Form>
      //   </View>

      //   <View style={styles.alignment}>
      //     <DatePicker
      //       defaultDate={new Date(2018, 4, 4)}
      //       minimumDate={new Date(2018, 1, 1)}
      //       maximumDate={new Date(2018, 12, 31)}
      //       locale={"en"}
      //       timeZoneOffsetInMinutes={undefined}
      //       modalTransparent={false}
      //       animationType={"fade"}
      //       androidMode={"default"}
      //       placeHolderText="Select date"
      //       textStyle={{ color: "green" }}
      //       placeHolderTextStyle={{ color: "#d3d3d3" }}
      //       onDateChange={this.setDate}
      //       disabled={false}
      //     />
      //     <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
      //     {/* <Item>
      //       <Input bordered placeholder="Date" />
      //     </Item> */}
      //   </View>

      //   <View style={styles.alignment}>
      //     <Text>Amount :</Text>
      //     <Form>
      //       <Textarea width={50} rowSpan={1} bordered placeholder="RM 0.00" />
      //     </Form>
      //   </View>
        
      //   <Button style={styles.button} onPress={() => this.uploadImage()} title="Add" />
        
      // </View>
      <View style={styles.gallery}>
      <Button style={{ flexDirection: 'column' }} onPress={() => this.onUploadPress()} title="Upload" />
      {/* <CameraRollPicker selected={[]} maximum={1} callback={this.getSelectedImages} /> */}
      <Text style={styles.welcome}>
        Image Gallery
      </Text>        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: '',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top'
  },
  button: {
    flexDirection: 'column'  
  },
  alignment: {
    flexDirection: 'row'
  },
  uploadAvatar: {
    flexDirection: 'row'
  }
});