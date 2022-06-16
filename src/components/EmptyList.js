import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/assets';

const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
      <Image source={IMAGES.EMPTY_LIST} style={styles.banner} />
      <Text style={styles.message}>No data found </Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  banner: {
    height: 240,
    width: 240,
  },

  emptyList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  message: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: '600',
  },
});
