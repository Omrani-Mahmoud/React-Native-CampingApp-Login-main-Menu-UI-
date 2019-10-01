import React,{Component, useState} from 'react';
import {StatusBar, View, ImageBackground,Text, StyleSheet,TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { LogedOut } from './Actions';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Profile from './Profile'
import { Ionicons } from '@expo/vector-icons'
import Slider from './Slider';
import Loisir from './Loisir';
import Geolocation from 'react-native-geolocation-service';

export default createMaterialBottomTabNavigator({
  Home: { screen:HomeScreen,
          navigationOptions: {
            tabBarLabel:'Home',
            tabBarIcon:(<Ionicons name="md-home" color="#48c3e7" size={25} />)
          }
   },


  Profile: { screen:Profile,
            navigationOptions: {
              tabBarLabel:'Profile',  
              tabBarIcon:(<Ionicons name="ios-contact" color="#48c3e7" size={25} />)
            }
           },
           //<Image source={require('./assets/img/profile.png')} fadeDuration={0} style={{marginVertical:30}} />)
},


{
  initialRouteName: 'Home',
  activeColor: 'black',
  inactiveColor: '#48c3e7',
  barStyle: { backgroundColor:'white',
              shadowOpacity:7,
            },
  shifting:true
});

    function HomeScreen ({navigation}){
      const [temperature, setTemperature] = useState('wait a sec ..');
      const[zone, SetZone]= useState('');
      const IconTemp= <Ionicons name={'ios-thermometer'||'md-thermometer'}  size={25} />;
      const IconPlace= <Ionicons name={'ios-pin'||'md-pin'} color='white' size={20} />
        const isLoged = useSelector(state=> state.IsLog);   
        //const {navigate} = this.props.navigation;
        const Dispatche = useDispatch();
         Geolocation.getCurrentPosition(
              (position) => {
                position.coords.longitude
                  async function getTempuratureFromApi() {
                    try {
                      let response = await fetch(
                        'https://api.darksky.net/forecast/8efd03c298eef419ed94d171b38674fd/'+position.coords.latitude+','+position.coords.longitude
                      );
                      let responseJson = await response.json();
                      
                    setTemperature(Math.trunc((responseJson.currently.temperature - 32)*(5/9))+'°');
                    SetZone(responseJson.timezone);
                      //
                    } catch (error) {
                      console.error(error);
                    }
                  }
                getTempuratureFromApi();   
              },
             (error) => {
                  // See error code charts below.
                  console.log(error.code, error.message);
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        return(
            <View style={{flex:1,flexDirection:"column"}}>
              <StatusBar hidden={true} />
              <View>
                <ImageBackground source={require('./assets/img/tent.png')}style={{flex:-3, width:'100%',height:190}}>
                  <Text style={style.ImgTextTemp}>{temperature}{temperature.length<4?IconTemp:''}</Text>
                  <Text style={style.ImgTextZone}>{zone==''?'':IconPlace}{' '+zone}</Text>
                </ImageBackground>
              </View>
             
              <View style={{flex:1,flexDirection: 'row',justifyContent:'space-between',marginTop:1}}>
                  <Text style={style.explore}>Explore</Text>
                  <TouchableOpacity style={{  marginTop: '7%',}} 
                    onPress={()=>console.log('see all clicked')}>
                    <Text style={style.seeAll}>See all</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1,  paddingBottom:-10}}>
              <Loisir />
              </View>

              <View style={{flex:1,flexDirection: 'row',justifyContent: 'space-between',}}>
                  <Text style={style.act}>Popular Activities</Text>
                  <TouchableOpacity style={{  marginTop: '9%',}} 
                    onPress={()=>console.log('see all clicked')}>
                    <Text style={style.seeAll}>See all</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:4}}>
                <Slider />
              </View>
            </View>
           
        )
    }
    const style = StyleSheet.create({
      explore :{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          marginLeft: '8%',
          marginTop: '2%',
      },

      seeAll :{
        color: '#48c3e7',
          fontSize: 16,
          marginRight: '5%',
      },
      act :{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: '8%',
        marginTop: '4%',
    },
    ImgTextTemp:{
        position: 'absolute',
        bottom: 18,
        left: 32,
        color: 'white',
       // fontWeight: 'bold',
        fontSize:17,

    },
    ImgTextZone:{
      position: 'absolute',
      bottom: 18,
      right: 7,
      color: 'white',
      //fontWeight: 'bold',
      fontSize:13,

  },
  })

  /* <Button
                title="Go to profile"
                onPress={() => navigation.navigate('Profile')}
              />
              <Button
              title="Go Back"
              onPress={() => {Dispatche(LogedOut()),navigation.navigate('LoginScreen')}}
            /> */