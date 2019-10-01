import React, {Component} from 'react';
import {ScrollView, Image, Text, View, TouchableOpacity} from 'react-native';
export default class Loisir extends Component{
    render(){
        return(
        
        <View style={{flex:1, marginTop:-10}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            
                                <TouchableOpacity onPress={()=>console.log('haha')}>
                                    <Image source={require('./assets/img/element.png')} style={{width:80, height:70}}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>console.log('haha')}>
                                    <Image source={require('./assets/img/element.png')} style={{width:80, height:70}}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>console.log('haha')}>
                                    <Image source={require('./assets/img/element.png')} style={{width:80, height:70}}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>console.log('haha')}>
                                    <Image source={require('./assets/img/element.png')}style={{width:80, height:70}}></Image>
                                </TouchableOpacity>
            </ScrollView>
                    </View>
        )
    }
}

//style={{width:'80%',height:'80%'}}