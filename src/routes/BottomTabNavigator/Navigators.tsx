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
import { CONTACTS, CHATS, MORE } from '../../constants/Navigator';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import fontsizes from '../../assets/fontsizes/fontsizes';
import fonts from '../../assets/fonts/fonts';
// import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../StackNavigator/Navigators';
// import { RootStackParamList } from '../types';

// type HomeScreenProps = {
//     navigation: StackNavigationProp<RootStackParamList, 'Home'>;
//   };


type CustomBottomTabNavigatorProps = {
    routName: string;
}


  const CustomBottomTabNavigator : React.FC<CustomBottomTabNavigatorProps> = ({
    routName,
  }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [activeTab, setActiveTab] = useState(routName);

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    // console.log(JSON.stringify(tabName));
    
};

return (
    <View style={styles.container}>
      
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => {
            handleTabPress(CONTACTS)
            navigation.navigate("Contacts");
        }} style={styles.tabButton}>
            {activeTab === CONTACTS ? (
                <Text style={styles.tabText}>Contacts</Text>
                ) : (
                    <Image
                    source={icons.contactInactive}
                    style={styles.tabIcon}
                    resizeMode="contain"
                    />
                    )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            handleTabPress(CHATS)
            navigation.navigate("Chats");
        }} style={styles.tabButton}>
        {activeTab === CHATS ? (
            <Text style={styles.tabText}>Chats</Text>
            ) : (
                <Image
                source={icons.chatInactive}
                style={styles.tabIcon}
                resizeMode="contain"
                />
                )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            handleTabPress(MORE)
            navigation.navigate("More");
            }} style={styles.tabButton}>
        {activeTab === MORE ? (
                    <Text style={styles.tabText}>More</Text>
            ) : (
          <Image
            source={icons.moreInactive}
            style={styles.tabIcon}
            resizeMode="contain"
          />
            )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    borderTopColor: "black",
    borderTopWidth: 0.5,
    height: hp(8),
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color:colors.black,
    fontWeight:"600",
    fontSize:fontsizes.px_14,
    fontFamily:fonts.Bold,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default CustomBottomTabNavigator;



// {activeTab === CONTACTS && <Contacts />}
//       {activeTab === CHATS && <Chats />}
//       {activeTab === MORE && <More />}