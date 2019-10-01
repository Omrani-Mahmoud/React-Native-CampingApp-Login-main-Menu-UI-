import React,{Component} from 'react';
import {Button, Text, View} from 'react-native';
import  {useSelector, useDispatch} from 'react-redux';
import {LogedOut} from './Actions'


function Profile({navigation}){   
  const isLoged = useSelector(state=> state.IsLog);
  const Dispatche = useDispatch();
  console.log(isLoged);
  return(
            <View style={{flex:1}}>
                <View style={{flex:1, flexDirection:'column',  alignItems:'center', justifyContent:'center'}}>
                    <View>
                        <Text>nom de compte loged in : {isLoged.userName}</Text>
                    </View>
                </View>
                <View style={{alignSelf:"flex-end"}}>
                    <Button
                    title="Logout"
                    onPress={() => {Dispatche(LogedOut()),navigation.navigate('LoginScreen')}}
                    /> 
                </View>
                
            </View>
        )
    }


export default Profile;