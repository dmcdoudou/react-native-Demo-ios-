/**
 * Created by douguangbin on 2017/1/2.
 */



import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

var MineMiddleView = React.createClass({

    getDefaultProps(){

        return{

            dataArray : [], //其他界面传进来的数据
        }

    },

    render(){

        return (

            <View style={styles.viewStyle}>{this.renderItem()}</View>
        )

    },

//
    renderItem(){

        var itemArray = [];

        for(var i = 0; i < this.props.dataArray.length; i++){

            var item = this.props.dataArray[i];

            itemArray.push(
                <View style={styles.inerViewStyle}>
                    <Image source={{uri:item.icon}} style={styles.imageStyle}/>
                    <Text>{item.name}</Text>
                </View>
            )

        }

        return itemArray;

    },

});


var styles = StyleSheet.create({

    viewStyle: {

        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-around',
        paddingTop:8,
        paddingBottom:8

    },

    imageStyle: {

        width: 40,
        height: 28

    },

    inerViewStyle: {

        justifyContent:'center',
        alignItems:'center'

    }



});

//
module.exports = MineMiddleView;