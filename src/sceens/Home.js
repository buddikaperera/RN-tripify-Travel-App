import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../theme/theme';
import {IMAGES, RANDOM_THUMBNAIL, THUMBNAILS} from '../assets/assets';
import EmptyList from '../components/EmptyList';

const MOCKDATA = [
  {
    id: 1,
    banner: RANDOM_THUMBNAIL(),
    place: 'Goa',
    country: 'India',
  },
  {
    id: 2,
    banner: RANDOM_THUMBNAIL(),
    place: 'Mumbai',
    country: 'India',
  },
  {
    id: 3,
    banner: RANDOM_THUMBNAIL(),
    place: 'Dhili',
    country: 'India',
  },
  {
    id: 4,
    banner: RANDOM_THUMBNAIL(),
    place: 'Bollyhood',
    country: 'India',
  },
  {
    id: 5,
    banner: RANDOM_THUMBNAIL(),
    place: 'Goa',
    country: 'India',
  },
  {
    id: 6,
    banner: RANDOM_THUMBNAIL(),
    place: 'Chennai',
    country: 'India',
  },
];

const Home = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View style={styles.homeHeader}>
        <Text style={styles.heading}>Tripify</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={IMAGES.TRIPIFY_BANNER} style={styles.banner} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddTrip')}
          style={styles.addTripButton}>
          <Text style={styles.addButtnText}>Add Trip</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeading}>Recent Trips</Text>

      <View style={styles.listWrapper}>
        <FlatList
          data={MOCKDATA}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.tripsList}
          keyExtractor={item => item.id}
          numColumns={2}
          ListEmptyComponent={<EmptyList />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddExpenses', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                })
              }>
              <View style={styles.tripCard}>
                <Image source={item.banner} style={styles.tripBanner} />
                <Text style={styles.place}>{item.place}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  addTripButton: {
    fontWeight: '600',
    color: COLORS.TEXT,
  },

  addButtnText: {
    position: 'absolute',
    backgroundColor: COLORS.BUTTON,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
    bottom: -20,
    right: 7,
    color: COLORS.WHITE,
  },
  banner: {
    width: '200%',
    height: 300,
    resizeMode: 'contain',
  },

  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
    position: 'relative',
  },

  country: {
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 6,
  },
  heading: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  homeHeader: {
    fontSize: 10,
    fontWeight: 600,
    marginLeft: 6,
  },

  place: {
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 6,
  },

  listWrapper: {
    marginBottom: 120,
    height: 420,
  },

  subHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.TEXT,
    paddingVertical: 21,
    marginBottom: 2,
    left: 6,
  },

  tripBanner: {
    height: 140,
    width: 140,
  },
  tripCard: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 22,
    borderRadius: 16,
    padding: 5,
  },
  tripsList: {
    justifyContent: 'space-between',
  },
});
