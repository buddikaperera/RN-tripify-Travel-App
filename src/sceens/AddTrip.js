import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES, RANDOM_THUMBNAIL} from '../assets/assets';
import BackButton from '../components/common/BackButton';
import ScreenWrapper from '../components/common/ScreenWrapper';
import {COLORS} from '../theme/theme';
import AddButton from '../components/common/AddButton';

const AddTrip = ({navigation}) => {
  const [placeBanner, setPlaceBanner] = useState('');
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    setPlaceBanner(RANDOM_THUMBNAIL());
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.addTripWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.bannerContainer}>
            <Image
              source={require('../assets/images/16.png')}
              style={styles.banner}
            />
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.subHeading}>Where on Earth?</Text>
              <TextInput
                value={place}
                onChangeText={value => setPlace(value)}
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem2}>
              <Text style={styles.subHeading}>Which country?</Text>
              <TextInput
                value={country}
                onChangeText={value => setCountry(value)}
                style={styles.input}
              />
            </View>
          </View>
        </View>

        <AddButton
          buttonText="ADD TRIP"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default AddTrip;

const styles = StyleSheet.create({
  addTripWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  banner: {
    height: 250,
    width: '120%',
    resizeMode: 'cover',
  },
  bannerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginVertical: 12,
  },
  formItem: {marginVertical: 6},
  formItem2: {marginVertical: 3},
  input: {
    backgroundColor: COLORS.ORANGE,
    marginTop: 25,
    fontSize: 16,
    padding: 12,
    borderRadius: 18,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
});
