import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {APPEREANCE, CHATS, CONTACTS, GET_STARTED, MORE, MY_TABS, PHONE_NUMBER, PROFILE, VERIFICATION_CODE} from '../../constants/Navigator';
import GetStarted from '../../screens/GetStarted';
import MyTabs from '../BottomTabNavigator/Navigators';
import Appereance from '../../screens/Appereance';
import PhoneNumber from '../../screens/PhoneNumber';
import Verification from '../../screens/Verification';
import Profile from '../../screens/Profile';

export type RootStackParams ={
  Contacts: any;
  Chats: any;
  More: any;
  GetStarted: any;
  MyTabs: any;
  Appereance: any;
  PhoneNumber: any;
  VerificationCode: any;
  Profile: any;
}; 

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={GET_STARTED} component={GetStarted} />
      <Stack.Screen name={MY_TABS} component={MyTabs} />
      <Stack.Screen name={APPEREANCE} component={Appereance} />
      <Stack.Screen name={PHONE_NUMBER} component={PhoneNumber} />
      <Stack.Screen name={VERIFICATION_CODE} component={Verification} />
      <Stack.Screen name={PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
