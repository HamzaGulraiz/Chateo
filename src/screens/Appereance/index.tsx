import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomBackground from '../../components/Background/Background'
import CustomHeader from '../../components/HeaderBar/Header'
import icons from '../../assets/icons/icons';

const Appereance = () => {
  return (
    <CustomBackground>
    <View style={styles.container}> 
    <CustomHeader 
      title={"Appereance"}
      leftIcon={0} 
      onPressLeftIcon={()=>{}}

      rightIcon={0} 
      onPressRightIcon={()=>{console.log("RIcon");
      }}
      secondRightIcon={0}
      onPressSecondRightIcon={()=>{}}
      marginTop={hp(1)}
      marginBottom={hp(4)}
      />

        <Text style={styles.title}>Theme</Text>
      
        <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.logo}>
                <Image source={icons.sun} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.logo}>
                <Image source={icons.moon} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
        </View>

    </View>
    </CustomBackground>
  )
}

export default Appereance
