import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

    
    const SearchBar = () => {
        return (
            <View style={styles.backgroundStyle}>
            <Feather name="search"  style={styles.iconStyle} />
            <TextInput placeholder="Search" style={styles.inputStyle}
             autoCapitalize='none'
             autoCorrect={false}
             onEndEditing={() => onTermSubmit()}
            />
        </View>
        )
    }

    const styles = StyleSheet.create({
        backgroundStyle: {
            backgroundColor: '#F0EEEE',
            height: 50,
            borderRadius: 5,
            marginHorizontal: 10,
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 10
        },
        inputStyle: {
             fontSize: 18,
            flex: 1
        },
        iconStyle: {
            fontSize: 35,
            alignSelf: 'center',
            marginHorizontal: 15
        }
    })
    
    export default SearchBar
    