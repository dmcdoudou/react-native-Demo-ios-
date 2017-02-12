/**
 * Created by douguangbin on 2017/1/23.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    Image
} from 'react-native';



var HomeYouLikeListView = React.createClass({

    //
    getDefaultProps(){
        return{
            url_api:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'

        }
    },

      //
      getInitialState(){

          //数据源
         var ds = new ListView.DataSource({
             rowHasChanged: (r1,r2) => r1 !== r2
         });
            return{
               dataSource:ds.cloneWithRows([''])
            }
      },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },

    //返回具体的cell
    renderRow(rowData, sectionID, rowID){
       return(

           <TouchableOpacity style={styles.cellViewStyle} onPress={()=>alert('点击了'+rowID+'行')}>
               {/*左边*/}
               <Image source={{uri:this.dealWithImgUrl(rowData.imageUrl)}} style={styles.leftImgStyle}/>
               {/*右边*/}
               <View style={styles.rightViewStyle}>
                   <View style={styles.rightTopViewStyle}>
                       <Text style={{color:'orange',fontSize:15}}>{rowData.title}</Text>
                       <Text style={{color:'gray'}}>{rowData.topRightInfo}</Text>
                   </View>
                   <Text style={{color:'gray',fontSize:13}}>{rowData.subTitle}</Text>
                   <View style={styles.rightBottomViewStyle}>
                       <Text>{rowData.subMessage}</Text>
                       <Text>{rowData.bottomRightInfo}</Text>
                   </View>
               </View>
           </TouchableOpacity>
       )

    },



    //网络请求数据
    componentDidMount(){

        fetch(this.props.url_api)
            .then((response) => response.json()) //接收到的是二进制的数据 转换成json
            .then((responseData)=>{   //把转换成的json数据 做一下具体处理
            //拿到数组数据
                var dataArr = responseData['data'];

            //更新状态机
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataArr)
                });
        })

        .catch ((error)=>{

            alert('SB看看当前有网没啊');
        });


    },

    //
    dealWithImgUrl(url){
        //判断
        if (url == null) return;

        if (url.search('w.h') !== -1){

            return url.replace('w.h','120.90');
        }else {

            return url;
        }

    },



});


const styles = StyleSheet.create({
    cellViewStyle: {
        backgroundColor: 'white',
        flexDirection:'row',
        padding:8,
        //下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,

    },

    leftImgStyle: {
      width: 120,
      height: 90,
      borderRadius:8
    },

    rightViewStyle: {

        marginLeft: 5,
        flex:1,
        //主轴居中
        justifyContent:'center'

    },

    rightTopViewStyle: {

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        marginBottom:5

    },

    rightBottomViewStyle: {

        marginTop:5,

        flexDirection:'row',

        justifyContent:'space-between'

    },

});



//
module.exports = HomeYouLikeListView;