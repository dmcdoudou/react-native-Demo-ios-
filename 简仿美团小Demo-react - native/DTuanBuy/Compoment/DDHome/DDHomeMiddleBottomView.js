/**
 * Created by douguangbin on 2017/1/22.
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

// 导入类库
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

//
var TopComCell = require('./DDHomeTopComCell');


var BottomView = React.createClass({

    getDefaultProps(){

        return{

            topData:{},   // 上部分的数据
            bottomData:{}  // 下部分的数据
        }

    },

    render() {
        //取出上半部分数据
        var topData = this.props.topData.data[0];
        return (
            <View style={styles.container}>
                {/*上半部分*/}
                <TouchableOpacity onPress={() => alert('香蕉个巴拉')}>
                <View style={styles.topViewStyle}>
                    <View>
                        <Text style={{color:'orange',fontSize:20,fontWeight:'bold'}}>{topData.title}</Text>
                        <Text style={{color:'gray',fontSize:14,marginTop:5}}>{topData.subTitle}</Text>
                    </View>
                    <Image source={{uri:topData.image}} style={styles.topImgStyle}/>
                </View>
                </TouchableOpacity>
                {/*下半部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },


//  下半部分的子组件
    renderBottomItem(){
        //组件的数组
        var itemArr = [];
        //拿到对应数据
        var dataArr = this.props.bottomData.data;
        //遍历
        for(var i = 0; i < dataArr.length; i++){
            var item = dataArr[i];

            //处理数据对象
            var newItem = {
                    "title":item.maintitle,
                    "subTitle":item.deputytitle,
                    "rightImage":this.dealWithImgUrl(item.imageurl),
                    "titleColor":item.typeface_color,
            }

            //创建组件传入数组
            itemArr.push(
                <TopComCell key={i} data={newItem}/>
            );
        }
        return itemArr;
    },

//    处理请求图片的尺寸
    dealWithImgUrl(url){
        // 判断  找到,则返回任意正数, 没有,则返回-1
        if(url.search('w.h') !== -1){ // 找到
            return url.replace('w.h', '120.90');
        }else{
            return url;
        }
    },

});


const styles = StyleSheet.create({
    container: {

        marginTop: 15
    },

    topViewStyle :{

        backgroundColor:'white',
        // 主轴的方向
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:1

    },

    bottomViewStyle: {
        //改变主轴
        flexDirection:'row',
        //
        flexWrap:'wrap',



    },

    topImgStyle:{
        width:150,
        height:60,
        resizeMode:'cover'

    }


});



//
module.exports = BottomView;