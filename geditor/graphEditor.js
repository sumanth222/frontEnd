import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
 
export default class graphEditor extends Component {
  render() {
    const ge = require('./index.js');
    
    return (
<WebView
    style={{width: 300}}
    source={require('./index.js')()}
    originWhitelist={['*']}
 />    )
  }
}