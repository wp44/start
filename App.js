/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './components/ListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  changePlaceName = (placeName) => {
    this.setState({ placeName: placeName })
  }

  placeSubmit = () => {
    if (this.state.placeName.trim() === "") return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      }
    })
  }

  deleteItem = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })

      }
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 40, width: '100%' }}></View>
        <View style={styles.container}>
          <Text>Input the text:</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Write your place" style={{ width: '70%' }} value={this.state.placeName} onChangeText={this.changePlaceName} />
            <Button title="Add" onPress={this.placeSubmit} style={{ width: '30%' }} />
          </View>
          <View style={styles.placesClouds}>
            {this.state.places.map((place, i) => <ListItem key={i} placeName={place} onItemPress={() => this.deleteItem(i)} />)}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placesClouds: {
    width: '90%',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
});
