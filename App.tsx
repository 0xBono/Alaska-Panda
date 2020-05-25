// import 'react-native-gesture-handler';
// import React, {useEffect} from 'react';
// import {StatusBar} from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import MoreNotice from './src/screens/More/MoreNotice';
// import MoreNoticeDetails from './src/screens/More/MoreNoticeDetails';
// import MoreEvent from './src/screens/More/MoreEvent';
// import MoreDeclaration from './src/screens/More/MoreDeclaration';

// import RegisterMain from './src/screens/Register/RegisterMain';

// import Reservation from './src/screens/Reservation/Reservation';
// import ReservationApply from './src/screens/Reservation/ReservationApply';

// import SplashScreen from 'react-native-splash-screen';
// import RegisterSelect from './src/screens/Register/RegisterSelect';
// import RegisterUser from './src/screens/Register/RegisterUser';
// import UserLogin from './src/screens/Login/UserLogin';
// import AlphaCardView from './src/screens/AlphaCard/AlphaCardView';
// import AlphaCardApply from './src/screens/AlphaCard/AlphaCardApply';
// import ZipStoryApply from './src/screens/ZipStory/ZipStoryApply';
// import RegularList from './src/screens/Regular/RegularList';
// import SettingIndex from './src/screens/Setting/SettingIndex';
// import MoreIndex from './src/screens/More/MoreIndex';
// import ZipHome from './src/screens/ZipStory/ZipHome';
// import MyIndex from './src/screens/My/MyIndex';
// import SearchIndex from './src/screens/Main/SearchIndex';
// import AlphaCardSetting from './src/screens/AlphaCard/AlphaCardSetting';
// import SearchDetails from './src/screens/Main/SearchDetails';

// import Home from './src/assets/home';
// import My from './src/assets/human';
// import Search from './src/assets/search'
// import Bell from './src/assets/bell';
// import Menu from './src/assets/menu';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function App() {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, [])
//   return (
//     <NavigationContainer>
//       <StatusBar backgroundColor="black" barStyle="light-content"/>
//         <Stack.Navigator headerMode="none">
//         <Stack.Screen name="RegisterMain" component={RegisterMain} />
//         <Stack.Screen name="UserLogin" component={UserLogin} />
//         <Stack.Screen name="SearchDetails" component={SearchDetails} />
//         <Stack.Screen name="AlphaCardSetting" component={AlphaCardSetting} />
//         <Stack.Screen name="RegisterSelect" component={RegisterSelect} />
//         <Stack.Screen name="RegisterUser" component={RegisterUser} />
//         {/*<Stack.Screen name="MoreNotice" component={MoreNotice} />
//         <Stack.Screen name="MoreNoticeDetails" component={MoreNoticeDetails} />
//         <Stack.Screen name="MoreEvent" component={MoreEvent} />
//         <Stack.Screen name="MoreDeclaration" component={MoreDeclaration} />
//         <Stack.Screen name="AlphaCardView" component={AlphaCardView} />
//         <Stack.Screen name="AlphaCardApply" component={AlphaCardApply} />
//         <Stack.Screen name="ZipStoryApply" component={ZipStoryApply} />  
//         <Stack.Screen name="RegularList" component={RegularList} />  
//         <Stack.Screen name="SettingIndex" component={SettingIndex} />  
//         <Stack.Screen name="MoreIndex" component={MoreIndex} />  
//         <Stack.Screen name="ZipHome" component={Tabbar} />   */}
//         <Stack.Screen name="MyIndex" component={MyIndex} />  
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// function Tabbar() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         tabBarOptions={{
//         activeTintColor: '#dc2125',
//         }}
//       >
//         <Tab.Screen 
//         name="Home" 
//         component={ZipHome}
//         options={{
//           tabBarLabel: '홈',
//           tabBarIcon: () => (
//             <Home width={20} height={20} />
//           ),
//         }}/>
//         <Tab.Screen 
//         name="MyIndex" 
//         component={MyIndex}
//         options={{
//           tabBarLabel: '마이',
//           tabBarIcon: () => (
//             <My width={20} height={20} />
//           ),
//         }}/>
//         <Tab.Screen 
//         name="SearchIndex" 
//         component={SearchIndex}
//         options={{
//           tabBarLabel: '검색',
//           tabBarIcon: () => (
//             <Search width={20} height={20} />
//           ),
//         }}/>
//         <Tab.Screen 
//         name="MoreIndex" 
//         component={MoreIndex}
//         options={{
//           tabBarLabel: '더보기',
//           tabBarIcon: () => (
//             <Menu width={20} height={20} />
//           ),
//         }}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;
