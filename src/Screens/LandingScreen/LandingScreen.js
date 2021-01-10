import React  from 'react';
import { Text, View, StyleSheet , Dimensions} from 'react-native'
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const windowHeight = Dimensions.get('window').height;



const LandingScreen = () => {
  
      const navigation = useNavigation()


    return (
        <View style={styles.landingContainer}>

            <Text  style={styles.headerSubject} >SHOP ZONE</Text>


            <View style={styles.headerText}>
             <Text style={styles.headerWriting}>Welcome to ShopZone</Text>
             <Text style={styles.headerWriting}>Shop  the latest and cheapest electronics</Text>
            </View>


            <View style={styles.buttonOne}>
            <Button
            title= "Sign-In"
            buttonStyle={styles.buttonStyle}
            titleStyle={{fontSize: 25, fontFamily: 'NunitoSans_Regular'}}
            onPress={ () => navigation.navigate("LoginScreen")}
            />
            </View>

            <View style={styles.buttonTwo}>
             <Button
            title= " Sign-Up"
            buttonStyle={styles.buttonStyle}
            titleStyle={{fontSize: 25, fontFamily: 'NunitoSans_Regular'}}
            onPress={ () => navigation.navigate("SignUp")}
             />
            </View>


        </View>


        
    )
}


const styles = StyleSheet.create({
     landingContainer: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         height: windowHeight,
         
         backgroundColor: '#d1d1d1'
     },
     headerText : {
          marginBottom: 50,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center'

     },
     headerWriting: {
         padding: 10,
         fontSize: 20,
         
         fontFamily: 'NunitoSans_Regular',

     },
     headerSubject: {
            fontSize: 30,
            marginBottom: 100,
            fontWeight: 'bold'
     },

     buttonOne : {
        marginTop: 20,
        height: 100

   },
   buttonTwo : {
    marginTop: 20,
    height: 100

},
buttonStyle: {
    height: 50,
    width: 300,
    borderRadius: 25,
    fontFamily: 'NunitoSans_Regular',
    fontSize: 40,
     borderRadius: 20,
    backgroundColor: '#070707',
    borderColor: '#010101'
    

}
})

export default LandingScreen
