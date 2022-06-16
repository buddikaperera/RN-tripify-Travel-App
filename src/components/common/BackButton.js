import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICONS} from '../../assets/assets';
import {COLORS} from '../../theme/theme';

const BackButton = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={ICONS.BACK_BUTTON} style={styles.backIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backIcon: {
    height: 40,
    width: 40,
    // marginVertical: -109,
    resizeMode: 'contain',
  },
  iconWrapper: {
    padding: 6,
    backgroundColor: COLORS.WHITE,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});
