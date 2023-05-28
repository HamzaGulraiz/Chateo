import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ImageSourcePropType, Text, View} from 'react-native';
import React,{useState} from 'react';
import styles from './styles';
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import icons from '../../assets/icons/icons';
import CustomBottomTabNavigator from '../../routes/BottomTabNavigator/Navigators';


const More = () => {

  
  return (
    <CustomBackground>
      <>
    <View style={styles.container}>
    <CustomHeader 
      title={"More"}
      leftIcon={0} 
      onPressLeftIcon={()=>{}}

      rightIcon={0} 
      onPressRightIcon={()=>{console.log("RIcon");
      }}
      secondRightIcon={0}
      onPressSecondRightIcon={()=>{}}
      />
    </View>
    <CustomBottomTabNavigator routName='More' />
        </>
    </CustomBackground>
  );
};

export default More;
