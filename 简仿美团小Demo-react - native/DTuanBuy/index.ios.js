/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//导入外部组件
var Main = require('./Compoment/DDMain/DDMain');
// var Home = require('./Compoment/DDHome/DDHome');
// var Mine = require('./Compoment/DDMine/DDMine');
// var More = require('./Compoment/DDMore/DDMore');

var DTuanBuy = React.createClass({

  render() {
    return (

        <Main />
    );
  }


});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DTuanBuy', () => DTuanBuy);
