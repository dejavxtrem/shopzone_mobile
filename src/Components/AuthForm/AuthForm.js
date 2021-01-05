import React , { useState } from 'react';
import { Text, Input, Button} from 'react-native-elements'
import { StyleSheet, TouchableOpacity } from 'react-native';


const AuthForm = ({headerText,  errorMessage, onSubmit, submitButtonText}) => {

     const [email, setEmail ] = useState('')
     const [password, setPassword ] = useState('')

    return (
        <>
       
         
           <Text h3> 
            {headerText}
        </Text>
      
        <Input label="Email" value={email}
        //onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
        />
       

        <Input label ="Password" value={password} 
        //onChangeText={newPassword => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        />
        {errorMessage ? (<Text style={styles.errorMessage}>{errorMessage}</Text>) : null}
  
        <Button title ={submitButtonText}
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
    }
})

export default AuthForm
