import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GET_STARTED, CONTACTS} from '../../constants/Navigator';
import GetStarted from '../../screens/GetStarted';
import Contacts from '../../screens/Contacts';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={GET_STARTED} component={GetStarted} />
      <Stack.Screen name={CONTACTS} component={Contacts} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
