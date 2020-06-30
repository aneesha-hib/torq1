import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Platform,ScrollView } from 'react-native';
import Header from './Header.js';
import Footer from './Footer.js';
import Advertisement from './Advertisement.js';

export default class Login extends Component
{
  constructor()
  {
    super();

    this.state = { hidePassword: true }
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  render()
  {
  return (
    <ScrollView>

 
    <View style={{backgroundColor:'#fff'}}>

   <Header navigation={this.props.navigation}/>
    <View style={{alignItems:'center',backgroundColor:'#fff'}}>
    <View style={styles.container}>
    <br></br><br></br>
    <View style={styles.fixToText}>
      
            <Image
                style={styles.imageiconMain}
                source={require('./assets/logo1.png')}>
            </Image>
     
    </View>
    
    
    <br></br><br></br><br></br><br></br>
    <View style={{flexDirection:'row'}}>
    <View style={{marginLeft:'0%',flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.signText}>SIGN IN </Text>
          <Text style={styles.paraText}>Enjoy with our services now  </Text><br></br>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.mobileText}>Mobile  </Text>
            <TextInput style = {styles. codeinputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
              /><View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'18%'}}>
                 <Text style={{}}>  Code  </Text>

              </View>
             
              <TextInput style = {styles.inputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
               /><View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'45%'}}>
               <Text style={{}}>  Your Mobile Number  </Text>

            </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.passText}>  Password  </Text>
          <View style = { styles.contai }>
        <View style = { styles.textBoxBtnHolder }>
          <br></br>
          <TextInput underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.textBox }/>
          <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'15%'}}>
               <Text style={{}}>  Password  </Text>

            </View>
           
          <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
            <Image source = { ( this.state.hidePassword ) ? require('./assets/closedeye.png') : require('./assets/openeye.png') } style = { styles.btnImage } />
            
          </TouchableOpacity>
        </View>
         </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:'5%',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>
        Forgot your Password???</Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:'5%',flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style = {styles.buttonContainer}>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
               
            </TouchableOpacity>
           
           </View> 
           </View>
           </View>
      <Image 
         
         style={styles.connecticon2Main}
         source={require('./assets/line.png')}>
     </Image>



     <View style={{marginLeft:'0%',flex:1,justifyContent:'center',alignItems:'center'}}>
     <Text style={styles.signText}>SIGNUP</Text>
     <Text style={styles.paraText}>Don't have an account?Sign Up</Text>
     <br></br>
     <View style={{flexDirection:'row'}}>
       <Text style={styles.nameText}>Name  </Text>
     <TextInput style = {styles. nameinputs}
               underlineColorAndroid = "transparent"
               
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
           />
           <View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'15%'}}>
                 <Text style={{}}>  First Name  </Text>

              </View>
            <TextInput style = {styles. name2inputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
           />
           <View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'60%'}}>
                 <Text style={{}}>  Last Name  </Text>

              </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.nameText}>Mobile  </Text>
          <TextInput style = {styles. codeinputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
           />
            <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'15%'}}>
               <Text style={{}}>  Code  </Text>
            </View>
            <TextInput style = {styles.inputs2}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
               />
                <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'42%'}}>
               <Text style={{}}>  Your Mobile Number  </Text>
            </View>
             
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.nameText}>Password  </Text>
          <TextInput underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.pnameinputs }/>
          <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'15%'}}>
               <Text style={{}}>  Password  </Text>
            </View>
          <TextInput underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.pname2inputs }/>
          <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'60%'}}>
               <Text style={{}}>  Confirm Password  </Text>
            </View>
          <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn2 } onPress = { this.managePasswordVisibility }><br></br>
            <Image source = { ( this.state.hidePassword ) ? require('./assets/closedeye.png') : require('./assets/openeye.png') } style = { styles.btnImage } />
            
          </TouchableOpacity>
          </View>
          <br></br>
          <View style={{flexDirection:'row'}}>
          
            <TouchableOpacity
               style = {styles.registerButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               
               <Text style = {styles.submitButtonText}> Register </Text>
               
            </TouchableOpacity>
           
      
          
             
          </View>
     </View>
     
  
      
      </View>
      <br></br><br></br><br></br><br></br>
      <View style = {styles.Vertical2}>
           
           
   </View>
   <View style = {styles.Vertical3}>
           
    
 </View>
      <View style = {styles.Vertical}>
           
             </View>
   </View>
   
    </View><br></br><br></br>
    <Advertisement />
<Footer />
    </View>
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '25px',
    borderWidth: '8px',
    width:'80%',
    borderColor:'#8d1b3e',
    borderStyle:"medium",
    fontStyle:"italic",
  },
  headingText:{
    color :'#354e76',
    fontStyle:'bold',
    fontSize:50,
    alignContent:'left',
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imageiconMain:{
    width: 290,
    height: 100,
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
  },
  connecticonMain:{
    flex:1,
    resizeMode:'center',
    width: 290,
    height: 60,
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
  },
  connecticon2Main:{
    width: 5,
    height: 300,
    marginLeft:'0%',
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between ',
    alignItems: 'center',
    justifyContent: 'center',
    color :'#354e76',
    
  },
  fixToTextbox:{
    flexDirection:'row',
    

  },

  paraText:{
    color :'#354e76',
    fontStyle:"Times new roman",
    justifyContent: 'space-between ',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:17,
 
    
    
  },
  mobileText:{
    color :'#354e76',
    fontStyle:"Times new roman",
   marginLeft:30,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:15,
    marginTop:'4%',
    
    
  },
  nameText:{
    color :'#354e76',
    fontStyle:"Times new roman",
   marginLeft:0,
  
    fontSize:15,
    marginTop:'4%',
    
    
  },
  passText:{
    color :'#354e76',
    fontStyle:"Times new roman",
   

    fontSize:15,
    marginTop:'4%',
    
    
  },
  signText:{
    flexDirection:'column',
    alignItems:'center',
    fontStyle:'bold',
    fontSize:30,
    color :'#8d1b3e',
    justifyContent:'center'
    
  },
  lineVertical:{
    border:'left',
    borderColor:'solid green',
    height:'500px',

  },
  Vertical:{
    color:'#8d1b3e',
  
    width:'100%',
    border:'center',
    borderColor:'#8d1b3e',
    flex: 1,
    backgroundColor: '#8d1b3e',
    // paddingLeft:1360,
    marginLeft:0,
    borderWidth: '6px',
    borderStyle:"medium",
    fontStyle:"italic",

  },
  Vertical2:{
    color:'#8d1b3e',

    width:'100%', width:'100%',
    border:'center',
    borderColor:'#354e76',
    flex: 1,
    backgroundColor: '#354e76',
    // paddingLeft:1366,
    marginLeft:0,
    borderWidth: '4px',
    borderStyle:"medium",
    fontStyle:"italic",

  },
  Vertical3:{
    color:'#8d1b3e',
   
    width:'100%',
    border:'center',
    borderColor:'#fdba45',
    flex: 1,
    backgroundColor: '#fdba45',
    // paddingLeft:1364,
    marginLeft:0,
    borderWidth: '5px',
    borderStyle:"medium",
    fontStyle:"italic",

  },
  containers: {
  
   paddingLeft:10,
    
 },
 inputs: {
    margin: 15,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    width:380,
    // background: '#600',
    padding: '20px', 
    marginLeft:1,
    height: '15px',
    paddingLeft:10,
 
 },
 inputs2: {
  margin: 15,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,
  width:360,
 
  // background: '#600',
  padding: '20px', 
  marginLeft:1,
  paddingLeft:10,
  height: '15px',

},
 codeinputs: {
  margin: 15,
  paddingLeft:10,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,
  flex:1,
  width:150,

  resizeMode:'center',

},
nameinputs: {
  margin: 15,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,

  width:250,
  paddingLeft:10,


},
name2inputs: {
  margin: 15,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,
  marginLeft:10,
  width:250,
  paddingLeft:10,
 

},



pnameinputs: {
  margin: 15,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,

  width:240,
  paddingLeft:10,


},
pname2inputs: {
  margin: 15,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,
  marginLeft:10,
  width:270,
  paddingLeft:10,
 

},
name3inputs: {
  margin: 15,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,

  width:290,
  paddingLeft:10,
  borderRadius: '18px',

},
signupCode:{
  margin:15,
  height:40,
  borderColor:'#000',
  borderWidth:1,
 
  width:150,
  paddingLeft:10,
  borderRadius:'18px',

},
passwordinputs:{
  margin:15,
  height:40,
  borderColor:'#000',
  borderWidth:1,
  width:580,
  paddingLeft:10,
  borderRadius: '18px',
},
 submitButton: {
    backgroundColor: '#8d1b3e',
    padding: 10,
 
    width:100,
    paddingLeft:25,
    height: 40,
 },
 registerButton: {
  backgroundColor: '#8d1b3e',
  padding: 10,
 
  width:150,
  paddingLeft:25,
  
 alignItems:'center'
},
 submitButtonText:{
    color: 'white'
 },
 buttonContainer: {

   
 },
 contai:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  textBox:
  {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    width:550,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: '#000',

  },

  visibilityBtn:
  {
    position: 'absolute',
    left: 550,
    height: 40,
    width: 35,
    marginTop:10
   
  },
  visibilityBtn2:
  {
    position: 'absolute',
    left: 620,
    height: 40,
    width: 35,
    padding: 5,
    marginLeft:22
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '120%'
  }
  
});