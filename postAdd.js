
import React, {  useMemo,Component,useState } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,Platform ,Picker ,Button,   ScrollView,TouchableWithoutFeedback,} from 'react-native';
import { RadioGroup } from 'react-native-btr';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Chevron } from 'react-native-shapes';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import Header from'./Header.js';
import Footer from'./Footer.js';
import { onChange } from 'react-native-reanimated';
// import RNPickerSelect, { defaultStyles } from './debug';
const lookup = {
  def: [{ id: '0', text: 'Choose your model' }],
  Abarth: [
    { id: '1', text: '124' },
    { id: '2', text: '595' },
    { id: '3', text: '5673' },
    { id: '4', text: '876' },
    { id: '5', text: '098' },
  ],
  Acura: [
    { id: 'a', text: 'a' },
    { id: 'b', text: 'b' },
    { id: 'c', text: 'c' },
    { id: 'd', text: 'd' },
    { id: 'e', text: 'e' },
  ],
};
const make = [
  {
    label: 'Abarth',
    value: 'Abarth',
  },
  {
    label: 'Acura',
    value: 'Acura',
  },
  {
    label: 'Alfa Romeo',
    value: 'Alfa Romeo',
  },
  {
    label: 'Aston Martin',
    value: 'Aston MartinAlfa Romeo',
  },
],
 model = [
  {
    label: '124',
    value: '124',
  },
  {
    label: '595',
    value: '595',
  },
  {
    label: '695',
    value: '695',
  },
],
 year = [
  {
    label: '2000',
    value: '2000',
  },
  {
    label: 'TLX',
    value: 'TLX',
  },
  {
    label: '9',
    value: '9',
  },
],
 city = [
  {
    label: 'AI Khor',
    value: 'AI Khor',
  },
  {
    label: 'AI Rayyan',
    value: 'AI Rayyan',
  },
  {
    label: 'AI Shahania',
    value: 'AI Shahania',
  },
  {
    label: 'AI Shamal',
    value: 'AI  Shamal',
  },
  {
    label: 'AI Wakra',
    value: 'AI Wakra',
  },
  {
    label: 'Doha',
    value: 'Doha',
  },
  {
    label: 'Dukhan',
    value: 'Dukhan',
  },
  {
    label: 'Lusail',
    value: 'Lusail',
  },
  {
    label: 'Mesaieed',
    value: 'Mesaieed',
  },
  {
    label: 'Umsalal',
    value: 'Umsalal',
  },
];

function Example(){
  const [dataValue, setDataValue] = useState('def');
  const options = useMemo(() => lookup[dataValue], [dataValue]);
  
  const onChange = ({ target: { value } }) => {
    setDataValue(value);
  };
}

export default class PostAdd extends Component {
 
