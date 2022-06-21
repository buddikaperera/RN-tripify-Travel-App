import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

const AddButton = props => {
  const {buttonText, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addButton}>
        <Text style={styles.buttonText}>{buttonText ? buttonText : 'ADD'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: COLORS.PEACH,
    paddingVertical: 15,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.BLACK,
    fontSize: 20,
    fontWeight: '700',
  },
});
