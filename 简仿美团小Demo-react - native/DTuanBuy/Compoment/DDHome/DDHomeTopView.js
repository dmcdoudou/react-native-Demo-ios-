/**
 * Created by douguangbin on 2017/1/9.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';


//获取当前设备的宽度
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;


//引入外部组件
var TopListView = require('./DDTopListView');

var HomeTopView = React.createClass({

    getDefaultProps(){

        return{

            TopMenuJson: {}
        }
    },

    getInitialState(){
        return{

            selectedPage: 0
        }
    },

    render(){

        return(

            <View style={styles.viewStyle}>
                {/*上部分*/}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.scrollAnimationEnd}
                >
                    {this.renderScrollViewItem()}
                </ScrollView>
                {/*下部分*/}
                <View style={styles.pageViewStyle}>
                    {this.renderPageIndicator()}
                </View>
            </View>

        )

    },

//    scrollview中的子组件
    renderScrollViewItem(){

        var itemArr = [];

        var dataArr = this.props.TopMenuJson.data;
        for(var i = 0; i < dataArr.length; i++){
            itemArr.push(

                <TopListView  key={i}
                              data = {dataArr[i]}
                />
            );
        }
        return itemArr;
    },


//    当一帧滚动结束
    scrollAnimationEnd(e){
            //获取水平方向的偏移量
        var offsetX = e.nativeEvent.contentOffset.x;
            //计算当前页码
        var currentPage = offsetX / screenW;
            //更新状态机
        this.setState({
            selectedPage: currentPage
        });
    },


//    页码
    renderPageIndicator(){

        var itemArr = [], style;
        //
        for(var i = 0; i < 2; i++){

            style = (this.state.selectedPage == i)? {color:'orange'} : {color:'gray'}

            itemArr.push(

                <Text key={i} style={[{fontSize:20}, style]}>&bull;</Text>
            );
        }
        return itemArr;
    }

});


const styles = StyleSheet.create({

    viewStyle : {

        backgroundColor:"white"

    },

    pageViewStyle: {

        flexDirection:'row',
        justifyContent: 'center'

    },


});

//
module.exports = HomeTopView;
