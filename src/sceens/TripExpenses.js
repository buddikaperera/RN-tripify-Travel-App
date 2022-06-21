import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

import BackButton from '../components/common/BackButton';
import {COLORS} from '../theme/theme';
import ScreenWrapper from '../components/common/ScreenWrapper';
import ExpenseCard from '../components/common/trip/ExpenseCard';
import EmptyTripExpenses from '../components/EmptyTripExpenses';
import {useSelector} from 'react-redux';

const MOCKDATA = [
  {
    id: 1,
    title: 'Travelling',
    category: 'Food',
    amount: 1255,
  },
  {
    id: 2,
    title: 'Rock Climbing',
    category: 'Entertainment',
    amount: 534,
  },

  {
    id: 3,
    title: 'Travelling',
    category: 'Others',
    amount: 345,
  },
  {
    id: 4,
    title: 'Shopping Items ',
    category: 'Food',
    amount: 345,
  },
  {
    id: 5,
    title: 'DJ Parties',
    category: 'Entertainment',
    amount: 534,
  },
];

const TripExpenses = ({navigation, route}) => {
  const selectedTrip = route.params;

  console.log(selectedTrip);

  const expenses = useSelector(state => {
    const trips = state.trips.trips;
    const expensesToBeShown = trips.filter(trip => trip.id === selectedTrip.id);

    if (expensesToBeShown.length > 0) {
      return expensesToBeShown[0].expenses;
    }
    return [];
  });
  return (
    <ScreenWrapper>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={styles.bannerConatiner}>
          <Image source={selectedTrip.banner} style={styles.banner} />
          <View style={styles.placeConatiner}>
            <Text style={styles.place}>{selectedTrip.place}</Text>
          </View>
        </View>
        <View style={styles.textBtn}>
          <Text style={styles.subHeading}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddExpenses', selectedTrip)}>
            <Text style={styles.buttonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flatListContainer}>
          <FlatList
            data={MOCKDATA}
            //data={expenses}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyTripExpenses />}
            renderItem={({item}) => {
              return <ExpenseCard expense={item} />;
            }}
          />
        </View>

        {/* <View style={styles.flatListContainer}>
          / <FlatList
            data={MOCKDATA}
         
            legacyImplementation={false}
            renderItem={({item}) => <ExpenseCard expense={item} />}
           
            keyExtractor={item => item.id}
            numColumns={1}
           
            scrollEnabled={true}
            ListEmptyComponent={<EmptyTripExpenses />}
         />
        </View>*/}
      </View>
    </ScreenWrapper>
  );
};

export default TripExpenses;

const styles = StyleSheet.create({
  banner: {
    height: 210,
    width: '125%',

    resizeMode: 'cover',
  },
  bannerConatiner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonText: {
    color: COLORS.ORANGE,
    fontWeight: '700',
  },
  flatListContainer: {
    marginBottom: 120,
    height: 420,
  },
  placeConatiner: {
    backgroundColor: COLORS.WHITE,
    minWidth: '50%',
    paddingVertical: 10,
    borderRadius: 18,
    position: 'absolute',
    bottom: -20,
  },
  place: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.ORANGE,
  },
  textBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 24,
  },
  subHeading: {
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.TEXT,
  },
});
