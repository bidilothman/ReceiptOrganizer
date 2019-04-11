// import React, { Component } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// export default class DetailsScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//           <Text>Add Receipt</Text>
//         </View>
//         <View style={styles.button}>
//           <Button onPress={() => this.props.navigation.navigate('Login')} title="Back" />
        
//           <Button onPress={() => this.props.navigation.navigate('Add')} title="Add Receipt" />
        
//           <Button onPress={() => this.props.navigation.navigate('Receipt')} title="My Receipt" />
       
//           <Button onPress={() => this.props.navigation.navigate('Expenditure')} title="Expenditure" />

//           <Button onPress={() => this.props.navigation.navigate('About')} title="About" />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     textAlignVertical: 'top',
//   },
//   button: {
//     flexDirection: 'row'  
//   }
// });

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Container, Header, Content} from 'native-base';

export default class HomePage extends Component {
  render() {
    return (
          <Container>
            <Header>
            <Text style={styles.header}>HOME SCREEN</Text>
            </Header>
        
          <Content>
          <View>
          <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/dusk/64/000000/purchase-order.png'}}/>
          <Text style={styles.info}>Receipt and Bill Organizer</Text>
          </View>  

          <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.Text}> Snap Receipt</Text>  
          </TouchableOpacity> 

          <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.Text}> My Receipt</Text>  
          </TouchableOpacity> 

          <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.Text}> My Expenditure</Text>  
          </TouchableOpacity> 

          <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.Text}> About Us</Text>  
          </TouchableOpacity> 
        </View>
        </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  contents: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  }, 
  menuBox:{
    backgroundColor: "#F5FCFF",
    width:430,
    height:150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  icon: {
    width:80,
    height:80,
  },
  info:{
    fontSize:27,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:25,
    marginLeft:80,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#841584",
  },
  Text:{
    fontSize: 17,
    color: "white",
  }
});