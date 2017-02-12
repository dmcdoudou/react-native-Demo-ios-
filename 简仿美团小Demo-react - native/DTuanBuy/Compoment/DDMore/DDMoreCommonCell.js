/**
 * Created by douguangbin on 2017/1/2.
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
    Switch
} from 'react-native';




var commonCell = React.createClass({

    getDefaultProps(){

            return{

                title: '', //cell 标题
                isSwich:false, //是否展示开关
                rightTitle: '',
            }

    },

    getInitialState(){
        return{
            isOn:false,
        }

    },

    render() {
        return (
          <TouchableOpacity onPress={()=>(alert('ok'))}>
            <View style={styles.container}>

                {/*左边*/}
                <Text style={{marginLeft:8}}>
                    {this.props.title}
                </Text>

                {/*右边*/}
                {this.renderRightView()}
            </View>
          </TouchableOpacity>

        );
    },

//    cell上有边上的显示
    renderRightView(){
        // return(

            if(this.props.isSwich){

                return (
                    <Switch value={this.state.isOn == true} onValueChange={()=>(this.setState({isOn:!this.state.isOn}))}
                            style={{marginRight:8}}/>)

            }else {

                return (
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {this.renderRightTitle()}
                        <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
                    </View>
                )

            }

        // )

    },

//    右边显示标题
    renderRightTitle(){
        if (this.props.rightTitle.length > 0){

            return(
                <Text style={{color:'gray',marginRight:5}}>{this.props.rightTitle}</Text>
            )
        }

    },



});


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        //安卓适配
        height:Platform.OS == 'ios' ? 40 : 30,
        borderBottomWidth:0.5,
        borderBottomColor:'#dddddd',

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },

});


// 输出
module.exports = commonCell;