  onChange = ()=>({ target: { value } }) => {
    setDataValue(value);
  };  
  
  
  constructor(props) {
    super(props);
   
    
   
    this.inputRefs = {
      firstTextInput: null,
      favSport0: null,
      favSport1: null,
      lastTextInput: null,
      favSport5: null,
    };

    this.state = {
      dataValue: 'def',
     
      numbers: [
        {
          label: '1',
          value: 1,
          color: 'orange',
        },
        {
          label: '2',
          value: 2,
          color: 'green',
        },
      ],
      radioButtons: [
        {
          label: '2WD',
          value: '2WD',
          checked: true,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
  
        {
          label: '4WD',
          value: '4WD',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
  
        {
          label: 'AWD',
          value: 'AWD',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        }
  
      ],
      radioButtons2: [
        {
          label: 'Automatic',
          value: 'Automatic',
          checked: true,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
  
        {
          label: 'Manual',
          value: 'Manual',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
  
        {
          label: 'Other',
          value: 'Other',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        }
  
      ],
      radioButtons3: [
        {
          label: 'Petrol',
          value: 'Petrol',
          checked: true,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
  
        {
          label: 'Diesel',
          value: 'Diesel',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
  
        {
          label: 'Hybrid',
          value: 'Hybrid',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
        {
          label: 'Other',
          value: 'Other',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        }
  
      ],
      radioButtons4: [
        {
          label: 'Brand New',
          value: 'Brand New',
          checked: true,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
  
        {
          label: 'Good Condition',
          value: 'Good Condition',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
  
        {
          label: 'Need Maintenance',
          value: 'Need Maintenance',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 11
  
        },
       
        
      ],
      PickerValueHolder:[
        {
  
          PickerValueHolder : ''
     
        }],
        PickerValueHolder1:[
          {
   
            PickerValueHolder : ''
       
          }],
          PickerValueHolder2:[
            {
     
              PickerValueHolder : ''
         
            }],
            PickerValueHolder3:[
              {
       
                PickerValueHolder : ''
           
              }],
              image:[
              
              {
                image: null,
              }
            
            ],
            image2:[
              
              {
                image2: null,
              }
            
            ],
            image3:[
              
              {
                image3: null,
              }
            
            ],
            image4:[
              
              {
                image4: null,
              }
            
            ],
            image5:[
              
              {
                image5: null,
              }
            
            ],
            image6:[
              
              {
                image6: null,
              }
            
            ],
            image7:[
              
              {
                image7: null,
              }
            
            ],
            image8:[
              
              {
                image8: null,
              }
            
            ],
      favSport0: undefined,
      favSport1: undefined,
      favSport2: undefined,
      favSport3: undefined,
      favSport4: 'baseball',
      previousFavSport5: undefined,
      favSport5: null,
      favNumber: undefined,
    };

    this.InputAccessoryView = this.InputAccessoryView.bind(this);
     
  }
  
  InputAccessoryView() {
  }
  render() {
    let { image } = this.state;
    let { image2 } = this.state;
    let { image3 } = this.state;
    let { image4 } = this.state;
    let { image5 } = this.state;
    let { image6 } = this.state;
    let { image7 } = this.state;
    let { image8 } = this.state;
   
    // options = useMemo(() => lookup[this.state.dataValue], [this.state.dataValue]);
    // let selectedItem = this.state.radioButtons.find(e => e.checked == true);
    // selectedItem = selectedItem ? selectedItem.value : this.state.radioButtons[0].value;

    // let selectedItem2 = this.state.radioButtons2.find(e => e.checked == true);
    // selectedItem2 = selectedItem2 ? selectedItem2.value : this.state.radioButtons2[0].value;

    // let selectedItem3 = this.state.radioButtons3.find(e => e.checked == true);
    // selectedItem3 = selectedItem3 ? selectedItem3.value : this.state.radioButtons3[0].value;

    // let selectedItem4 = this.state.radioButtons4.find(e => e.checked == true);
    // selectedItem4 = selectedItem4 ? selectedItem4.value : this.state.radioButtons4[0].value;
    const placeholder = {
      label: 'Select a sport...',
      value: null,
      color: '#9EA0A4',
    };
 
    return (
 <ScrollView>


   <View style={{backgroundColor:'#fff'}}>

  <Header navigation={this.props.navigation} />
    <View style={{alignItems:'center'}}>
    
    <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'3%'}}>
    
      <Image source={require('./assets/exclamation.png')} style={styles.ImageStyle} />
      <Text style={{marginTop:20,color:'#546b8a'}}>  Make  : </Text>     
      <View style={styles. MainContainer8}>     
      <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
         

          <View paddingVertical={5} />

         
          {/* and iOS onUpArrow/onDownArrow toggle example */}
          <RNPickerSelect
            placeholder={placeholder}
            items={make}
            onValueChange={value => {
              this.setState({
                favSport0: value,
              });
            }}
            style={{
              inputAndroid: {
                backgroundColor: 'transparent',
              },
              iconContainer: {
                top: 5,
                right: 15,
              },
            }}
            value={this.state.favSport1}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: 'cyan' }}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
          />
        </ScrollView>
        </View>
          
           </View>
           <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
              <Image source={require('./assets/exclamation.png')} style={styles.ImageStyle} />
              <Text style={{marginTop:20,color:'#546b8a'}}>  Model:</Text> 
                <View style={styles. MainContainer8}>   
                {/* <select onChange={this.onChange}>
        <option value='def'>Choose your car</option>
        <option value='mazda'>Mazda</option>
        <option value='bmv'>BMV</option>
      </select>
      <hr />
      

      <select disabled={this.state.dataValue === 'def'}>
        {[...lookup.def, ...options].map(({ id, text }) => (
          <option key={id} value={id}>
            {text}
          </option>
        ))}
      </select>   */}
                {/* <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
         

          <View paddingVertical={5} /> */}

         
          {/* and iOS onUpArrow/onDownArrow toggle example */}
          {/* <RNPickerSelect
            placeholder={placeholder}
            items={model}
            onValueChange={value => {
              this.setState({
                favSport0: value,
              });
            }}
            style={{
              inputAndroid: {
                backgroundColor: 'transparent',
              },
              iconContainer: {
                top: 5,
                right: 15,
              },
            }}
            value={this.state.favSport1}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: 'cyan' }}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
          />
        </ScrollView> */}
        </View>
           </View>
           <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
              <Image source={require('./assets/circle.png')} style={styles.ImageStyle} />
              <Text style={{marginTop:20,color:'#546b8a'}}>  Trim  : </Text>     
              <TextInput style = {styles. name3inputs}
               underlineColorAndroid = "transparent"
   
                 placeholderTextColor = "#8d1b3e"
                 autoCapitalize = "none"
               />

             </View>
             <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
    <Image source={require('./assets/circle.png')} style={styles.ImageStyle} />
    <Text style={{marginTop:20,color:'#546b8a'}}>  Year : </Text>     
    <TextInput style = {styles. name3inputs}
     underlineColorAndroid = "transparent"

       placeholderTextColor = "#8d1b3e"
       autoCapitalize = "none"
     />

   </View>

                
                 <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
                  <Image source={require('./assets/exclamation.png')} style={styles.ImageStyle} />
                 <Text style={{marginTop:20,color:'#546b8a'}}>  Mileage : </Text>     
                <TextInput style = {styles. name2inputs}
                   underlineColorAndroid = "transparent"

                   placeholderTextColor = "#8d1b3e"
                    autoCapitalize = "none"
                />
                 <TextInput style = {styles. name1inputs}
                   underlineColorAndroid = "transparent"
                    placeholder="    KM"
                    placeholderTextColor = "#546b8a"
                    autoCapitalize = "none"
                />

       </View>
       <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
                  <Image source={require('./assets/circle.png')} style={styles.ImageStyle} />
                 <Text style={{marginTop:20,color:'#546b8a'}}>Engine Size:</Text>     
                <TextInput style = {styles. name2inputs}
                   underlineColorAndroid = "transparent"

                   placeholderTextColor = "#8d1b3e"
                    autoCapitalize = "none"
                />
                 <TextInput style = {styles. name1inputs}
                   underlineColorAndroid = "transparent"
                    placeholder="      L"
                   
                   placeholderTextColor = "#546b8a"
                    autoCapitalize = "none"
                />

       </View>
       <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'18px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
                  <Image source={require('./assets/circle.png')} style={styles.ImageStyle} />
                 <Text style={{marginTop:20,color:'#546b8a'}}>Drive Terrain: </Text>     
                
                
      <View style={styles.MainContainer}>
 
 <RadioGroup
   color='#546b8a'
   labelStyle={{ fontSize: 14, }}
   radioButtons={this.state.radioButtons}
   onPress={radioButtons=> this.setState({ radioButtons })}
   style={{ paddingTop: 8 ,flexDirection:'row'}}
 />

</View>

       </View>
       <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'18px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
    <Image source={require('./assets/circle.png')} style={styles.ImageStyle} />
   <Text style={{marginTop:20,color:'#546b8a'}}>Transmission: </Text>     
  
  
<View style={styles.MainContainer2}>

<RadioGroup
color='#546b8a'
labelStyle={{ fontSize: 14, }}
radioButtons={this.state.radioButtons2}
onPress={radioButtons2=> this.setState({ radioButtons2 })}
style={{ paddingTop: 8 }}
/>

</View>

</View>
<View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'18px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
    <Image source={require('./assets/circle.png')} style={styles.ImageStyle} />
   <Text style={{marginTop:20,color:'#546b8a'}}>   Fuel Type : </Text>     
  
  
<View style={styles.MainContainer3}>

<RadioGroup
color='#546b8a'
labelStyle={{ fontSize: 14, }}
radioButtons={this.state.radioButtons3}
onPress={radioButtons3=> this.setState({ radioButtons3})}
style={{ paddingTop: 8 }}
/>

</View>

</View>


<View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'18px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
    <Image source={require('./assets/circle.png')} style={styles.ImageStyle} />
   <Text style={{marginTop:20,color:'#546b8a'}}>  Condition :  </Text>     
  
  
<View style={styles.MainContainer2}>

<RadioGroup
color='#546b8a'
labelStyle={{ fontSize: 14, }}
radioButtons={this.state.radioButtons4}
onPress={radioButtons4=> this.setState({ radioButtons4})}
style={{ paddingTop: 8 }}
/>

</View>

</View>
<View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
    <Image source={require('./assets/exclamation.png')} style={styles.ImageStyle} />
   <Text style={{marginTop:20,color:'#546b8a'}}>   Price   :  </Text>     
  <TextInput style = {styles. name2inputs}
     underlineColorAndroid = "transparent"

     placeholderTextColor = "#8d1b3e"
      autoCapitalize = "none"
  />
   <TextInput style = {styles. name1inputs}
     underlineColorAndroid = "transparent"
      placeholder="    QR"
      placeholderTextColor = "#546b8a"
      autoCapitalize = "none"
  />

</View>
<View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'1%'}}>
    
    <Image source={require('./assets/circle.png')} style={styles.ImageStyle} />
    <Text style={{marginTop:20,color:'#546b8a'}}>Contact:</Text>     
    <TextInput style = {styles. name3inputs}
     underlineColorAndroid = "transparent"

       placeholderTextColor = "#8d1b3e"
       autoCapitalize = "none"
     />

   </View>
   <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'1%'}}>

    <Image source={require('./assets/exclamation.png')} style={styles.ImageStyle} />
        <Text style={{marginTop:20,color:'#546b8a'}}>  City   : </Text>     
        <View style={styles. MainContainer8}>     
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
         

          <View paddingVertical={5} />

         
          {/* and iOS onUpArrow/onDownArrow toggle example */}
          <RNPickerSelect
            placeholder={placeholder}
            items={city}
            onValueChange={value => {
              this.setState({
                favSport0: value,
              });
            }}
            style={{
              inputAndroid: {
                backgroundColor: 'transparent',
              },
              iconContainer: {
                top: 5,
                right: 15,
              },
            }}
            value={this.state.favSport1}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: 'cyan' }}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
          />
        </ScrollView>
        </View>

       </View>
       <View style={styles.container}>
       <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'18px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:10,marginRight:10}}>

<Image source={require('./assets/exclamation.png')} style={styles.ImageStyle} />
    <Text style={{marginTop:20,color:'#546b8a'}}>  Title   :    </Text>     
      <TextInput style = {styles. name4inputs}
       underlineColorAndroid = "transparent"

       placeholderTextColor = "#8d1b3e"
       autoCapitalize = "none"
        />

   </View>
   <View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'18px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:10,marginRight:10,marginBottom:10}}>


    <Text style={{marginTop:20,color:'#546b8a',marginLeft:'5%'}}> Description:</Text>     
      <TextInput style = {styles. name4inputs}
       underlineColorAndroid = "transparent"

       placeholderTextColor = "#8d1b3e"
       autoCapitalize = "none"
        />

   </View>
   
       </View>
      
<View style={{flexDirection:'row',flex:1,backgroundColor:'#dee3e9',borderRadius:'18px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:10,marginRight:10,marginBottom:10}}>

</View>
       <View style={{backgroundColor:'#fff',position:'absolute',top:'68.7%',left:'37%',size:'11%'}}>
                 <Text style={{fontSize:18,color:'#546b8a',fontStyle:'bold'}}>  Add Details  </Text>
                 
                 </View>
                 <View style={{flexDirection:'row'}}>
                 <View style={{flex:1,backgroundColor:'#dee3e9',bordercolor:'#ppp',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:10,marginRight:10,marginBottom:10}}>
                 <TouchableOpacity   title="click   me   " borderRadius="80px" onPress={this._pickImage}>
                 <Image source={require('./assets/plus.png')} style={styles.Plus} />
                 </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.Plus2} />}
    </View>  
    <View style={{flex:1,backgroundColor:'#dee3e9',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:10,marginBottom:10}}>
    <TouchableOpacity   title="click   me   " borderRadius="80px" onPress={this._pickImage2}>
                 <Image source={require('./assets/plus.png')} style={styles.Plus} />
                 </TouchableOpacity>
        {image && <Image source={{ uri: image2 }} style={styles.Plus2} />}
      </View>
      <View style={{flex:1,backgroundColor:'#dee3e9',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:10,marginBottom:10}}>
      <TouchableOpacity   title="click   me   " borderRadius="80px" onPress={this._pickImage3}>
                 <Image source={require('./assets/plus.png')} style={styles.Plus} />
                 </TouchableOpacity>
        {image && <Image source={{ uri: image3 }} style={styles.Plus2} />}
      </View>
      <View style={{flex:1,backgroundColor:'#dee3e9',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:10,marginBottom:10}}>
      <TouchableOpacity   title="click   me   " borderRadius="80px" onPress={this._pickImage4}>
                 <Image source={require('./assets/plus.png')} style={styles.Plus} />
                 </TouchableOpacity>
        {image && <Image source={{ uri: image4 }} style={styles.Plus2} />}
      </View>
      </View>
      <View style={{flexDirection:'row'}}>
                 <View style={{flex:1,backgroundColor:'#dee3e9',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:10,marginRight:10,marginBottom:10}}>

                 <TouchableOpacity   title="click   me   " borderRadius="80px" onPress={this._pickImage5}>
                 <Image source={require('./assets/plus.png')} style={styles.Plus} />
                 </TouchableOpacity>
        {image && <Image source={{ uri: image5 }} style={styles.Plus2} />}
    </View>  
    <View style={{flex:1,backgroundColor:'#dee3e9',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:10,marginBottom:10}}>
    <TouchableOpacity   title="click   me   " borderRadius="80px" onPress={this._pickImage6}>
                 <Image source={require('./assets/plus.png')} style={styles.Plus} />
                 </TouchableOpacity>
        {image && <Image source={{ uri: image6 }} style={styles.Plus2} />}
      </View>
      <View style={{flex:1,backgroundColor:'#dee3e9',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:10,marginBottom:10}}>
      <TouchableOpacity   title="click   me   " borderRadius="80px" onPress={this._pickImage7}>
                 <Image source={require('./assets/plus.png')} style={styles.Plus} />
                 </TouchableOpacity>
        {image && <Image source={{ uri: image7 }} style={styles.Plus2} />}
      </View>
      <View style={{flex:1,backgroundColor:'#dee3e9',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:10,marginBottom:10}}>
      <TouchableOpacity   title="click   me   " borderRadius="80px" onPress={this._pickImage8}>
                 <Image source={require('./assets/plus.png')} style={styles.Plus} />
                 </TouchableOpacity>
        {image && <Image source={{ uri: image8 }} style={styles.Plus2} />}
      </View>
      </View>
      <Text style={{fontSize:12,color:'#546b8a',fontStyle:'bold'}}> If you have problems With flash please use simpler form </Text>
      <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/mar.png')} style={styles.Sq} /> 
      <Text style={{fontSize:15,color:'#8d1b3c',fontStyle:'bold',marginTop:'4%'}}>Agree to the terms and conditions </Text>
       </View>
       <Button
  title="  Save  "
  color="#8d1b3c"
  accessibilityLabel="Learn more about this purple button"
/>
<br></br>
      </View>
      <Footer />
      </View>
      </ScrollView>

   
  

   
  );
}
componentDidMount() {
  this.getPermissionAsync();
}

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
};

