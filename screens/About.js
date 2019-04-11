// import React, { Component } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// export default class DetailsScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//         <Text>About</Text>
//         </View>
//         <View style={styles.button}>
//         <Button onPress={() => this.props.navigation.navigate('Home')} title="Back" />
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

import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity} from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class AboutUs extends Component {
  
  render() {
    return (
      
      <Container>
        <Header>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>ABOUT US</Text>
        </Header>

        <View style={styles.menuBox}>
        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/dusk/64/000000/purchase-order.png'}}/>
        <Text style={styles.info}>Receipt and Bill Organizer</Text>
        </View>

        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Our Objective</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{ marginTop: 10, marginBottom: 10 }}>
                  We are creating this application which is known as Receipt & Bill Organizer to help users easily organize their receipts and bills. User can keep track of their daily, weekly, or monthly expenditures without a problem wih this application.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Who We Are</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.Whoweare}>
                  Wan Muhammad Iqbal B Wan Mhd Noor
                  Department of Information Technology
                  Kuliyyah of Information Technology
                  International Islamic University Malaysia (IIUM)
                  wanmuhdiqbal@gmail.com </Text>

                <Text style={styles.Whoweare}>
                  Muhammad Abidil B Othman
                  Department of Information Technology
                  Kuliyyah of Information Technology
                  International Islamic University Malaysia (IIUM)
                  bidil5743@gmail.com </Text>
              </Body>
            </CardItem>  
          </Card>

          <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.Text}> Back</Text>  
          </TouchableOpacity> 

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  menuBox:{
    backgroundColor: "#F5FCFF",
    width:430,
    height:150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  icon: {
    alignItems: 'stretch',
    justifyContent: 'center',
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
  },
  Whoweare:{
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10, 
    alignSelf: 'center'
  }
});