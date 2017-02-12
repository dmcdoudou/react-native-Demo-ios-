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
    Platform,
    TouchableOpacity,
    ScrollView
} from 'react-native';

/**------------导入外部组件---------------**/

var CommonCell = require('./DDMoreCommonCell');




var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderMoreNavBar()}

                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title='扫一扫'
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title='省流量模式'
                            isSwich={true}
                        />
                        <CommonCell
                            title='消息提醒'
                        />
                        <CommonCell
                            title='邀请好友使用豆豆超级团购'
                        />
                        <CommonCell
                            title='清空缓存'
                            rightTitle='1.99M'
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title='意见反馈'
                        />
                        <CommonCell
                            title='问卷调查'
                        />
                        <CommonCell
                            title='支付帮助'
                        />
                        <CommonCell
                            title='网络诊断'
                        />
                        <CommonCell
                            title='关于豆豆团购'
                        />
                        <CommonCell
                            title='欢迎来豆豆团购应聘'
                            rightTitle='5个前端岗位等待您'
                        />
                    </View>
                    <View style={{marginTop:18}}>
                        <CommonCell
                            title='精品应用'
                        />
                    </View>
                </ScrollView>

            </View>
        );
    },

//
    renderMoreNavBar(){

      return(

          <View style={styles.navOutViewStyle}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>更多</Text>
              <TouchableOpacity onPress={()=>(alert('你大爷'))} style={styles.rightViewStyle}>
              <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
              </TouchableOpacity>
          </View>

      )

    },

});


const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
    },

    navOutViewStyle: {

        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },

    rightViewStyle: {
        position:'absolute',
        right: 10,
        bottom:15
    },


    navImageStyle: {

    width: Platform.OS == 'ios' ? 28 : 24,
    height: Platform.OS == 'ios' ? 28 : 24,



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
module.exports = More;