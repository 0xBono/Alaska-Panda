import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoreNotice from './src/screens/More/MoreNotice';
import MoreNoticeDetails from './src/screens/More/MoreNoticeDetails';
import MoreEvent from './src/screens/More/MoreEvent';
import MoreDeclaration from './src/screens/More/MoreDeclaration';
//http://54.180.134.156/reservation/insertReservation
//Reservation
import Reservation from './src/screens/Reservation/Reservation';
import ReservationApply from './src/screens/Reservation/ReservationApply';

import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="MoreNotice" component={MoreNotice} /> */}
        {/* <Stack.Screen name="MoreNoticeDetails" component={MoreNoticeDetails} /> */}
        {/* <Stack.Screen name="MoreEvent" component={MoreEvent} /> */}
        {/* <Stack.Screen name="MoreDeclaration" component={MoreDeclaration} /> */}
        <Stack.Screen name="Reservation" component={Reservation} />
        <Stack.Screen name="ReservationApply" component={ReservationApply} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
