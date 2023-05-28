import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { StyleSheet, Text, View,Image,TextInput} from 'react-native'
import React from 'react'
import icons from '../../assets/icons/icons';

type CustomSearchBarProps = {
    placeHolder: string;
    height: number;
    width: number;
    marginTop: number;
    marginBottom: number;
    value: string;
    setValue: (value: string) => void;
}

const CustomSearchBar : React.FC<CustomSearchBarProps> = ({
    placeHolder,
    height,
    width,
    marginTop,
    marginBottom,
    value,
    setValue,
}) => {
  return (
    <View style={{...styles.container,
    height:height?height:hp(4.4),
    // width:width?width:"100%",
    marginTop:marginTop?marginTop:hp(1),
    marginBottom:marginBottom?marginBottom:hp(1)
    }}>
        <View style={styles.textInputView}>

        <View style={styles.iconView}>
        <Image source={icons.search} style={styles.image} resizeMode="contain" />
        </View>
      <TextInput
      style={styles.textInput} 
      placeholder={placeHolder}
      placeholderTextColor="black"
      numberOfLines={1}
      />
        </View>
     </View>
  )
}

export default CustomSearchBar

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginHorizontal: wp(6.4),
        backgroundColor:"#F7F7FC",
        borderRadius:wp(1),
    },
    textInputView: {
        flexDirection:"row",
        alignItems:"center",
    },
    iconView: {
        marginHorizontal: wp(2),
        height:hp(2.3),
        width:wp(5),
    },
    image: {
        height:"100%",
        width:"100%",
    },
    textInput:{
        flex:1,
        height:hp(5.5),
      
    },
})