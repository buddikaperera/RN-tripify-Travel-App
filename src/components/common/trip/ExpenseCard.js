import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORY_BG, COLORS} from '../../../theme/theme';

const ExpenseCard = ({expense}) => {
  return (
    <View
      style={{
        ...styles.cardWrapper,
        backgroundColor: CATEGORY_BG[expense.category],
      }}>
      <View>
        <Text style={styles.expenseTitle}>{expense.title}</Text>
        <Text style={styles.expenseCategory}>{expense.category}</Text>
      </View>
      <View>
        <Text style={styles.amount}>Rs:{expense.amount}.00</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  expenseTitle: {
    fontSize: 16,
    marginVertical: 4,
    fontWeight: '500',
    color: COLORS.TEXT,
  },
  expenseCategory: {
    fontSize: 12,
    marginVertical: 4,
    color: COLORS.FADE_TXT,
  },

  cardWrapper: {
    padding: 12,
    borderRadius: 18,
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
