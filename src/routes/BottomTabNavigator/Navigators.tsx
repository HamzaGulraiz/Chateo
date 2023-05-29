import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from '../../screens/Contacts';
import Chats from '../../screens/Chats';
import More from '../../screens/More';
import { CONTACTS, CHATS, MORE, MY_TABS } from '../../constants/Navigator';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import fontsizes from '../../assets/fontsizes/fontsizes';
import fonts from '../../assets/fonts/fonts';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../StackNavigator/Navigators';




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
     tabBarShowLabel: false,
    }}
    
    
    >
      <Tab.Screen
        name={CONTACTS} 
        component={Contacts}
        options={{
          tabBarIcon : ({focused})=>(
            focused ?
            <> 
            <Text style={styles.tabText}>Contacts</Text>
            <Image source={icons.dotActive} resizeMode="contain" style={styles.dot} />
            </>
            : 
            <Image source={icons.contactInactive} resizeMode="contain" style={styles.tabIcon} /> 
          )
        }}
        />
           <Tab.Screen
        name={CHATS} 
        component={Chats}
        options={{
          tabBarIcon : ({focused})=>(
            focused ?
            <> 
            <Text style={styles.tabText}>Chats</Text>
            <Image source={icons.dotActive} resizeMode="contain" style={styles.dot} />
            </>
            : 
            <Image source={icons.chatInactive} resizeMode="contain" style={styles.tabIcon} />
          )
        }}
        />
              <Tab.Screen
        name={MORE} 
        component={More}
        options={{
          tabBarIcon : ({focused})=>(
            focused ?
            <> 
            <Text style={styles.tabText}>More</Text>
            <Image source={icons.dotActive} resizeMode="contain" style={styles.dot} />
            </>
            : 
            <Image source={icons.moreInactive} resizeMode="contain" style={styles.tabIcon} />
          )
        }}
        />
    </Tab.Navigator>
  );
}

export default MyTabs

const styles = StyleSheet.create({
  tabText: {
    color:colors.black,
    marginBottom:hp(0.8),
    fontWeight:"600",
    fontSize:fontsizes.px_14,
    fontFamily:fonts.Bold,
  },
  tabIcon: {
    width:wp(6),
    height:hp(3.5),
  },
  dot: {
    width: wp(1.2),
    height: hp(0.8),
  },
});



