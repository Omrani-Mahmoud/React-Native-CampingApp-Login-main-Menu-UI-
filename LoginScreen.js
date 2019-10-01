import React,{useState} from 'react';
import {Button, TextInput, View, StyleSheet, Text, Alert, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { Loged, LogedOut, AddUserNameInput, AddUserPassInput } from './Actions';



function LoginScreen ({ navigation }){
    /*let navigationOptions ={
        title: 'login page',
        headerLeft:null
        };*/
        //const [typed,setTyped]=useState(!!isLoged?{userName:'',pass:''}:this.initialState);
        const isLoged = useSelector(state=> state.IsLog);   
        const cordsVerf={username:"mah",
                        pass:"mah"}  
        const dispatche = useDispatch(); 
        
        clearInput = () => {
            this.textInputUserRef.clear();
            this.textInputPassRef.clear();
          } 

       
        verifCords=()=>{
            if(cordsVerf.username == isLoged.userName && cordsVerf.pass == isLoged.pass){
                dispatche(Loged());
                //console.log(isLoged);
               navigation.navigate('Home');
            }
            else{
                Alert.alert('Compte introuvable','verifier vos coordonnees');
                clearInput();
            }
        }



        //  check status prob w shouf default value belek ta5tef !!
       if(isLoged.clear==true )
            clearInput();
        return(
           <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
            <View style={{flexDirection:'column', justifyContent:'center'}}>
                    <Text style={style.txt}>User name :</Text>
                    <TextInput style={{height: 40}}
                        placeholder="Type user name!"
                        onChangeText={(value) =>dispatche(AddUserNameInput(value))}
                        ref={ref => this.textInputUserRef = ref}
                        defaultValue=''
                        >
                    </TextInput>
                    <Image source={require('./assets/img/blueLine.png')} style={{flexDirection:'column', justifyContent:'center', marginTop:-10, marginBottom:10}}/>
                    <Text style={style.txt}>Mot de pass :</Text>
                    <TextInput style={{height: 40}}
                        placeholder="Type password"
                        onChangeText={(value) =>dispatche(AddUserPassInput(value))}
                        secureTextEntry={true}
                        defaultValue=''
                        ref={ref => this.textInputPassRef = ref}
                        >
                    </TextInput>
                    <Image source={require('./assets/img/blueLine.png')} style={{flexDirection:'column', justifyContent:'center', marginTop:-10, marginBottom:10}}/>

                    <View style={{flexDirection:'column',marginTop:30, alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => {verifCords()}}
                    //() =>dispatche(Loged(cordsVerf))}
                    >
                        <Image  style={{width: 150, height: 35, borderRadius:10}} source={require('./assets/img/LogBtn.png')} />
                    </TouchableOpacity>
                    </View>
            </View>
            </View>

        )
    }
    //else{
      //  return null}}
const style = StyleSheet.create({
    txt :{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },



})

export default LoginScreen

//<Button title={"Log in "} onPress={()=>{verifCords()}}></Button>

/* {logedin: this.props.navigation.getParam('params').logedin,
                        username: this.props.navigation.getParam('params').username,
                        pass:this.props.navigation.getParam('params').pass} */