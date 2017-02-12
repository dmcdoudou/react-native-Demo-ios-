/**
 * Created by douguangbin on 2017/1/23.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;



var TopComCell = React.createClass({

    getDefaultProps(){
        return{
            data : [],
        }
    },


    render() {
        return (
            <TouchableOpacity onPress={() => alert('0')} style={styles.outViewStyle}>
                <View style={styles.mainViewStyle}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Text style={[styles.mainTitleStyle,{color: this.props.data.titleColor}]}>{this.props.data.title}</Text>
                        <Text style={{color:'gray'}}>{this.props.data.subTitle}</Text>
                    </View>
                    {/*右边*/}
                    <Image source={{uri:this.props.data.rightImage}} style={styles.rightImageStyle}/>
                </View>
            </TouchableOpacity>
        );
    }

});


const styles = StyleSheet.create({

    outViewStyle :{

        width:screenW * 0.5 - 1,
        height: 64,
        marginBottom: 1,
        marginRight: 1,
        backgroundColor:'white'

    },

    mainViewStyle:{

        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },

    leftViewStyle :{


    },


    rightImageStyle :{

        width:90,
        height:60,
        resizeMode:'contain',
        // backgroundColor:"blue"

    },

    mainTitleStyle :{

        fontSize:18,
        fontWeight:'bold',
        marginBottom:5,

    },

});

//
module.exports = TopComCell;