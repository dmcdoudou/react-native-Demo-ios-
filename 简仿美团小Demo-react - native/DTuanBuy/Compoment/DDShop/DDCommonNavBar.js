/**
 * Created by douguangbin on 2017/1/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    TouchableOpacity,
    Image
} from 'react-native';



var CommonNav = React.createClass({

   getDefaultProps(){
       return{
           leftIcon: '',
           navTitle: '',
           rightIcon: ''
         }
    },

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                   <Image source={{uri:this.props.leftIcon.length == 0 ? 'none' : this.props.leftIcon}} style={[styles.navIconStyle,{marginLeft:8}]}/>
                </TouchableOpacity>
                <View>
                    <Text style={styles.titleStyle}>
                        {this.props.navTitle}
                    </Text>
                </View>
                <Image source={{uri:this.props.leftIcon.length == 0 ? 'none' : this.props.rightIcon}} style={[styles.navIconStyle,{marginRight:8}]}/>
            </View>
        );
    }

});


const styles = StyleSheet.create({
    container: {
        height:64,
        backgroundColor:'rgba(251, 73, 8, 1.0)',
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,

        //
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

        paddingTop:10
    },

    //
    navIconStyle: {

      width:25,
      height:25

    },

    //
    titleStyle: {

        color:'white',
        fontSize:18,
        fontWeight:'bold'

    }




});



//
module.exports = CommonNav;