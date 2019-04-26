import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class ImageComponent extends Component {

  static propTypes = {
      receipt: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.showImage}>
        {this.props.receipt.map((data, index) => {
            return (
                <View key={index}>
                  <Image>{data.url}</Image>
                    {/* <Text style={styles.itemtext}>{data.url}</Text> */}
                </View>
            )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    showImage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});