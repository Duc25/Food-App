import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const forGot = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Forgot')
            }}>
                <Text>Forgot</Text>
            </TouchableOpacity>
            <Text>hello</Text>
        </View>
)}
const styles = StyleSheet.create {
    bottom:{
        
    }

}
export default forGot
