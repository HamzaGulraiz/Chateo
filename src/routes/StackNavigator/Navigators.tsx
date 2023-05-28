import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CHATS, CONTACTS, GET_STARTED, MORE} from '../../constants/Navigator';
import GetStarted from '../../screens/GetStarted';
import Contacts from '../../screens/Contacts';
import Chats from '../../screens/Chats';
import More from '../../screens/More';


export type RootStackParams ={
  Contacts: any;
  Chats: any;
  More: any;
  GetStarted: any;
};

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={CONTACTS} component={Contacts} />
      <Stack.Screen name={GET_STARTED} component={GetStarted} />
      <Stack.Screen name={CHATS} component={Chats} />
      <Stack.Screen name={MORE} component={More} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
