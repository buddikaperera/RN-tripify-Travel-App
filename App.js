import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AppNavigator from './src/navigation/app-navigator';
import {NavigationContainer} from '@react-navigation/native';
import ScreenWrapper from './src/components/common/ScreenWrapper';

const App = () => {
  return (
    <NavigationContainer>
      <ScreenWrapper>
        <AppNavigator />
      </ScreenWrapper>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
