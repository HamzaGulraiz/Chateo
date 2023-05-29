import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
import fontsizes from '../../assets/fontsizes/fontsizes';
import fonts from '../../assets/fonts/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // bottom: hp(0.5),
    // backgroundColor: colors.backGround,
  },
  title: {
     color:colors.black,
    textAlign:"center",
    fontWeight:"600",
    fontSize:fontsizes.px_18,
    fontFamily:fonts.Bold,
  },
  imageContainer: {
    marginTop:hp(4),
     marginHorizontal: wp(6.4),
     justifyContent:"space-around",
     flexDirection:"row",
  },
  logo:{
    height:50,
    width:50,
  },
  image: {
    width:"100%",
    height:"100%",
  },
});

export default styles;
