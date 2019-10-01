import React,{Component} from 'react';
import Swiper from 'react-native-swiper';
import {View, Text, Image, ImageBackground} from 'react-native';
import Toast from 'react-native-root-toast';
class Splash extends Component {
  static navigationOptions = {
    header:null,
  };
    render(){
      
          const {navigate} = this.props.navigation;
      return(
        <Swiper loop={false} index={0} onIndexChanged={(index)=>
        {if(index == 2){Toast.show('Please wait ..', {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          shadow: false,
          animation: true,
          hideOnPress: true,
          delay: 0})};
          setTimeout(function(){
            if(index == 2){navigate('LoginScreen');}
        }, 4000);}}>
          <View style={{flex: 1, flexDirection: 'column' ,alignContent:"center"}}>
            <ImageBackground source={require('./assets/img/1.jpg')} style={{ flex:1}} />
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <ImageBackground source={require('./assets/img/2.jpg')} style={{ flex:1}} />
          </View>
          <View style={{flex: 1, flexDirection: 'column' }} >
            <ImageBackground source={require('./assets/img/3.jpg')} style={{ flex:1}} />
          </View>
          
        </Swiper>

       
        
      );
    }
  }

  export default Splash