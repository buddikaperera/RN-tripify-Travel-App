import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

const ScreenWrapper = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 32 : 0,
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 32,
    backgroundColor: COLORS.BACKOUND,
    minHeight: '100%',
  },
});
