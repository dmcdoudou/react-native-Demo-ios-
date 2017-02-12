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



var TopView = React.createClass({


    getDefaultProps(){
        return{
            leftIcon : null,
            title : null,
            rankImage : null

        }

    },


    render(){

        return(

            <View style={styles.viewStyle}>
                {/*左边*/}
                <Image source={{uri:this.props.leftIcon}} style={styles.leftIconStyle}/>
                {/*中间*/}
                <View style={styles.middleViewStyle}>
                    <Text style={{ color:'white', font:18,fontWeight:'bold'}}>{this.props.title}</Text>
                    <Image source={{uri:this.props.rankImage}} style={styles.rankImageStyle}/>
                </View>
                {/*右边*/}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width: 8, height: 13}}/>
            </View>


        )


    },





});

const styles = StyleSheet.create({


    viewStyle : {

        flexDirection: 'row',

        alignItems: 'center',

        justifyContent:'space-around',

        marginTop: 50


    },

    leftIconStyle : {

        width:60,
        height:60,
        borderRadius:30


    },

    middleViewStyle : {

        flexDirection:'row',

        width:screenWidth * 0.7
    },

    rankImageStyle : {

        width:17,
        height:18,
        marginLeft:3
    },

    

});


module.exports = TopView;
