import React, {useState} from 'react'
import { View, Image , StyleSheet} from 'react-native'
import { Text } from 'react-native-elements';

const OrderScreen = () => {
    return (
       <View style={styles.orderContainer}>
           <Text h1 h1Style={styles.h1Container}>Shopping Cart</Text>


          <View>
              
          </View>



       </View>








    )
}   


const styles = StyleSheet.create({
    orderContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    h1Container: {
        marginBottom: 650
    }
   
    
})



export default OrderScreen
