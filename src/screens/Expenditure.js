// import React, { Component } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// export default class DetailsScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//         <Text>My Expenditure</Text>
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
import { StyleSheet, Alert } from 'react-native';
import { Container, Header, Title, Button, Icon, Left, Text, Body, Thumbnail, List, ListItem, Content, Item, Input, H1, Footer, FooterTab } from "native-base";
import { Grid, Row} from "react-native-easy-grid";

export default class Myexpenditure extends Component {
  constructor(){
    super();
    this.state = {
      income: 0,
      total: 0
    }
  }

  calculateIncome = () => {
    let totalIncome = Number(this.state.income) + Number(this.state.total);
    this.setState({total: totalIncome}, () => {
        Alert.alert('You have successfully add your income!');
      
    });
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#28589c'}}>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 20}}>Report And Analytic</Title>
          </Body>        
        </Header>

        <Content>
          <Grid>
            <Row style={{backgroundColor: '#28589c', height: 60}}>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={{uri: 'https://img.icons8.com/doodle/48/000000/user.png'}} style={{width: 40, height: 40, borderRadius: 70, borderWidth: 3, borderColor: "white", marginBottom: 5}}/>
                </Left>
                <Text style={{fontSize: 17, color: "white", alignItems: 'center'}}>      My Personal  Finances</Text>
              </ListItem>
            </List>
            </Row>
          </Grid>

          <Grid>
            <Row style={{backgroundColor: '#FFFFCC', height: 200}}>
              <Left>
                <H1>   Total : {this.state.total}</H1>

                <Text>      Income : {this.state.income}   |   Expenses : </Text> 
              </Left>
              <Body>
                <Item rounded>
                  <Input onChangeText={(income) => this.setState({income})} placeholder= 'Add Your Income'/>
                </Item>
                <Button rounded Add Income onPress={this.calculateIncome}>
                  <Text>Add Income</Text>
                </Button>
              </Body>
            </Row>
          </Grid>
          </Content>

          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="apps" />
                <Text>Summary</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>. . . </Text>
              </Button>
            </FooterTab>
          </Footer>

      </Container>
    );
  }
}