import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const ProductListScreen = () => {
    return (
        <View>
        <View style={styles.productContainer}> 
        <Text style={styles.customeText}> 
           Latest Products
       </Text>
        </View>
          
        </View>

     
    )
}

const styles = StyleSheet.create({
    customeText: {
        fontSize: 30,
        
    },
    
   productContainer: {
       flexDirection: 'column',
       justifyContent: 'center',
       height: 30,
       alignItems: 'center',
       marginTop: 10
   }

})

export default ProductListScreen