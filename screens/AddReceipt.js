import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Form, Textarea, Item, Input } from 'native-base';
import ImagePicker from "react-native-image-picker";

export default class DetailsScreen extends Component {

  onUploadPress = async () => {
    const options = {
      // title: 'Select Avatar',
      // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      // storageOptions: {
      //   skipBackup: true,
      //   path: 'images',
      // },
    };
    
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      // if (response.didCancel) {
      //   console.log('User cancelled image picker');
      // } 
      // else if (response.error) {
      //   console.log('ImagePicker Error: ', response.error);
      // } 
      // else if (response.customButton) {
      //   console.log('User tapped custom button: ', response.customButton);
      // } 
      // else {
      //   const source = { uri: response.uri };

      //   // You can also display the image using data:
      //   // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      //   this.setState({
      //     avatarSource: source,
      //   });
      // }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Add Receipt</Text>
        </View>

        <View style={styles.alignment}>
          <Text>Receipt :</Text>
          <Button style={styles.button} onPress={() => this.onUploadPress()} title="Upload" />
          {/* <Button style={styles.button} onPress={() => this.props.navigation.navigate('Camera')} title="Upload" /> */}
        </View>

        <View style={styles.alignment}>
          <Text>Description :</Text>
          <Form>
            <Textarea width={200} rowSpan={5} bordered placeholder="" />
          </Form>
        </View>

        <View style={styles.alignment}>
          <Text rounded>Date :</Text>
          <Item>
            <Input placeholder="Date" />
          </Item>
        </View>

        <View style={styles.alignment}>
          <Text>Amount :</Text>
          <Item >
            <Input placeholder="Amount" />
          </Item>
        </View>
        
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('Home')} title="Back" />
        
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
    flexDirection: 'row'  
  },
  alignment: {
    flexDirection: 'row'
  }
});