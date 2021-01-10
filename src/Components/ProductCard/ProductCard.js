import React, {useState} from 'react'
import { View, Text, Image , StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';

import products from '../../Screens/HomeScreen/Product'

 const sampleProduct = {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  }






const ProductCard = (props) => {

   const { productImage, productName, productDetails, productPrice} = props

    return (
       
            <View style={styles.cardContainer}>
                
                <Text style={{marginBottom: 10, fontFamily:'NunitoSans_Bold', marginTop: 10}}> {productName}</Text>
                <View>
                    <Image
                      style={styles.imageStyle}
                      source={{uri: productImage}}
                    />
                </View>
                   
                   <View style={styles.cardDescrip}>
                   <Text style={{margin: 10, fontFamily:'NunitoSans_Regular'}}>
                       {productDetails}
                   </Text>
                    
                    <Text
                        style={{marginTop: 10, fontFamily:'NunitoSans_Bold', fontSize: 20}}
                    >${productPrice}</Text>

                    
                   </View>
      
                     <View>
                        <Button
                          title='Add to Cart'
                          buttonStyle={styles.buttonStyle}
                          titleStyle={{fontSize: 20, fontFamily:'NunitoSans_Bold' }}
                        />
                     </View>
              
                
                   
            </View>
      
    )
}


const styles = StyleSheet.create({
    cardContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,   
        borderWidth: 1,
        borderColor: "#c7c7c7",
        marginBottom: 20,
        borderRadius:  20

    },
    imageStyle: {
        height: 200,
        width: 400,
        marginLeft: 10,
        marginRight: 10,
        
       
    },
    cardDescrip: {
        justifyContent: 'center',
        alignItems: 'center',        
    },
    buttonStyle: {
        height: 50,
        width: 200,
        marginTop: 30,
        marginBottom: 15,
        fontFamily: 'NunitoSans_Regular',
        fontSize: 40,
        borderRadius: 20,
        backgroundColor: '#070707',
        borderColor: '#010101'
       
    }
})



export default ProductCard
