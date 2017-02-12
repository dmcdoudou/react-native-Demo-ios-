/**
 * Created by douguangbin on 2017/1/2.
 */



import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';



var MineCommonCell = React.createClass({

    getDefaultProps(){

        return{
                leftIcon:' ',
                leftImage:' ',
                rightImage:' ',
                rightIcon:' '
        }
    },

    render() {
        return (

            <TouchableOpacity>

            <View style={styles.container}>

                {/*左边的*/}
                {this.renderLeftView()}
                {/*右边的*/}
                {this.renderRightView()}

            </View>

            </TouchableOpacity>
        );
    },

//
    renderLeftView(){

        return(
            <View style={styles.leftViewStyle}>
                <Image source={{uri: this.props.leftImage}} style={styles.leftImageStyle}/>
                <Text>{this.props.leftIcon}</Text>
            </View>
        )
    },

//
    renderRightView(){
        return(
            <View style={styles.rightViewStyle}>
                {/*右边显示的图片*/}
                {this.renderItemView()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8, height:13}}/>
            </View>
        )

    },


//
    renderItemView(){

       if (this.props.rightImage == ' '){

           return(<Text style={{color:'gray',marginRight:3}}>{this.props.rightIcon}</Text>)

       }else {

           return(<Image source={{uri:this.props.rightImage}} style={{width:24, height:13, marginRight:8}}/>)
       }

    },


});


const styles = StyleSheet.create({
    container: {

        flexDirection:'row',
        height:Platform.OS == 'ios' ? 44 : 36,
        backgroundColor:'white',

        alignItems:'center',
        justifyContent:'space-between',

        borderBottomColor:'#dddddd',
        borderBottomWidth:1

    },

    leftImageStyle: {

        height: 30,
        width: 30,
        marginRight:8,
        borderRadius:15
    },

    rightViewStyle: {

        flexDirection:"row",

        alignItems:"center",
        marginRight:8

    },

    leftViewStyle: {

        flexDirection:'row',

        alignItems:"center",

        marginLeft:8
    },

});



//
module.exports = MineCommonCell;