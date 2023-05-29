import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet, Text, View ,Image, ImageSourcePropType,TouchableOpacity} from 'react-native'
import React from 'react'
import fontsizes from '../../assets/fontsizes/fontsizes';
import fonts from '../../assets/fonts/fonts';
import colors from '../../assets/colors/colors';


type CustomHeaderProps = {
  title: string,
  leftIcon: ImageSourcePropType,
  onPressLeftIcon():void,
  rightIcon: ImageSourcePropType,
  onPressRightIcon():void,
  secondRightIcon: ImageSourcePropType,
  onPressSecondRightIcon():void,
  marginTop:number,
  marginBottom:number,
}

const CustomHeader :React.FC<CustomHeaderProps> = ({
  title,
  leftIcon,
  onPressLeftIcon,
  rightIcon,
  onPressRightIcon,
  secondRightIcon,
  onPressSecondRightIcon,
  marginTop,
  marginBottom,
}) => {
  return (
    <View style={{...styles.container,
      marginTop:marginTop?marginTop:0,
      marginBottom:marginBottom?marginBottom:0,
    }}>
      {leftIcon ? (
        <TouchableOpacity style={styles.leftImgView} onPress={onPressLeftIcon}>
          <Image style={styles.image} source={leftIcon} resizeMode="contain" />
        </TouchableOpacity>
      ) : (null)}
      {title ? (
      <Text style={styles.title}>{title}</Text>
      ): (null)}
      {secondRightIcon ? (
        <TouchableOpacity style={styles.secondRightImgView} onPress={onPressSecondRightIcon}>
          <Image style={styles.image} source={secondRightIcon} resizeMode="contain" />
        </TouchableOpacity>
      ) : (null)}
      {rightIcon ? (
        <TouchableOpacity style={styles.rightImgView} onPress={onPressRightIcon}>
          <Image style={styles.image} source={rightIcon} resizeMode='contain' />
        </TouchableOpacity>
      ) : (null)}
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      marginHorizontal: wp(6.4),
      alignItems: "center",
      // marginTop:hp(1),
      // height:hp(3.5),
      // backgroundColor:"red",
    },
    
    leftImgView:{
      marginRight:wp(2),
      height:hp(2.3),
      width:wp(5)
    },
    rightImgView:{
      position:"absolute",
      height:hp(2.3),
      width:wp(5),
      right:0,
    },
    secondRightImgView:{
      position:"absolute",
      height:hp(2.3),
      width:wp(5),
      right:wp(7),

    },
    title:{
    color:colors.black,
    marginRight: wp(2),
    fontWeight:"600",
    fontSize:fontsizes.px_18,
    fontFamily:fonts.Bold,
   },
   image: {
      height:"100%",
      width:"100%",
   },
})