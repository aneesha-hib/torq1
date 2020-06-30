import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
export default function Mainpage() {
  return (
    <View style={styles.container1}>
   {/*  <Text style={styles.subHeading}>Vehicles</Text> */}  
   
          <View style={styles.container}>
              <View style={styles.vehiclecontainer}>
                     <View style={styles.vehiclecontainerItem}>
                          <Image style={styles.imageIcon} source={require('./assets/Car.png')} 
                          onPress={() => this.props.navigation.navigate( 'login' )}
          />
                          <Text style={styles.vehicletext} >Car</Text>
                     </View>
                      <View style={styles.vehiclecontainerItem}>
                          <Image style={styles.imageIcon} source={require('./assets/SUV.png')}/>
                          <Text style={styles.vehicletext}>SUV</Text>

                      </View>
                      <View style={styles.vehiclecontainerItem}>
                          <Image style={styles.imageIcon} source={require('./assets/Pickup.png')}/>
                          <Text style={styles.vehicletext}>Pick Up</Text>

                      </View>
                    
                      <View style={styles.vehiclecontainerItem}>
                          <Image style={styles.imageIcon} source={require('./assets/Bus.png')}/>
                         <Text style={styles.vehicletext}>Bus</Text>

                       </View>
                       <View style={styles.vehiclecontainerItem}>
                       <Image style={styles.imageIcon} source={require('./assets/Van.png')}/>
                       <Text style={styles.vehicletext}>Van</Text>

                       </View>
                       <View style={styles.vehiclecontainerItem}>
                       <Image style={styles.imageIcon} source={require('./assets/Heavy-Equipment.png')}/>
                       <Text style={styles.vehicletext}>Heavy Equipment</Text>

                       </View>
                    
              </View>
             




              <View style={styles.vehiclecontainer}>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Bike.png')}  />
                <Text style={styles.vehicletext}>Bike</Text>


                </View>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Bicycle.png')}/>
                <Text style={styles.vehicletext}>Bicycle</Text>


                </View>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Classic.png')}/>
                <Text style={styles.vehicletext}>Classic</Text>


                </View>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Truck.png')}/>
                <Text style={styles.vehicletext}>Truck</Text>


                </View> 
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Boat.png')}/>
                <Text style={styles.vehicletext}>Boat</Text>


                </View>  
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/More.png')}/>
                <Text style={styles.vehicletext}>More</Text>


                </View>      
              </View>
              


          </View>
          <View style={{position: 'absolute', top: width*.0000000009, left: '28%', right: 0, bottom: width*.1, backgroundColor:'#fff',width:width*.06,height:width*.01,color:'#354e76',alignItems:'center'}}>
  <Text style={{fontSize:width*.01,color:'#354e76',paddingBottom:width*.1}}>Vehicles</Text>
</View>
          <br></br><br></br>
          <View style={styles.container}>

          <View style={styles.vehiclecontainer}>
            <View style={styles.vehiclecontainerItem}>
            <Image style={styles.imageIcon} source={require('./assets/Wash.png')}  />
            <Text style={styles.vehicletext}>Car Wash</Text>
            </View>
            <View style={styles.vehiclecontainerItem}>
            <Image style={styles.imageIcon} source={require('./assets/Rental.png')}/>
            <Text style={styles.vehicletext}>Rental</Text>
            </View>
            <View style={styles.vehiclecontainerItem}>
            <Image style={styles.imageIcon} source={require('./assets/Taxi.png')}/>
            <Text style={styles.vehicletext}>Taxi</Text>
            </View>
            <View style={styles.vehiclecontainerItem}>
            <Image style={styles.imageIcon} source={require('./assets/Garuage.png')}/>
            <Text style={styles.vehicletext}>Garage</Text>
            </View>
            <View style={styles.vehiclecontainerItem}>
            <Image style={styles.imageIcon} source={require('./assets/Insurance.png')}/>
            <Text style={styles.vehicletext}>Insurance</Text>
            </View>
            <View style={styles.vehiclecontainerItem}>
            <Image style={styles.imageIcon} source={require('./assets/Fahes.png')}/>
            <Text style={styles.vehicletext}>FAHES</Text>
            </View>      
            </View>
             
              <View style={styles.vehiclecontainer}>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Tyre.png')}  />
                <Text style={styles.vehicletext}>Tyre Shop</Text>

                </View>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/CarShowroom.png')}/>
                <Text style={styles.vehicletext}>Car Showroom</Text>

                </View>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Checking-Centre.png')}/>
                <Text style={styles.vehicletext}>Checking Centre</Text>

                </View>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Gas.png')}/>
                <Text style={styles.vehicletext}>Gas</Text>

                </View>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/Towing.png')}/>
                <Text style={styles.vehicletext}>Towing</Text>

                </View>
                <View style={styles.vehiclecontainerItem}>
                <Image style={styles.imageIcon} source={require('./assets/More.png')}/>
                <Text style={styles.vehicletext}>More</Text>

                </View>  
                   
                    
                    
                    
                    
              </View>
              


          </View>
          <View style={{position: 'absolute', top:width *.2125, left: '27.5%', right: 0, bottom: 0, backgroundColor:'#fff',width:width*.06,height:width*.02,alignItems:'center'}}>
           <Text style={{fontSize:width*.01,color:'#354e76'}}>Directory</Text>
</View>
         

    </View>
    
  );
}
export const { width, height } = Dimensions.get('window');
export const { width1, height1 } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: { 
    padding:width*.001,
    borderWidth:width * .002,
    borderColor:'#354e76',
    borderStyle:'solid',
    backgroundColor: '#fff', 
    height:width * .20,
    width:width*.5,
    borderTopLeftRadius: width*.015,
    borderTopRightRadius: width*.015,
    borderBottomLeftRadius: width*.015,
    borderBottomRightRadius: width*.015,
    flex:1
  },
  container1: {
   
    backgroundColor: '#fff', 
    
    alignItems:'center',
    resizeMode:'center'
    
  },
  vehiclecontainer:{
    flex:1,
    padding:width*.01,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    width:width1*.4,
    height:widthPercentageToDP('40%'),
    resizeMode:'center',
   
    
  },
  vehiclecontainerItem:{
    alignItems:'center',
    flex:1
  },
  imageIcon:{
    flex:1,
    height:width*.045,
    width:width*.045,
    
  },
  imageIcon1:{
    flex:1,
    height:heightPercentageToDP('10.5%'),
    width:widthPercentageToDP('8.5%'),
    resizeMode:'center',
  },
  vehicletext:
  {
    flex:1,
    fontSize:width*.006,
    paddingBottom:'10px',
    color:'#354e76',
    marginLeft:'6%',
    resizeMode:'center',
    height:'auto'
    
  },
  subHeading:
  {
     textAlign:'left',
     color:'#354e76',
     fontSize:22
  },
});