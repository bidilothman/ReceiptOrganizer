import React, {Component} from 'react';
import {StyleSheet, Alert, TouchableOpacity, View} from 'react-native';
import {Container, Text, Content, Form, Item, Input, Button} from 'native-base';
// import firebase from 'react-native-firebase';
import { db } from '../config/db';
import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import '@firebase/auth';


export default class App extends Component {

  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  signUpButtonPress(){
    const email = this.state.email
    const password = this.state.password
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {this.props.navigation.navigate('Login')} )
    .catch((error)=>{
      console.log("Auth failed " + error);
      // Alert.alert(error)

   })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   if (errorCode == 'auth/weak password') {
    //     Alert.alert('The password is too weak');
    //   }
    //   else {
    //     Alert.alert(errorMessage);
    //   }
    //   console.log(error);
    // });

    // this.props.navigation.navigate('Home');
  }


  render() {
    return (
        <Container style={styles.container}>
            <Text style={styles.headerText}>SIGN UP</Text>
                <Content>
                    <Form>
                        <Item style={styles.inputContainer}>
                            <Input placeholder="Email" onChangeText={(email) => this.setState({email})} />
                        </Item>
                        <Item style={styles.inputContainer}>
                            <Input secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password})} />
                        </Item>

                        
                    </Form>
                    <View>
                      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.signUpButtonPress()}>
                        <Text style={styles.loginText}>Signup</Text>
                      </TouchableOpacity>
                    </View>
                </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ACAF48'
  },
  headerText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  inputContainer:{
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
    buttonStyle: {
      marginTop: 10,
      alignSelf: 'center'
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
    }
  });