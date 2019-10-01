import React,{Component} from 'react';
import Swiper from 'react-native-swiper';
import {View, Image} from 'react-native';

class Slider extends Component {

    render(){
      return(
        
        <Swiper loop={true} showsPagination={false}>
            
          <View style={{flex:1, marginBottom:20}}>
            <Image source={require('./assets/img/img1.png')} style={{ flex:1, alignSelf:'center', width:'90%', height:'100%', borderRadius:17}} />
          </View>
          <View style={{flex:1, marginBottom:20}}>
            <Image source={require('./assets/img/img2.png')} style={{ flex:1, alignSelf:'center', width:'90%', height:'100%', borderRadius:17}} />
          </View>
           
        </Swiper>


       
        
      );
    }
  }

  export default Slider