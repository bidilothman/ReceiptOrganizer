import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
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
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {this.props.navigation.navigate('Home')} )
  //   .catch((error)=>{
  //     console.log("Auth failed " + error);

  //  })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak password') {
        Alert.alert('The password is too weak');
      }
      else {
        Alert.alert(errorMessage);
      }
      console.log(error);
    });

    // this.props.navigation.navigate('Home');
  }

  loginButtonPress(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {this.props.navigation.navigate('Home')})
    .catch((error) => {
      console.log("Auth failed " + error);
    })
  }

  render() {
    return (
        <Container style={styles.container}>
            <Text style={styles.headerText}>Login</Text>
                <Content>
                    <Form>
                        <Item style={styles.inputContainer}>
                            <Input placeholder="Email" onChangeText={(email) => this.setState({email})} />
                        </Item>
                        <Item style={styles.inputContainer}>
                            <Input secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password})} />
                        </Item>

                        <Button style={styles.buttonStyle} onPress={this.signUpButtonPress()} >
                            <Text>Sign Up</Text>
                        </Button>

                        <Button success style={styles.buttonStyle} onPress={this.loginButtonPress()} >
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#00b5ec'
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
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
    },
    buttonStyle: {
      marginTop: 10,
      alignSelf: 'center'
    }
  });