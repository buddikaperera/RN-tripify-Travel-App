import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View>
        <Text style={{color: 'red'}}>HOME</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddTrip')}>
          <Text>Click Here</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
