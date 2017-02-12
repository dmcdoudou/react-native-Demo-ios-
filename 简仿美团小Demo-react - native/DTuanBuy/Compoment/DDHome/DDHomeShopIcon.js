/**
 * Created by douguangbin on 2017/1/23.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

//
var HomeDetail = require('./DDHomeDetail');

var HomeShopIcon = React.createClass({

    getDefaultProps(){
      return{
          shopIconData:{}, //属性
          popToShopCerten:{} //回调函数
      }
    },



    render() {
        return (
        <TouchableOpacity onPress={() => {this.pushShopDetail(this.props.shopIconData.detailurl)}}>
            <View style={styles.container}>
                    <Image source={{uri:this.props.shopIconData.img}} style={styles.imgStyle}/>

                <Text>{this.props.shopIconData.name}</Text>
                <Text style={styles.showtextStyle}>{this.props.shopIconData.showtext.text}</Text>
            </View>
        </TouchableOpacity>
        );
    },



    //跳转到二级界面
    pushShopDetail(data){

        this.props.popToShopCerten(data);
        // this.props.navigator.push({
        //     title:'会话',
        //     component:HomeDetail
        //
        // })

    },

});


const styles = StyleSheet.create({
    container: {

        width:120,
        height:120

    },

    imgStyle :{
        width: 100,
        height: 80,
        // backgroundColor:'red',
        borderRadius:5,
        margin:5
    },

    showtextStyle: {

        backgroundColor:'orange',
        color:'white',
        fontSize:12,
        //
        position:'absolute',
        left:5,
        top:60

    },

});

//
module.exports = HomeShopIcon;