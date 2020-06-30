import React, { PureComponent } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';

import Swiper from "react-native-web-swiper";

export const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        
      height:width*.11,
      width:width*.30,
      justifyContent:'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20, 
     

        
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "#dcdcdc"
    },
    slide2: {
        backgroundColor: "#dcdcdc"
    },
    slide3: {
        backgroundColor: "#dcdcdc"
    },
    container1: {
        height:width*.08,
        width:width*-.30,
        backgroundColor: '#a1a9bc',
        justifyContent: 'center',
        alignItems:'center',
        borderTopLeftRadius: width*.008,
        borderTopRightRadius: width*.008,
        borderBottomLeftRadius:  width*.008,
        borderBottomRightRadius:  width*.008
      },
      textAdvertisement:
  {
      color:'#354e76',
      fontSize:width*.01
  },
});

export default class Screen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Swiper
               
                 from={1} 
                 loop 
                 timeout={3} 
                 springConfig={{ speed: 8 }} 
                //  minDistanceForAction={0.15}
                >
               
                        

               
            <View style={styles.container1}>
                        <Text style={styles.textAdvertisement}>Advertisement</Text>

            </View>
            <View style={styles.container1}>
                        <Text style={styles.textAdvertisement}>Advertisement</Text>

            </View>
                </Swiper>
            </View>
        )
    }
}