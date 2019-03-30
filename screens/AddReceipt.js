import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Form, Textarea, Item, Input } from 'native-base';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Add Receipt</Text>
        </View>

        <View style={styles.alignment}>
          <Text>Receipt :</Text>
          <Button style={styles.button} title="Upload" />
        </View>

        <View style={styles.alignment}>
          <Text>Description :</Text>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="" />
          </Form>
        </View>

        <View style={styles.alignment}>
          <Text>Date :</Text>
          <Item>
            <Input placeholder="Date" />
          </Item>
        </View>

        <View style={styles.alignment}>
          <Text>Amount :</Text>
          <Item>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row'  
  },
  alignment: {
    flexDirection: 'row'
  }
});