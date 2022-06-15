import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AppNavigator from './src/navigation/app-navigator';
import {NavigationContainer} from '@react-navigation/native';
import ScreenWrapper from './src/components/common/ScreenWrapper';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenWrapper>
          <AppNavigator />
        </ScreenWrapper>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
