import React from 'react';
import { View, Text, StyleSheet , Dimensions,} from 'react-native';
import { SafeAreaView } from 'react-navigation'

const { width, height } = Dimensions.get("window");


const WelcomeView = () => {

    return (
      
           <View style={styles.viewContainer}>
           <Text  style={styles.text}>Welcome Screen</Text>
           
           </View>
           
   
    )
}

const styles = StyleSheet.create({
    viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text : {
        fontSize: 30,
        fontFamily: 'NunitoSans_Regular',
        marginTop: 10
        
        
    }
})


export default WelcomeView
