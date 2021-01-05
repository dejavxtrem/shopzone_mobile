import React from 'react';
import { View, Text, StyleSheet , Dimensions,} from 'react-native';
import { SafeAreaView } from 'react-navigation'

const Header = () => {
    return (
       <View  style={styles.viewStyle}>
           <Text style={styles.textFormat}>
               ShopZone
           </Text>
       </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        height: 90,
        marginTop: 40,
        paddingTop: 15,
        position: 'relative',
        shadowColor: '#000'
    },
     textFormat: {
         fontSize: 40
     }
})

export default Header
