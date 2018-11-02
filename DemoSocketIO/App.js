/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';

import io from 'socket.io-client/dist/socket.io.js'

var myApp;
export default class App extends Component {
  constructor(props) {
    super(props)
    myApp = this

    this.socket = io("http://192.168.0.135:3000", {jsonp: false})
    this.state = {
      bgColor: 'yellow',
      text: ''
    }

    this.socket.on("server_send_color", function(color) {
      myApp.setState({
        bgColor: color,
        text: color
      })
    })
  }

  onPress = () => {
    this.socket.emit("client_send_color", this.state.text.toLowerCase());
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.bgColor}]}>
        <Text style={styles.welcome}>SOCKET IO</Text>

        <KeyboardAvoidingView>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder={"Type your background color"}
            placeholderTextColor={'gray'}
            clearButtonMode={"while-editing"}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Change Color </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FC22',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    margin: 10,
  },
  
  textInput: {
    width: 240, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    padding: 7,
    borderRadius: 4,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 4,
  },
});
