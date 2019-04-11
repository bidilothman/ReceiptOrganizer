// import React, {Component} from 'react';
// import {StyleSheet, Alert} from 'react-native';
// import {Container, Text, Content, Form, Item, Input, Button} from 'native-base';
// // import firebase from 'react-native-firebase';
// import { db } from '../config/db';
// import firebase from '@firebase/app';
// import '@firebase/database';
// import '@firebase/storage';
// import '@firebase/auth';


// export default class App extends Component {

//   constructor () {
//     super();
//     this.state = {
//       email: '',
//       password: ''
//     }
//   }

//   signUpButtonPress(){
//     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//     .then(() => {this.props.navigation.navigate('Home')} )
//     .catch((error)=>{
//       console.log("Auth failed " + error);

//    })
//     // .catch(error => (error));
      
//       /*function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       if (errorCode == 'auth/weak password') {
//         Alert.alert('The password is too weak');
//       }
//       else {
//         Alert.alert(errorMessage);
//       }
//       console.log(error);
//     });*/

//     // this.props.navigation.navigate('Home');
//   }

//   loginButtonPress(){
//     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
//     .then(() => {this.props.navigation.navigate('Home')})
//     .catch((error) => {
//       console.log("Auth failed " + error);
//     })
//   }

//   render() {
//     return (
//         <Container>
//             <Text style={styles.headerText}>Login</Text>
//                 <Content>
//                     <Form>
//                         <Item>
//                             <Input placeholder="Email" onChangeText={(email) => this.setState({email})} />
//                         </Item>
//                         <Item last>
//                             <Input secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password})} />
//                         </Item>

//                         <Button style={styles.buttonStyle} onPress={this.signUpButtonPress()} >
//                             <Text>Sign Up</Text>
//                         </Button>

//                         <Button success style={styles.buttonStyle} onPress={this.loginButtonPress()} >
//                             <Text>Login</Text>
//                         </Button>
//                     </Form>
//                 </Content>
//         </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     headerText: {
//       marginTop: 40,
//       fontSize: 18,
//       fontWeight: 'bold',
//       alignSelf: 'center'
//     },
//     buttonStyle: {
//       marginTop: 10,
//       alignSelf: 'center'
//     }
//   });

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

export default class Login extends Component {

  constructor() {
    super();
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  loginButtonPress(){
    const newEmail = this.state.email
    const newPassword = this.state.password
    firebase.auth().signInWithEmailAndPassword(newEmail, newPassword)
    .then(() => {this.props.navigation.navigate('Home')})
    .catch((error) => {
      console.log("Auth failed " + error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={ require('../Media/resit.png') } />
        {/* <Image style={styles.bgImage} source={{ uri: "https://lorempixel.com/900/1400/nightlife/2/" }}/> */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={styles.btnForgotPassword} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.loginButtonPress()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ACAF48'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode: 'contain',
    position: 'absolute',
    width: '140%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  }
}); 