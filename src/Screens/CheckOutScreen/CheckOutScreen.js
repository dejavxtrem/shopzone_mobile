import React, {useState} from 'react'
import { View, Text, Image , StyleSheet} from 'react-native'


const CheckOutScreen = () => {
    return (
       <View style={styles.orderContainer}>
           <Text >CheckOut Screen</Text>
       </View>
    )
}


const styles = StyleSheet.create({
    orderContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
    },

   
    
})



export default CheckOutScreen