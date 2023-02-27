import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const forGot = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('ForGot')
            }}>
                <Text>Forgot</Text>
            </TouchableOpacity>
            <Text>hello</Text>
        </View>
)}
export default forGot
