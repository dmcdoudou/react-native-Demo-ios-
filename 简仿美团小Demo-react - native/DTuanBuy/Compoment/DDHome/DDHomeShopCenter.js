/**
 * Created by douguangbin on 2017/1/23.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var HomeCommomViewCell = require('./DDHomeCommonViewCell');
var HomeShopIconView = require('./DDHomeShopIcon');


var HomeShopCenter = React.createClass({

    getInitialState(){

        return{
            ShopCenterData :{},
            popToHomeWithData :{}
        }
    },


    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <HomeCommomViewCell
                    leftIcon = 'gwzx'
                    leftTitle = '购物中心'
                    rightTitle = {this.props.ShopCenterData.tips}
                />
                {/*下部分*/}
                <ScrollView
                    style={styles.scrollviewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderItem()}
                </ScrollView>
            </View>
        );
    },

    //返回组件
    renderItem(){
        //解析需要的数据
        var dataArr = this.props.ShopCenterData.data;
        //组件数据
        var itemArr = [];
        //遍历 创建对应的组件
        for(var i = 0; i < dataArr.length; i++){

            var data = dataArr[i];

            itemArr.push(
               <HomeShopIconView key={i} shopIconData={data} popToShopCerten={(data)=> {this.popToHome(data)}}/>
            );

        }
        return itemArr;
    },

    //
    popToHome(data){

        this.props.popToHomeWithData(data);

    },

});


const styles = StyleSheet.create({
    container: {

        marginTop:15

    },

    scrollviewStyle: {

        backgroundColor:'white',
        padding:8

    }

});



//
module.exports = HomeShopCenter;