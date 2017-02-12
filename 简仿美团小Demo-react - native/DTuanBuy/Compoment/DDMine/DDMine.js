/**
 * Created by douguangbin on 2016/12/27.
 */



import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var MiddleData = require('./Data/MiddleData.json');


/**-------------导入外部组件-------------------**/
var MineCommonCell = require('./DDMineCommonCell');
var MineMiddleView = require('./DDMineMiddleView');
var TopView = require('./DDMineheaderTopView');
var BottomView = require('./DDMineheaderBottomView');


//
var Mine = React.createClass({

    render() {
        return (
            <ScrollView style={{backgroundColor:"#e8e8e8"}}>
                {/*头部*/}
                <View style={{backgroundColor:'rgba(255,96,0,1.0)',height:200}}>
                    {/*头部*/}
                    <TopView
                        leftIcon="00x"
                        title="豆豆超级团购"
                         rankImage="avatar_vip"
                    />
                    {/*底部*/}
                      <BottomView
                          dataArr={MiddleData.bottomData}
                      />
                </View>
                <View>
                    <MineCommonCell
                        leftIcon= "我的订单"
                        leftImage= "draft"
                        rightIcon= "查看全部订单"
                    />

                 <MineMiddleView  dataArray={MiddleData.topData}/>

                </View>
                <View style={{marginTop:20}}>
                    <MineCommonCell
                    leftIcon= "豆豆钱包"
                    leftImage= "draft"
                    rightIcon= "账户余额:¥100"
                    />
                    <MineCommonCell
                        leftIcon= "抵用券"
                        leftImage= "like"
                        rightIcon= "0"
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MineCommonCell
                        leftIcon= "积分商城"
                        leftImage= "card"
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MineCommonCell
                        leftIcon= "今日推荐"
                        leftImage= "new_friend"
                        rightImage="me_new"
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MineCommonCell
                        leftIcon= "我要合作"
                        leftImage= "pay"
                        rightIcon= "轻松开店,招财进宝"
                    />
                </View>
            </ScrollView>

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



//
module.exports = Mine;