import { StatusBar } from "expo-status-bar"; 
import React, {useState} from 'react'
import { View, StyleSheet, Dimensions, Text, ScrollView, } from 'react-native'
import { Header } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import  ProductCard from '../../Components/ProductCard/ProductCard'
import products from "./Product";
const { width, height } = Dimensions.get("window");
import { MaterialCommunityIcons } from '@expo/vector-icons';




const HomeScreen = () => {
    
    return (
        <View style={styles.homeContainer} >
            <Header
            backgroundColor= "#55595c"
             leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'ShopZone', style: { color: 'white', fontSize: 20, fontFamily: 'NunitoSans_Bold' }, }}
            rightComponent={<MaterialCommunityIcons name="account" size={30} color="white" />}
            containerStyle={styles.headerStyle}
            />

            <View>
                <SearchBar
                 containerStyle={{backgroundColor: "#55595c"}}
                 placeholder="Search Item"
                 inputContainerStyle={{backgroundColor: 'white'}}
                />
            </View>
            <ScrollView>
                {
                    products.map((product, i) => {
                        return  (
                            <View key={i}>
                                <ProductCard
                               productName={product.name}
                               productImage={product.image}
                               productDetails={product.description}
                               productPrice={product.price}
                            />
                            </View>
                            
                        )
                    })
                }
                           
            </ScrollView>
         
            

        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    headerStyle : {
        height: 120
    },
    searchContainer : {

    },
    headerColor: {
        color: 'grey'
    }
})

export default HomeScreen
