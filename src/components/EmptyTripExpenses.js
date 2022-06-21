import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/assets';

const EmptyTripExpenses = () => {
  return (
    <View style={styles.emptyList}>
      <Image source={IMAGES.EMPTY_TRIP_EXPENSES} style={styles.banner} />
      <Text style={styles.message}>Empty Trip expenses found </Text>
    </View>
  );
};

export default EmptyTripExpenses;

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
    fontSize: 18,
    fontWeight: '600',
  },
});
