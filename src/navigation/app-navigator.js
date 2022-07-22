// In App.js in a new project

import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../sceens/Home';
import AddTrip from '../sceens/AddTrip';
import AddExpenses from '../sceens/AddExpenses';
import TripExpenses from '../sceens/TripExpenses';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/**TOP ONE IS THE FIRST SCREEN SHOULD SHOW in YOUR APP */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTrip"
        component={AddTrip}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddExpenses"
        component={AddExpenses}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TripExpenses"
        component={TripExpenses}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
