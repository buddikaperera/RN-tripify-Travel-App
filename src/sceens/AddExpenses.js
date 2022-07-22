import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/common/ScreenWrapper';
import KeybaordAvoidingWrapper from '../components/common/KeybaordAvoidingWrapper';
import BackButton from '../components/common/BackButton';
import AddButton from '../components/common/AddButton';
import {IMAGES} from '../assets/assets';
import {COLORS} from '../theme/theme';
import {useDispatch} from 'react-redux';
import {addExpense} from '../redux/slice/trips';

const CATEGORIES = ['Food', 'Others', 'Shopping', 'Entertainment'];

const AddExpenses = ({navigation, route}) => {
  const selectedTrip = route.params;
  console.log(selectedTrip);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleExpenseAdded = () => {
    //console.log('handleExpenseAdded');

    const expense = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    const data = {
      tripId: selectedTrip.id,
      expense,
    };

    dispatch(addExpense(data));

    navigation.navigate('TripExpenses', selectedTrip);
  };

  return (
    <ScreenWrapper>
      <KeybaordAvoidingWrapper>
        <View style={styles.addExpenseWrapper}>
          <View>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.bannerContainer}>
              <Image source={IMAGES.ADD_EXPENSE_BANNER} style={styles.banner} />
              <View style={styles.subHeadingContainer}>
                <Text style={styles.subHeading}>Add new Expense</Text>
              </View>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.label}>For What?</Text>
              <TextInput
                value={title}
                onChangeText={value => setTitle(value)}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>How much?</Text>
              <TextInput
                value={amount}
                onChangeText={value => setAmount(Number(value))}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>Category </Text>
              <View style={styles.categoryOptions}>
                {CATEGORIES.map((cat, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      ...styles.category,
                      backgroundColor:
                        category === cat ? COLORS.BASE08 : COLORS.WHITE,
                    }}
                    onPress={() => setCategory(cat)}>
                    <Text
                      style={{
                        ...styles.categoryLabel,
                        color: category === cat ? COLORS.WHITE : COLORS.BLACK,
                      }}>
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          <View style={{paddingTop: 1}}>
            <AddButton onPress={handleExpenseAdded} />
          </View>
        </View>
      </KeybaordAvoidingWrapper>
    </ScreenWrapper>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  addExpenseWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  banner: {
    height: 240,
    width: '120%',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  category: {
    paddingVertical: 11,
    paddingHorizontal: 12,
    marginRight: 6,
    borderRadius: 18,
    marginBottom: 18,
    marginLeft: 1,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  categoryOptions: {
    display: 'flex',
    flexDirection: 'row',

    flexWrap: 'wrap',
    marginTop: 12,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    marginVertical: 12,
  },
  formItem: {marginVertical: 3},
  formItem2: {marginVertical: 2},

  label: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  input: {
    backgroundColor: COLORS.ORANGE,
    marginTop: 25,
    fontSize: 16,
    padding: 8,
    borderRadius: 18,
  },
  form: {},
  subHeading: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  subHeadingContainer: {
    position: 'absolute',
    bottom: -5,
    paddingVertical: 8,
    width: '70%',
    backgroundColor: COLORS.BASE02,
    borderRadius: 18,
  },
});
