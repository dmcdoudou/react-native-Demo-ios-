
/**
 * Created by douguangbin on 2016/12/27.
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

//获取当前设备的宽度
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

//导入外部的组件
var TopComCell = require('./DDHomeTopComCell');


var HomeMiddleView = React.createClass({

    getDefaultProps(){
        return{

            allData :{}
        }

    },


    render() {
        //取出左边的数据
        var leftData = this.props.allData.dataLeft[0];

        return (
            <View style={styles.container}>
                {/*左边*/}
                <TouchableOpacity onPress={() => alert('去你妹的啊啊 啊 啊')}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:leftData.img1}} style={styles.leftImageStyle}/>
                    <Image source={{uri:leftData.img2}} style={styles.leftImageStyle}/>
                    <Text style={{fontSize:16,color:'gray'}}>{leftData.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12,color:'purple',marginRight:3}}>{leftData.price}</Text>
                        <Text style={{fontSize:12,color:'orange',backgroundColor:'yellow'}}>{leftData.sale}</Text>
                    </View>
                </View>
                </TouchableOpacity>
                {/*右边*/}
                <View>
                    {this.renderRightItem()}
                </View>
            </View>

        );
    },


//    右边的
    renderRightItem(){
        //组件数组
        var itemArr = [];
        //取出具体的数据
        var rightData = this.props.allData.dataRight;
        //遍历
        for(var i = 0; i < rightData.length; i++){
            var data = rightData[i];
            itemArr.push(
                <TopComCell key={i} data={data}/>
            );
        }
        return itemArr;
    },

});


const styles = StyleSheet.create({
    container: {

        // backgroundColor: 'blue',
        marginTop:15,
        flexDirection:'row'
    },

    leftViewStyle : {

        width:screenWidth * 0.5 - 1,
        height: 129,
        backgroundColor:'white',
        marginRight:1,
        //水平居中
        alignItems:'center',
        justifyContent:'space-around'

    },

    leftImageStyle: {

        width:100,
        height:35,

        //内容模式
        resizeMode:'contain'
    },

});

//
module.exports = HomeMiddleView;