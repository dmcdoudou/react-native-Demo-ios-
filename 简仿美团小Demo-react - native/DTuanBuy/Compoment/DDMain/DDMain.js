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
    Platform,   //检测运行的是那个系统
    Navigator,

} from 'react-native';



//导入第三方库
import TabNavigator from 'react-native-tab-navigator';

//导入外部组件
var Home = require('../DDHome/DDHome');
var Mine = require('../DDMine/DDMine');
var More = require('../DDMore/DDMore');
var Shop = require('../DDShop/DDShop');


//
var Main = React.createClass({

    //初始化函数(变量是可以改变的 状态机)

    getInitialState(){

        return{

            selectedTab:'home' //默认第一个
        }

    },


    render() {
        return (
            <TabNavigator>
                {/*我的*/}
                {this.renderTabbarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected',"home",Home)}
                {/*商家*/}
                {this.renderTabbarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',"shop",Shop)}
                {/*我的*/}
                {this.renderTabbarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected',"mine",Mine)}
                {/*更多*/}
                {this.renderTabbarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected',"more",More)}
            </TabNavigator>
        );
    },

//    封装导航栏
    renderTabbarItem(title, renderIcon, renderSelectedIcon, selectedTar,component){
        return(

            <TabNavigator.Item
                title={title}
                renderIcon={()=> <Image source={{uri: renderIcon}} style={styles.iconStyle}/>}
                renderSelectedIcon={()=> <Image source={{uri: renderSelectedIcon}} style={styles.iconStyle}/>}
                onPress={()=>{this.setState({selectedTab:selectedTar})}}
                selected={this.state.selectedTab === selectedTar}
                titleStyle={{color:'gray'}}
                selectedTitleStyle={{color:'orange'}}

            >
                <Navigator
                    initialRoute={{ name: {title}, component: component}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>
                    }}
                />

            </TabNavigator.Item>

        )

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

    iconStyle: {

        //适配图片的显示尺寸
        width:Platform.OS == 'ios' ? 30 : 25,
        height:Platform.OS == 'ios' ? 30 : 25,

    }

});


//
module.exports = Main;