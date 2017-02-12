/**
 * Created by douguangbin on 2017/1/1.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    WebView
} from 'react-native';



var HomeDetail = React.createClass({
    render() {
        return (
           <WebView
           automaticallyAdjustContentInsets={true}
           source={{uri:this.props.deal_url+'?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134694&utm_campaign=AgroupBgroupD100Ghomepage_topic1_7486H0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373928&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'}}
           javaScriptEnabled={true}
           domStorageEnabled={true}
           />

        );
    },

//    弹出界面
    popToHomeDetail(){

        this.props.navigator.pop();
    }

});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});



//
module.exports = HomeDetail;
