import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomBackground from '../../components/Background/Background';
import images from '../../assets/images/images';
import CustomButton from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { PHONE_NUMBER } from '../../constants/Navigator';
import { useTypedSelector } from '../../redux/Store';
import fontsizes from '../../assets/fontsizes/fontsizes';
import fonts from '../../assets/fonts/fonts';
import colors from '../../assets/colors/colors';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
}

const GetStarted = () => {
  const navigation = useNavigation<NavigationProps>();
  const THEME = useTypedSelector((state) => state.app.theme);
  return (
    <CustomBackground>
    <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={images.getStarted} style={styles.image} resizeMode="contain" />
          </View>
          <Text style={{...styles.description,
           color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
          }}>
          Connect easily with your family and friends over countries
          </Text>
          <TouchableOpacity>
            <Text style={{...styles.link,
             color: THEME === "Dark" ? colors.lightThemeTextH1 : colors.darkThemeTextH1,
            }}>
            Terms & Privacy Policy
            </Text>
          </TouchableOpacity>
          <CustomButton 
           title='Start Messaging'
           onPress={()=>{
            navigation.navigate(PHONE_NUMBER);
           }}
           height={hp(7.4)}
           marginTop={hp(3)}
           marginBottom={hp(1)}
          />
    </View>
    </CustomBackground>
  );
};

export default GetStarted;
