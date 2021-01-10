import React, {useEffect }from 'react';
import { View, Text, StyleSheet , Dimensions,} from 'react-native';
import { SafeAreaView } from 'react-navigation'

const { width, height } = Dimensions.get("window");


const WelcomeView = ({navigation}) => {


useEffect(() => {
    setTimeout(() => {
        navigation.navigate("LandingScreen");
      }, 9000);
}, [navigation])

    return (
      
           <View style={styles.viewContainer}>
           <Text  style={styles.text}>SHOPZONE</Text>
           
           </View>
           
   
    )
}

const styles = StyleSheet.create({
    viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1d1d1'
    },
    text : {
        fontSize: 30,
        fontFamily: 'NunitoSans_Bold',
        marginTop: 10,
        color: '#121212'
        
        
    }
})


export default WelcomeView