_pickImage = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
      
    }
   
    console.log(result);
  } catch (E) {
    console.log(E);
  }
};
_pickImage2 = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image2: result.uri });
      
    }
   
    console.log(result);
  } catch (E) {
    console.log(E);
  }
};
_pickImage3 = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image3: result.uri });
      
    }
   
    console.log(result);
  } catch (E) {
    console.log(E);
  }
};
_pickImage4 = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image4: result.uri });
      
    }
   
    console.log(result);
  } catch (E) {
    console.log(E);
  }
};
_pickImage5 = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image5: result.uri });
      
    }
   
    console.log(result);
  } catch (E) {
    console.log(E);
  }
};
_pickImage6 = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image6: result.uri });
      
    }
   
    console.log(result);
  } catch (E) {
    console.log(E);
  }
};
_pickImage7 = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image7: result.uri });
      
    }
   
    console.log(result);
  } catch (E) {
    console.log(E);
  }
};
_pickImage8 = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image8: result.uri });
      
    }
   
    console.log(result);
  } catch (E) {
    console.log(E);
  }
};

}


const styles = StyleSheet.create({
  container: {
  
    flex: 1,
    backgroundColor: '#fff',
    borderRadius:'32px',
    borderColor:'#546b8a',
    borderWidth: '4px',
    marginTop:'2%',
    borderStyle:"bold",
    fontStyle:"italic",
    width:600,
    height:250,
   

 
},
ImageStyle: {
  padding: 10,
  margin: 5,
  height: 15,
  width: 15,
  marginTop:20,
  marginLeft:20,
  resizeMode : 'stretch',
  alignItems: 'center'
},
Plus: {
  margin: 5,
  height: 25,
  width: 45,
  marginTop:10,
  marginLeft:35,
  marginRight:30,
  marginBottom:30,
  resizeMode : 'stretch',
},
Plus2: {
  margin: 5,
  height: 25,
  width: 45,
  marginTop:20,
  marginLeft:35,
  marginRight:30,
  marginBottom:10,
  resizeMode : 'stretch',
},
Sq: {
  margin: 5,
  height: 20,
  width: 25,
  marginTop:10,
  marginLeft:10,
  marginRight:10,
  marginBottom:10,
  resizeMode : 'stretch',
},
ImageStyle2: {
  padding: 10,
  margin: 5,
  height: 30,
  width: 30,
  marginTop:15,
  marginLeft:20,
  resizeMode : 'stretch',
  alignItems: 'center'
},


name4inputs: {
  margin: 10,
  height: 80,
  borderColor: '#fff',
  borderWidth: 1,
  marginLeft:200,
  width:300,
  backgroundColor:'#fff',
  paddingLeft:10,
  borderRadius:18,


},
name3inputs: {
margin: 15,
height: 30,
borderColor: '#fff',
borderWidth: 1,
marginLeft:180,
width:360,
outline:'#fff',
backgroundColor:'#fff',
paddingLeft:10,
borderRadius:18,


},
name2inputs: {
margin: 15,
height: 30,
borderColor: '#fff',
borderWidth: 1,
marginLeft:170,
width:240,
backgroundColor:'#fff',
paddingLeft:10,
borderRadius:18,


},
name1inputs: {
margin: 15,
height: 30,
borderColor: '#fff',
borderWidth: 1,
marginLeft:10,
width:80,
backgroundColor:'#fff',
paddingLeft:10,
borderRadius:18,


},
submitButton: {
  backgroundColor: '#8d1b3e',
  padding: 10,
  margin: 15,
  width:300,
  marginLeft:560,
 paddingLeft:80,
  height: 40,
},

EditButton: {
  backgroundColor: '#e4e7ee',
  padding: 10,
  margin: 15,
  width:200,
  paddingLeft:45,
  marginLeft:2,
  height: 40,
},
submitButtonText:{
  color: '#354e76'
},
submitButtonText2:{
color: 'white'
},
buttonContainer: {

 paddingLeft:200,
 
},
MainContainer8: {

margin: 15,
height: 35,
borderColor: '#fff',
borderWidth: 2,
marginLeft:180,
width:355,
backgroundColor:'#fff',
paddingLeft:2,
paddingRight:2,
paddingTop:1,
paddingBottom:1,
borderRadius:18,
},
MainContainer: {
flex:1,
margin: 15,
height: 70,
borderColor: '#fff',
borderWidth: 1,
marginLeft:170,
width:320,
backgroundColor:'#fff',
paddingLeft:10,
borderRadius:18,
},

MainContainer2: {
flex:1,
margin: 15,
height: 130,
borderColor: '#fff',
borderWidth: 1,
marginLeft:170,
width:320,
backgroundColor:'#fff',
paddingLeft:10,
borderRadius:18,


},
MainContainer3: {
flex:1,

margin: 15,
height: 170,
borderColor: '#fff',
borderWidth: 1,
marginLeft:170,
width:320,
backgroundColor:'#fff',
paddingLeft:10,
borderRadius:18,


},


selectedItemView:
{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 14,
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center'
},

selectedText:
{
    fontSize: 17,
    color: '#fff'
},
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 35,

  },
  scrollContentContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
 
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    
    width:10,
    height:20,

    borderColor: 'gray',
    borderRadius: 5,
    color: 'black',
   // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
// ReactDOM.render(<Example />, document.getElementById('root'));