import React, { Component } from 'react';
import VideoList from './video_list';

import {
    NavigatorIOS,
    View,
    Text,
    StyleSheet,
    StatusBar,
  } from 'react-native';

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <NavigatorIOS
          style={styles.container}
          translucent={false}
          barTintColor='#e2635f'
          titleTextColor='white'
          tintColor='white'
          initialRoute={{
            title: 'Featured Videos',
            component: VideoList,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = Search;
