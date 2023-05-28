import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React,{useState} from 'react'
import colors from '../../assets/colors/colors'


 type CustomBackgroundProps =  {
    children: JSX.Element
}
   
const STYLES = ['default', 'light-content', 'dark-content'] as const;

const CustomBackground :React.FC<CustomBackgroundProps> = ({
  children,
}) => {
    const [theme, setTheme] = useState(false)
  return (
    <View style={{...styles.container,
    backgroundColor:theme ? colors.darkTheme : colors.lightTheme,    
    }}>
         <StatusBar
        backgroundColor={theme ? colors.darkTheme : colors.lightTheme}
        barStyle={theme? STYLES[1] : STYLES[2]}
      />
        {children}
    </View>
  )
}

export default CustomBackground

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
})