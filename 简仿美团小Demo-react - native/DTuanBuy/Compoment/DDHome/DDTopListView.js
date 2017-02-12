/**
 * Created by douguangbin on 2017/1/22.
 */



import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView
} from 'react-native';


// 导入类库
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

//全局变量
var cols = 5;
var boxW = 65;
var vMargin = (screenW - cols * boxW) / (cols + 1);
var hMargin = 10;


var TopListView = React.createClass({

    getDefaultProps(){
        //
        return{
            data : [],
        }
    },

    //
    getInitialState(){

        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        return{
            dataSource: ds.cloneWithRows(this.props.data),
        }
    },


    render() {
        return (
           <ListView
               dataSource={this.state.dataSource}
               renderRow={this.renderRow}
               contentContainerStyle={styles.listViewStyle}
               style={{width:screenW}}
               scrollEnabled={false}
           />
        );
    },


    //具体的cell
    renderRow(rowData, sectionID, rowID, HLightRow){
      return(
        //未解决的大坑问题
      <View style={styles.cellStyle}>
      <TouchableOpacity onPress={() => alert(rowData.title)} style={styles.itemCenterStyle}>
        <Image source={{uri:rowData.image}} style={styles.imageStyle}/>
          <Text style={{color:'gray', fontSize:12}}>{rowData.title}</Text>
       </TouchableOpacity>
      </View>
      )
    },

});


const styles = StyleSheet.create({

    cellStyle :{

      width:boxW,
      height:boxW,
      marginBottom:hMargin,
      marginTop:hMargin,

      marginLeft:vMargin,

    },

    itemCenterStyle :{

        justifyContent:'center',
        alignItems: 'center'

    },

    imageStyle :{

        width : boxW - 10,
        height: boxW - 10,

    },

    listViewStyle :{

      flexDirection:'row',

      flexWrap: 'wrap'

    },


});



//
module.exports = TopListView;
