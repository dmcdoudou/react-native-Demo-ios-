/**
 * Created by douguangbin on 2016/12/27.
 */




import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';


//
var TopMenuJson = require('./localData/TopMenu.json');
var TopMiddleJson = require('./localData/TopMiddleLeft.json');
var MiddleTopJson = require('./localData/TopMiddle.json');
var MiddleBottomJson = require('./localData/DD_Home_D4.json');
var ShopCenterJson = require('./localData/DD_Home_D5.json');


var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var HomeDetail = require('./DDHomeDetail');
var HomeTopView = require('./DDHomeTopView');
var MiddleView = require('./DDHomeMiddleView');
var MiddleBottomView = require('./DDHomeMiddleBottomView');
var HomeShopCenter = require('./DDHomeShopCenter');
var HomeGeustYouLike = require('./DDHomeGeustYouLike');


var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}

                {/*主要内容*/}
                <ScrollView>
                    {/*第一部分*/}
                     <HomeTopView TopMenuJson={TopMenuJson}/>
                    {/*第二部分中间的View*/}
                      <MiddleView  allData={TopMiddleJson}/>
                    {/*第三部分中间下半部分内容*/}
                       <MiddleBottomView
                           topData={MiddleTopJson}
                           bottomData={MiddleBottomJson}
                       />
                    {/*第四部分 购物中心*/}
                        <HomeShopCenter
                            ShopCenterData={ShopCenterJson}
                            popToHomeWithData={(data)=> {this.pushToHomeDetail(data)}}
                        />
                    {/*第五部分*/}
                    {/*第六部分(猜你喜欢)*/}
                        <HomeGeustYouLike />
                </ScrollView>
            </View>

        );
    },

    //
    pushToHomeDetail(data){

        var deal_url = this.dealWithUrl(data);
        this.props.navigator.push({

            component:HomeDetail,
            passProps:{deal_url}

        })
    },


    //过滤URL
    dealWithUrl(url){

        var search_url = 'imeituan://';

        if (url.search(search_url) !== -1){

            return url.replace('imeituan://www.meituan.com/web/?url=' , '');
        }else {

            return url;
        }

    },


//    跳转到二级界面
//     pushToDetail(){
//
//       this.props.navigator.push({
//           component:HomeDetail
//
//       });
//     },


//    导航条
    renderNavBar(){
        return(

            <View style={styles.navBarStyle}>
                {/*左边*/}

                <TouchableOpacity onPress={()=>(this.pushToDetail())}>
                    <Text style={{color:'white'}}>深圳</Text>
                </TouchableOpacity>
                {/*中间*/}

                <TextInput
                    placeholder="输入商家,品类,商圈"
                    style={styles.topInputStyle}
                />
                {/*右边*/}

                <View style={styles.rightNavBarStyle}>
                    <TouchableOpacity onPress={()=>(alert('ok'))}>
                         <Image source={{uri:'icon_homepage_message'}} style={styles.rightImageStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>(alert('ok'))}>
                         <Image source={{uri:'icon_homepage_scan'}} style={styles.rightImageStyle}/>
                    </TouchableOpacity>

                </View>
            </View>

        )

    }

});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },

    navBarStyle:{//导航条
        //适配安卓
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
    //    设置主轴方向
        flexDirection:'row',
        alignItems:'center',
    //
        justifyContent:'space-around'

    },

    rightNavBarStyle:{ //右边view的样式

        flexDirection: 'row',
        // backgroundColor:'red',
        alignItems:'center',
        height:64

    },

    topInputStyle:{//输入框样式
        width: width * 0.7,
        //适配安卓
        height:Platform.OS == 'ios' ? 35 : 30,
        backgroundColor:'white',
        //适配安卓
        marginTop: Platform.OS == 'ios' ? 18 : 0,
        borderRadius:17,
        paddingLeft:15

    },

    rightImageStyle:{//图片大小

        height:Platform.OS == 'ios' ? 28 : 24,
        width:Platform.OS == 'ios' ? 28 : 24,

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
module.exports = Home;