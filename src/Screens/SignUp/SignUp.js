import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import { MaterialIcons , FontAwesome, Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <View style={styles.container}>
          <Text 
           h3Style={styles.h3Container}
           h3> 
            Create new account
        </Text>
      
        <Input label="Name" value={name}
        onChangeText={newName => setName(newName)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        leftIcon={<Feather name="user" size={30} color="black" />}
        inputStyle={{marginLeft: 5}}
        containerStyle={{borderRadius: 20, margin: 10}}
        labelStyle={{fontWeight: "bold", fontSize: 20, marginLeft: 5, color: 'black'}}
        />
       

        <Input label ="Email" value={email} 
        onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        leftIcon={<MaterialIcons name="email" size={30} color="black" />}
        placeholder="Email"
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
        <Input label ="Confirm Password" value={confirmPassword} 
        onChangeText={newConfirmPassword => setConfirmPassword(newConfirmPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        leftIcon={<FontAwesome name="lock" size={30} color="black" />}
        placeholder="Confirm Passoword"
        inputStyle={{marginLeft: 5}}
        containerStyle={{borderRadius: 20, margin: 10}}
        labelStyle={{fontWeight: "bold", fontSize: 20, marginLeft: 5, color: 'black'}}
        />

        {/* {errorMessage ? (<Text style={styles.errorMessage}>{errorMessage}</Text>) : null} */}
  
        <Button title ="Sign-Up"
         buttonStyle={styles.buttonStyle}
         titleStyle={{fontSize: 25, fontFamily:'NunitoSans_Bold' }}
        //onPress={ () => onSubmit({email,password})}
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
        marginTop: 100
        
    },
    h3Container: {
        marginBottom: 50,
        fontSize: 40,
        fontFamily:'NunitoSans_Bold',

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

export default SignUp