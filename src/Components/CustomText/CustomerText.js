import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const CustomerText = () => {
    return (
        <View>
        <Text style={styles.customeText}> 
           Latest Products
       </Text>
        </View>
     
    )
}

const styles = StyleSheet.create({
    customeText: {
        fontSize: 18,
    }
   

})

export default CustomerText
