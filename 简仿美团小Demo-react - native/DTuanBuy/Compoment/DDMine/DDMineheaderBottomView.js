/**
 * Created by douguangbin on 2017/1/8.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';


//获取当前设备的宽度
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;




var BottomView = React.createClass({

    getDefaultProps(){

        return{

            dataArr:[],
        }

    },

    render(){

        return(

            <View style={styles.viewStyle}>{this.renderItem()}</View>
        )
    },

    renderItem(){
        //  利用数组返回
        var itemArr = [];

        for (var i = 0; i < this.props.dataArr.length; i++){

            var item = this.props.dataArr[i];

            itemArr.push(

                <TouchableOpacity key={i} onPress={()=>alert('点你大爷的啊')}>
                    <View style={styles.innerViewStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                        <Text style={{color:'white'}}>{item.name}</Text>
                    </View>
                </TouchableOpacity>

            );

        }
        return itemArr;
    }




});

const styles = StyleSheet.create({

    viewStyle: {

        flexDirection: 'row',
        backgroundColor:'rgba(255,255,255,0.3)',
        height: 44,
        width:screenWidth,

        position:'absolute',
        bottom: 0,

        alignItems: 'center'


    },

    innerViewStyle: {
        // 这里这个 小技巧 一定要记住 很实用的 技巧
        width: screenWidth / 3.0 + 1,

        alignItems:'center',

        justifyContent: 'center',

        borderRightWidth: 1,
        borderRightColor:'white'

    },


});

module.exports = BottomView;