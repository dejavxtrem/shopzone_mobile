import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  AuthForm from '../../Components/AuthForm/AuthForm'


const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
            headerText="Sign In"
            //submitButtonText={Login}
            
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
        
    }
})

export default LoginScreen
