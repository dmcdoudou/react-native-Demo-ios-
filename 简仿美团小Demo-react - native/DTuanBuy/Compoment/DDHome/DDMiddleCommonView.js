
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
    TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;



var CommonView = React.createClass({

    //
    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:'',
        }
    },


    render() {
        return (

        <TouchableOpacity onPress={()=>alert('你大爷的')}>

            <View style={styles.container}>
                {/*左边*/}
                <View>
                    <Text style={[{color:this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                {/*右边*/}
                 <Image source={{uri:this.props.rightIcon}} style={{width:64,height:48,resizeMode:'contain'}}/>
            </View>

        </TouchableOpacity>

        );
    }

});


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:width * 0.5 - 1,
        height:59,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom:1,
        marginRight:1

    },

    titleStyle : {

        fontSize:18,
        fontWeight:'bold'

    },

    subTitleStyle :{

        color:'gray'
    },


});

//
module.exports = CommonView;