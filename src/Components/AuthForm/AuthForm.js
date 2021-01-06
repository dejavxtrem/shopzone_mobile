import React , { useState } from 'react';
import { Text, Input, Button} from 'react-native-elements'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons , FontAwesome} from '@expo/vector-icons'; 


const AuthForm = ({headerText,  errorMessage, onSubmit, submitButtonText}) => {

     const [email, setEmail ] = useState('')
     const [password, setPassword ] = useState('')

    return (
        <>
           <Text 
           h3Style={styles.h3Container}
           h3> 
            {headerText}
            
        </Text>
      
        <Input label="Email" value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="email@address.com"
        leftIcon={<MaterialIcons name="email" size={30} color="black" />}
        inputStyle={{marginLeft: 5}}
        containerStyle={{borderRadius: 20, margin: 10}}
        labelStyle={{fontWeight: "bold", fontSize: 20, marginLeft: 5, color: 'black'}}
        />
       

        <Input label ="Password" value={password} 
        onChangeText={newPassword => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        leftIcon={<FontAwesome name="lock" size={30} color="black" />}
        placeholder="Password"
        inputStyle={{marginLeft: 5}}
        containerStyle={{borderRadius: 20, margin: 10}}
        labelStyle={{fontWeight: "bold", fontSize: 20, marginLeft: 5, color: 'black'}}
        />
        {errorMessage ? (<Text style={styles.errorMessage}>{errorMessage}</Text>) : null}
  
        <Button title ="Login"
         buttonStyle={styles.buttonStyle}
         titleStyle={{fontSize: 25, fontFamily:'NunitoSans_Bold' }}
        //onPress={ () => onSubmit({email,password})}
        />        
     
        </>
    )
}


const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15
    },
    h3Container: {
        marginBottom: 100,
        fontSize: 40,
        fontFamily:'NunitoSans_Bold'
    },
    buttonStyle: {
        height: 50,
        width: 300,
        marginTop: 30,
        fontFamily: 'NunitoSans_Regular',
        fontSize: 40,
        borderRadius: 25
    }
})

export default AuthForm
