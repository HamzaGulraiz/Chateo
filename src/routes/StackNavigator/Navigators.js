import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GET_STARTED, CONTACTS} from '../../constants/Navigator';
import GetStarted from '../../screens/GetStarted';
import Contacts from '../../screens/Contacts';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={GET_STARTED} component={GetStarted} />
      <Stack.Screen name={CONTACTS} component={Contacts} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
