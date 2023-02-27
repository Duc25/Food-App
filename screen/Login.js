import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native'
import { Icon } from 'react-native-elements'

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState()

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'blue',
            position: 'relative',
        }}>
            <View style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>LOGO</Text>
            </View>
            <View style={{
                flex: 0.8,
                marginHorizontal: 10,
            }}>

                <View style={{
                    margin: 10,
                }}>
                    <Text style={{
                        fontSize: 26,
                        color: 'white',
                    }}>Sign In</Text>
                </View>
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center',
                }}>
                    <TextInput style={{
                        width: 350,
                        height: 40,
                        backgroundColor: 'white',
                        borderColor: 'black',

                    }}

                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder='Email'
                    />
                </View>
                <View style={{
                    marginBottom: 0,
                    alignItems: 'center',
                }}>
                    <TextInput style={{
                        width: 350,
                        height: 40,
                        backgroundColor: 'white',
                        borderColor: 'black',

                    }}
                        secureTextEntry={true}
                        onChangeText={(e) => setPassword(e)}
                        value={password}
                        placeholder='Password'
                    />
                    
                </View>


            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <TouchableOpacity style={{
                    width: 150,
                    height: 50,
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                    disabled={email === '' || password === ''}

                    onPress={() => {

                        return email == 'admin@vatek.asia' && password == '123456' ? alert('Login Successful') : alert('Errol')
                    }}
                >
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                    }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default login;