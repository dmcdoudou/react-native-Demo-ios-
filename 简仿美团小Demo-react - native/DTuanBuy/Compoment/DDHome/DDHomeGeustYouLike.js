/**
 * Created by douguangbin on 2017/1/23.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


var CommonViewCell = require('./DDHomeCommonViewCell');
var HomeYouLikeListView = require('./DDHomeYouLikeListView');

var HomeGeustYouLike = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*上半部分*/}
                <CommonViewCell
                    leftIcon="cnxh"
                    leftTitle="猜你喜欢"
                />
                {/*下半部分*/}
                 <HomeYouLikeListView />

            </View>
        );
    }

});


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop:15,

    },

});



//
module.exports = HomeGeustYouLike;