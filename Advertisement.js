import React ,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView ,Image,Dimensions,Platform} from 'react-native';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/_carousel.min.css";
import Screen from './Screen.js';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { render } from 'react-dom';




export default function Advertisement()  {
    
  return (
    <View style={styles.container}><br></br>
 
            {/** Advertisement heading  */}
            <Screen  />
           <br></br>
          

            {/**Scroll View */}
            {/**Featured Ad... */}
           <br></br>
         
           <CorouselView1 />
           <CorouselView2 />    
           <CorouselView3 /> 

    </View>
  );
}


function CorouselView1()
{
    return(
        
        <View style={styles.feturedAddContainer}>
                     <Text style={styles.subHeading1}>Featured Ad.</Text><br></br> 
                
                



              
               
                 <Carousel  > 
                    {/**One slide  */}
                <View style={styles.featuredAdContainerItems}>
                     {/**one item */}
                     <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                    {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}

                </View>
                {/**end of one slide  */}

                     
                            
                            
                   

                    <View style={styles.featuredAdContainerItems}>

                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                    </View>

                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                    </View>

                    </View>

                    

                    


                    </Carousel>
              
               




            </View>
    );
}
function CorouselView2()
{
    return(
        <View style={styles.feturedAddContainer}>

                <Text style={styles.subHeading1}>New Classified</Text><br></br>
                



                <ScrollView>
               
                 <Carousel  > 
                    {/**One slide  */}
                <View style={styles.featuredAdContainerItems}>
                    {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}

                </View>
                {/**end of one slide  */}

                     
                            
                            
                   

                    <View style={styles.featuredAdContainerItems}>

                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                    </View>

                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                    </View>

                    </View>

                    

                    


                    </Carousel>
              
                </ScrollView>




            </View>
    );
}
function CorouselView3()
{
    return(
        <View style={styles.feturedAddContainer}>

                <Text style={styles.subHeading1}>Recently Listed Ad.</Text><br></br>
                



                <ScrollView>
               
                 <Carousel  > 
                    {/**One slide  */}
                <View style={styles.featuredAdContainerItems}>
                    {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}
                      {/**one item */}
                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     {/**end of one item */}

                </View>
                {/**end of one slide  */}

                     
                            
                            
                   

                    <View style={styles.featuredAdContainerItems}>

                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                    </View>

                    <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                    </View>

                    </View>

                    

                    


                    </Carousel>
              
                </ScrollView>




            </View>
    );
}

export const {width,height}= Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height:'auto',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
  container1: {
    height:100,
    width:widthPercentageToDP('100%'),
    backgroundColor: '#a1a9bc',
    justifyContent: 'center',
    alignItems:'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  textAdvertisement:
  {
      color:'#354e76',
      fontSize:heightPercentageToDP('5%')
  },
  feturedAddContainer:
  {
     
     height:'auto',
     width:width*.8, 
     padding:5
  },
  featuredAdContainerItems:
  {
      flexDirection:'row',
      width:width*.8,
      height:'auto',
    
  },
  featuredAdContainerIndividual:
  {
      height:'auto',
      width:'auto',
      marginLeft:5
  },
  adImage:
  {
      width:width*.195,
      height:width*.121,
      borderTopLeftRadius: width*.0085,
      borderTopRightRadius:  width*.0085,
      borderBottomLeftRadius:  width*.0085,
      borderBottomRightRadius:  width*.0085
  },
  addDetails:
  {
    width:width*.195,
    height:'auto',
    backgroundColor:'#e4e6ed',
    borderTopLeftRadius:  width*.0085,
    borderTopRightRadius:  width*.0085,
    borderBottomLeftRadius:  width*.0085,
    borderBottomRightRadius:  width*.0085,
    padding:2
  },
  vehicleName:{
      color:'#354e76',
      fontSize:width*.009,
      marginBottom:'2%'

  },
  iconImage:
  {
      height:width*.015,
      width:width*.015,
      marginRight:'2%'
  },
  featuredAdDetails1:
  {
    height:width*.02,
    width:'100%' ,
    alignItems:'left',
    flexDirection:'row',
    
  },
  featuredAdDetails2:
  {
    fontSize:10,
    color:'#354e76',
    marginTop:15,
    marginRight:'2%'
    
  },
  subHeading1:
  {
      color:'#36486a',
      fontSize:width*.01,
      
  }
});


