import React from 'react';
import {
  StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

const DATA = [
  {
    
    cornerLabelText: 'Advertisement',
   
  },
  {
   
    cornerLabelText: 'Advertisement ',
  },
  {
    
    cornerLabelText: 'Advertisement ',
  },
  {
   
    cornerLabelText: 'Advertisement ',
  },
];

const Screen = () => {
  const renderItem = data => (
   

    <View style={styles.container1}>
    <Text style={styles.textAdvertisement}>  { data.cornerLabelText }</Text>

</View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        height:width*.08,
        width:width*.30,
        backgroundColor: '#a1a9bc',
        justifyContent: 'center',
        alignItems:'center',
        borderTopLeftRadius: width*.008,
        borderTopRightRadius: width*.008,
        borderBottomLeftRadius:  width*.008,
        borderBottomRightRadius:  width*.008
     
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
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

export default Screen;