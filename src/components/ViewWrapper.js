import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';

export default class ViewWrapper extends Component {
  render() {
    const { style = {}, children, StatusBarProps = {} } = this.props;
    const {
      backgroundColor = 'white',
      height = STATUSBAR_HEIGHT,
    } = StatusBarProps;
    return (
      <View style={[styles.ViewWrapper, style]}>
        <View style={[styles.StatusBar, { backgroundColor, height }]}>
          <StatusBar {...StatusBarProps} />
        </View>
        {children}
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
  ViewWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  StatusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
