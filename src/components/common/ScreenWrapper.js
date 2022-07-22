import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

const ScreenWrapper = ({children}) => {
  return <View style={styles.screenWrapper}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  screenWrapper: {
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    paddingHorizontal: 15, //16
    // paddingTop: 8,
    paddingBottom: 12, //32
    backgroundColor: COLORS.GRARY2,
    minHeight: '100%',
  },
});
