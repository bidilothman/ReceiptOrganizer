import React, {Component} from 'react';
import {StyleSheet, Alert, TouchableOpacity, View} from 'react-native';
import {Container, Text, Content, Form, Item, Input, Button} from 'native-base';
// import firebase from 'react-native-firebase';
import { db } from '../config/db';
import firebase from '@firebase/app';
import '@firebase/auth';


export default class ResetPassword extends Component {

  constructor () {
    super();
    this.state = {
      email: ''
    }
  }

  forgotPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(function (user) {
        alert('Please check your email...')
      }).catch(function (error) {
        console.log(error)
      })
  }

  
  render() {
    return (
        <Container style={styles.container}>
            <Text style={styles.headerText}>RESET PASSWORD</Text>
                <Content>
                    <Form>
                        <Item style={styles.inputContainer}>
                            <Input placeholder="Email" onChangeText={(email) => this.setState({email})} />
                        </Item>
                    </Form>
                    <View>
                      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.forgotPassword(this.state.email)}>
                        <Text style={styles.loginText}>Reset</Text>
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