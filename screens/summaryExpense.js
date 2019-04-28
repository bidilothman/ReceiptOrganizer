import React, { Component } from "react";
import { StyleSheet, View, Alert } from 'react-native';
import { Container, Header, Title, Button, Icon, Left, Text, Body, Thumbnail, List, ListItem, Content, Item, Input, H1, Footer, FooterTab, Form, Picker } from "native-base";
import { Grid, Row} from "react-native-easy-grid";

export default class PickerWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "daily",
      income: 0,
      total: 0,
      expense: 0
    };
  }

  calculateIncome = () => {
    let totalIncome = Number(this.state.income) - Number(this.state.expense);
    this.setState({total: totalIncome}, () => {
        Alert.alert('You have successfully add your income!');
      
    });
  }
  
  onValueChange(value) {
    this.setState({
      selected: value
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

          <Form>
            <Picker
              mode="dropdown"
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Daily" value="daily" />
              <Picker.Item label="Weekly" value="weekly" />
              <Picker.Item label="Monthly" value="monthly" />
            </Picker>
          </Form>

            <Text> Your {this.state.selected} expenditure are :</Text>
          
        </Content>

        <Footer>
            <FooterTab>
              <Button vertical onPress={() => this.props.navigation.navigate('Expense')}>
                <Text style={{fontSize: 13, color: "white"}}>Summary</Text>
              </Button>
              <Button vertical onPress={() => this.props.navigation.navigate('Tabs')}>
                <Text style={{fontSize: 13, color: "white"}}>Expense Report </Text>
              </Button>
            </FooterTab>
          </Footer>

      </Container>
    );
  }
}