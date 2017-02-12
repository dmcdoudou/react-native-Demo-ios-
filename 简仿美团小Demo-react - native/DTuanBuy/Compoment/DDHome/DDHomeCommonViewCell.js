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


var HomeCommonViewCell = React.createClass({

    getDefaultProps(){
        return{
            leftIcon : '',
            leftTitle : '',
            rightTitle : ''
        }
    },



    render() {
        return (
        <TouchableOpacity onPress={() => alert('去你妹的啊')} style={styles.outViewStyle}>
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIcon}} style={styles.leftIconStyle}/>
                    <Text>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text style={{color:'gray',marginRight:5}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.arrowStyle}/>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

});


const styles = StyleSheet.create({

    outViewStyle: {
      backgroundColor:'white',
      height: 44,
      justifyContent:'center',
      marginBottom:1,

    },

    container: {

        flexDirection:'row',
        justifyContent:'space-between',

        alignItems:'center'

    },

    leftViewStyle: {
        marginLeft:8,
        flexDirection:"row",

        alignItems:"center"

    },

    rightViewStyle: {

        marginRight:8,
        flexDirection: 'row',

        alignItems:'center'
    },

    leftIconStyle: {
      width:22,
      height:22

    },

    arrowStyle: {

      width:8,
      height:13

    },

});
//
module.exports = HomeCommonViewCell;