import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {APPEREANCE, CHATS, CONTACTS, GET_STARTED, MORE, MY_TABS} from '../../constants/Navigator';
import GetStarted from '../../screens/GetStarted';
import Contacts from '../../screens/Contacts';
import Chats from '../../screens/Chats';
import More from '../../screens/More';
import MyTabs from '../BottomTabNavigator/Navigators';
import Appereance from '../../screens/Appereance';

export type RootStackParams ={
  Contacts: any;
  Chats: any;
  More: any;
  GetStarted: any;
  MyTabs: any;
  Appereance: any;
};

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={MY_TABS} component={MyTabs} />
      <Stack.Screen name={GET_STARTED} component={GetStarted} />
      <Stack.Screen name={APPEREANCE} component={Appereance} />
      {/* <Stack.Screen name={MORE} component={More} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
