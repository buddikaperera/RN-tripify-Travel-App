npx react-native init tripify

folders created  

   -- navigation
   -- screens
   -- redux
   -- theme
   -- components
   -- assets
      ---- images
      ---- icons



create ScreenWrapper in common folder

go to Theme folder and theme.js

get colors form https://dribbble.com/


add react navigation 

npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack

---------------downloads assets from --------------

https://iconscout.com/all-assets/travel
storyset.com

create the app-navigator.js in the navigation folder

export the AppNavigator and  import to app.js



********* REDUX *******
https://redux.js.org/introduction/getting-started

npm install @reduxjs/toolkit

https://redux.js.org/tutorials/quick-start
npm install @reduxjs/toolkit react-redux

create two folders in redux folder 
(1) Slice - have many slices along with the application funcationalites 
(2) Store -index file only 

(1) Slice -
      triup-sclice.js

import {createSlice} from '@reduxjs/toolkit';

const initialTripState = {
  trips: [], ///collection  of objects
};

export const tripSlice = createSlice({
  name: 'Trips',
  initialState: initialTripState,
  reducers: {
    addTrip: (state, action) => {
      state.trips = [...state.trips, action.payload];
    },
    addExpense: (state, action) => {
      const tripId = action.payload.tripId;
      state.trips = state.trips.map(trip => {
        if (trip.id === tripId) {
          trip.expenses = [...trip.expenses, action.payload.expense];
        }
        return trip;
      });
    },
  },
});

export const {addExpense, addTrip} = tripSlice.actions;

export default tripSlice.reducer;


////https://redux.js.org/tutorials/quick-start
index.js in store filder

store/index.js
import {configureStore} from '@reduxjs/toolkit';

import tripReducer from '../slice/trips';

export const store = configureStore({
  reducer: {
    trips: tripReducer,
  },
});


import store to app.js

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

--------------------------------------------------------------------------

calling redux funcations


  const dispatch = useDispatch(); ///set something in the redux store call varible in dispatch 


  const expens = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    const data = {
      tripId: selectedTrip.id,
      expens,
    };

    dispatch(addExpense(data));



 const handleAddTrip = () => {
    const tripData = {
      id: Date.now(),
      place,
      country,
      banner: placeBanner,
      expenses: [],
    };

    dispatch(addTrip(tripData));
  };



usesecltor will get the data from the store