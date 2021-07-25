import React, { useRef, useState } from "react";
import { 
    TouchableOpacity,
    DrawerLayoutAndroid,
    Image,
    Text, 
    StyleSheet, 
    View,
    ScrollView,
    CheckBox,
    Picker
 } from "react-native";
 import {
    Container,
     Form,
    Input,
    Item
  } from 'native-base';




import Welcome from '../assets/Skull.png'

import home from '../assets/home.jpg'
import alert from '../assets/alert.jpg'


import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {signOut} from '../action/auth'
import Icon, { Button } from 'react-native-vector-icons/dist/AntDesign'
import Icon2 from 'react-native-vector-icons/dist/Entypo'
import Icon3 from 'react-native-vector-icons/dist/FontAwesome'


const Risk2 = ({signOut,userState, authState, navigation}) => {

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("right");
  
    const navigationView = () => (
      <View style={[styles.container, styles.navigationContainer]}>
        <Image
            source={Welcome}
            style={{width:190, height: 190,left:-18}}
            resizeMode="contain"
            />
        <Text style={styles.text}> Opioid Overdose 
        </Text>
        
        <Text style={[styles.text],{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            fontSize:20,
            fontWeight:'bold',
            width:200,
            textAlign:"center",
            height:35}}> Prediction System
        </Text>    
        

        <TouchableOpacity
          onPress={() => {
              drawer.current.closeDrawer()
              navigation.navigate('Home')
        }}
        >
        <Text style={styles.button}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            drawer.current.closeDrawer()
            navigation.navigate('Alertod')}
          }
        >
        <Text style={styles.button}>Alert</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => signOut()}
        >
        <Text style={styles.button}>Log Out</Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => drawer.current.closeDrawer()}
        >
        <Icon3 name="close" size={40} style={{color: "red"}} />
        </TouchableOpacity>
      </View>
    );
            
    console.log("YEEEYE");
    console.log(userState);
    const userimage = ((userState) ? (userState.image) : ('https://image.flaticon.com/icons/png/512/3011/3011270.png'))
    const username = ((userState) ? (userState.name) : ('User'))
    
    const [selectedValue1, setSelectedValue1] = useState("Null");
    const [selectedValue2, setSelectedValue2] = useState("Null");
    const [selectedValue3, setSelectedValue3] = useState("Null");
    const [selectedValue4, setSelectedValue4] = useState("Null");
    const [selectedValue5, setSelectedValue5] = useState("Null");
    const [selectedValue6, setSelectedValue6] = useState("Null");
    const [selectedValue7, setSelectedValue7] = useState("Null");
    



    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View style={styles.container1}>
        
        <TouchableOpacity
            onPress={() => navigation.navigate('User')}
          >
          <Image
          source={{uri:userimage}}
          style={{width:40, height: 40}}
          resizeMode="contain"
          />
          </TouchableOpacity>
          <Text style={styles.text}>{username}</Text>

        <TouchableOpacity
            style={{marginLeft:240,alignSelf:'flex-end'}}
            onPress={() => drawer.current.openDrawer()}
          >
             <Icon2 name="menu" size={50} style={{color: "red"}} />
        </TouchableOpacity>
        </View>

        <View style={styles.container2}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>

        <Text
        style={{
            fontWeight:'bold',
            fontSize:40,
            color:'#4e3e5d',
            textAlign:'center',
        }}
        > Risk Assessment</Text>
        <Text
        style={{
            fontWeight:'bold',
            fontSize:18,
            color:'#2C3A47',
            textAlign:'center',
        }}>
        Patient's opioid medications:
        </Text>

    <View style={styles.container4}>
        <View style={{width:'60%'}}>
    <Picker
        selectedValue={selectedValue1}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
      >
      
	    <Picker.Item label="Belbuca 75 mcg " value="Belbuca 75 mcg" />
        <Picker.Item label="default " value="Select Medication " />
		<Picker.Item label="Belbuca 75 mcg twice daily " value="Belbuca 75 mcg twice daily" />
        <Picker.Item label="Belbuca 150 mcg " value="Belbuca 150 mcg" />
        <Picker.Item label="Belbuca 150 mcg twice daily " value="Belbuca 150 mcg twice daily" />
        <Picker.Item label="Belbuca 300 mcg " value="Belbuca 300 mcg" />
        <Picker.Item label="Belbuca 300 mcg twice daily " value="Belbuca 300 mcg twice daily" />
        <Picker.Item label="Belbuca 450 mcg " value="Belbuca 450 mcg" />
        <Picker.Item label="Belbuca 450 mcg twice daily " value="Belbuca 450 mcg twice daily" />
        <Picker.Item label="Belbuca 600 mcg " value="Belbuca 600 mcg" />
        <Picker.Item label="Belbuca 600 mcg twice daily " value="Belbuca 600 mcg twice daily" />
        <Picker.Item label="Belbuca 750 mcg " value="Belbuca 750 mcg" />
        <Picker.Item label="Belbuca 750 mcg twice daily " value="Belbuca 750 mcg twice daily" />
        <Picker.Item label="Belbuca 900 mcg " value="Belbuca 900 mcg" />
        <Picker.Item label="Belbuca 900 mcg twice daily " value="Belbuca 900 mcg twice daily" />
        <Picker.Item label="buprenorphine (buccal film or SL) " value="buprenorphine (buccal film or SL)" />
        <Picker.Item label="Butrans TD 5 mcg/hr " value="Butrans TD 5 mcg/hr" />
        <Picker.Item label="Butrans TD 7.5 mcg/hr " value="Butrans TD 7.5 mcg/hr" />
        <Picker.Item label="Butrans TD 10 mcg/hr " value="Butrans TD 10 mcg/hr" />
        <Picker.Item label="Butrans TD 15 mcg/hr " value="Butrans TD 15 mcg/hr" />
        <Picker.Item label="Butrans TD 20 mcg/hr " value="Butrans TD 20 mcg/hr" />
        <Picker.Item label="butorphanol " value="butorphanol" />
        <Picker.Item label="codeine " value="codeine" />
        <Picker.Item label="diacetyl morphine " value="diacetyl morphine" />
        <Picker.Item label="dihydrocodeine " value="dihydrocodeine" />
        <Picker.Item label="fentanyl TD 12 mcg/hr " value="fentanyl TD 12 mcg/hr" />
        <Picker.Item label="fentanyl TD 25 mcg/hr " value="fentanyl TD 25 mcg/hr" />
        <Picker.Item label="fentanyl TD 50 mcg/hr " value="fentanyl TD 50 mcg/hr" />
        <Picker.Item label="fentanyl TD 75 mcg/hr " value="fentanyl TD 75 mcg/hr" />
        <Picker.Item label="fentanyl TD 100 mcg/hr " value="fentanyl TD 100 mcg/hr" />
        <Picker.Item label="fentanyl (transmucosal) " value="fentanyl (transmucosal)" />
        <Picker.Item label="hydrocodone " value="hydrocodone" />
        <Picker.Item label="heroin " value="heroin" />
        <Picker.Item label="hydromorphone " value="hydromorphone" />
        <Picker.Item label="levorphanol " value="levorphanol" />
        <Picker.Item label="meperidine " value="meperidine" />
        <Picker.Item label="methadone " value="methadone" />
        <Picker.Item label="morphine " value="morphine" />
        <Picker.Item label="naloxone " value="naloxone" />
        <Picker.Item label="nalbuphine " value="nalbuphine" />
        <Picker.Item label="naltrexone " value="naltrexone" />
        <Picker.Item label="oxycodone " value="oxycodone" />
        <Picker.Item label="oxymorphone " value="oxymorphone" />
        <Picker.Item label="tapentadol " value="tapentadol" />
        <Picker.Item label="tramadol " value="tramadol" />
      <Picker.Item label="Null" value="Null" />
      </Picker>
      </View>

      <View style={{width:'40%'}}>
        <Input 
        variant="outline" 
        placeholder="Quantity"
          />
      </View>
      </View>


      <View style={styles.container4}>
        <View style={{width:'60%'}}>
    <Picker
        selectedValue={selectedValue2}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
      >
      
	    <Picker.Item label="Belbuca 75 mcg " value="Belbuca 75 mcg" />
        <Picker.Item label="default " value="Select Medication " />
		<Picker.Item label="Belbuca 75 mcg twice daily " value="Belbuca 75 mcg twice daily" />
        <Picker.Item label="Belbuca 150 mcg " value="Belbuca 150 mcg" />
        <Picker.Item label="Belbuca 150 mcg twice daily " value="Belbuca 150 mcg twice daily" />
        <Picker.Item label="Belbuca 300 mcg " value="Belbuca 300 mcg" />
        <Picker.Item label="Belbuca 300 mcg twice daily " value="Belbuca 300 mcg twice daily" />
        <Picker.Item label="Belbuca 450 mcg " value="Belbuca 450 mcg" />
        <Picker.Item label="Belbuca 450 mcg twice daily " value="Belbuca 450 mcg twice daily" />
        <Picker.Item label="Belbuca 600 mcg " value="Belbuca 600 mcg" />
        <Picker.Item label="Belbuca 600 mcg twice daily " value="Belbuca 600 mcg twice daily" />
        <Picker.Item label="Belbuca 750 mcg " value="Belbuca 750 mcg" />
        <Picker.Item label="Belbuca 750 mcg twice daily " value="Belbuca 750 mcg twice daily" />
        <Picker.Item label="Belbuca 900 mcg " value="Belbuca 900 mcg" />
        <Picker.Item label="Belbuca 900 mcg twice daily " value="Belbuca 900 mcg twice daily" />
        <Picker.Item label="buprenorphine (buccal film or SL) " value="buprenorphine (buccal film or SL)" />
        <Picker.Item label="Butrans TD 5 mcg/hr " value="Butrans TD 5 mcg/hr" />
        <Picker.Item label="Butrans TD 7.5 mcg/hr " value="Butrans TD 7.5 mcg/hr" />
        <Picker.Item label="Butrans TD 10 mcg/hr " value="Butrans TD 10 mcg/hr" />
        <Picker.Item label="Butrans TD 15 mcg/hr " value="Butrans TD 15 mcg/hr" />
        <Picker.Item label="Butrans TD 20 mcg/hr " value="Butrans TD 20 mcg/hr" />
        <Picker.Item label="butorphanol " value="butorphanol" />
        <Picker.Item label="codeine " value="codeine" />
        <Picker.Item label="diacetyl morphine " value="diacetyl morphine" />
        <Picker.Item label="dihydrocodeine " value="dihydrocodeine" />
        <Picker.Item label="fentanyl TD 12 mcg/hr " value="fentanyl TD 12 mcg/hr" />
        <Picker.Item label="fentanyl TD 25 mcg/hr " value="fentanyl TD 25 mcg/hr" />
        <Picker.Item label="fentanyl TD 50 mcg/hr " value="fentanyl TD 50 mcg/hr" />
        <Picker.Item label="fentanyl TD 75 mcg/hr " value="fentanyl TD 75 mcg/hr" />
        <Picker.Item label="fentanyl TD 100 mcg/hr " value="fentanyl TD 100 mcg/hr" />
        <Picker.Item label="fentanyl (transmucosal) " value="fentanyl (transmucosal)" />
        <Picker.Item label="hydrocodone " value="hydrocodone" />
        <Picker.Item label="heroin " value="heroin" />
        <Picker.Item label="hydromorphone " value="hydromorphone" />
        <Picker.Item label="levorphanol " value="levorphanol" />
        <Picker.Item label="meperidine " value="meperidine" />
        <Picker.Item label="methadone " value="methadone" />
        <Picker.Item label="morphine " value="morphine" />
        <Picker.Item label="naloxone " value="naloxone" />
        <Picker.Item label="nalbuphine " value="nalbuphine" />
        <Picker.Item label="naltrexone " value="naltrexone" />
        <Picker.Item label="oxycodone " value="oxycodone" />
        <Picker.Item label="oxymorphone " value="oxymorphone" />
        <Picker.Item label="tapentadol " value="tapentadol" />
        <Picker.Item label="tramadol " value="tramadol" />
      <Picker.Item label="Null" value="Null" />
      </Picker>
      </View>

      <View style={{width:'40%'}}>
        <Input 
        variant="outline" 
        placeholder="Quantity"
          />
      </View>
      </View>

      <View style={styles.container4}>
        <View style={{width:'60%'}}>
    <Picker
        selectedValue={selectedValue3}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
      >
      
	    <Picker.Item label="Belbuca 75 mcg " value="Belbuca 75 mcg" />
        <Picker.Item label="default " value="Select Medication " />
		<Picker.Item label="Belbuca 75 mcg twice daily " value="Belbuca 75 mcg twice daily" />
        <Picker.Item label="Belbuca 150 mcg " value="Belbuca 150 mcg" />
        <Picker.Item label="Belbuca 150 mcg twice daily " value="Belbuca 150 mcg twice daily" />
        <Picker.Item label="Belbuca 300 mcg " value="Belbuca 300 mcg" />
        <Picker.Item label="Belbuca 300 mcg twice daily " value="Belbuca 300 mcg twice daily" />
        <Picker.Item label="Belbuca 450 mcg " value="Belbuca 450 mcg" />
        <Picker.Item label="Belbuca 450 mcg twice daily " value="Belbuca 450 mcg twice daily" />
        <Picker.Item label="Belbuca 600 mcg " value="Belbuca 600 mcg" />
        <Picker.Item label="Belbuca 600 mcg twice daily " value="Belbuca 600 mcg twice daily" />
        <Picker.Item label="Belbuca 750 mcg " value="Belbuca 750 mcg" />
        <Picker.Item label="Belbuca 750 mcg twice daily " value="Belbuca 750 mcg twice daily" />
        <Picker.Item label="Belbuca 900 mcg " value="Belbuca 900 mcg" />
        <Picker.Item label="Belbuca 900 mcg twice daily " value="Belbuca 900 mcg twice daily" />
        <Picker.Item label="buprenorphine (buccal film or SL) " value="buprenorphine (buccal film or SL)" />
        <Picker.Item label="Butrans TD 5 mcg/hr " value="Butrans TD 5 mcg/hr" />
        <Picker.Item label="Butrans TD 7.5 mcg/hr " value="Butrans TD 7.5 mcg/hr" />
        <Picker.Item label="Butrans TD 10 mcg/hr " value="Butrans TD 10 mcg/hr" />
        <Picker.Item label="Butrans TD 15 mcg/hr " value="Butrans TD 15 mcg/hr" />
        <Picker.Item label="Butrans TD 20 mcg/hr " value="Butrans TD 20 mcg/hr" />
        <Picker.Item label="butorphanol " value="butorphanol" />
        <Picker.Item label="codeine " value="codeine" />
        <Picker.Item label="diacetyl morphine " value="diacetyl morphine" />
        <Picker.Item label="dihydrocodeine " value="dihydrocodeine" />
        <Picker.Item label="fentanyl TD 12 mcg/hr " value="fentanyl TD 12 mcg/hr" />
        <Picker.Item label="fentanyl TD 25 mcg/hr " value="fentanyl TD 25 mcg/hr" />
        <Picker.Item label="fentanyl TD 50 mcg/hr " value="fentanyl TD 50 mcg/hr" />
        <Picker.Item label="fentanyl TD 75 mcg/hr " value="fentanyl TD 75 mcg/hr" />
        <Picker.Item label="fentanyl TD 100 mcg/hr " value="fentanyl TD 100 mcg/hr" />
        <Picker.Item label="fentanyl (transmucosal) " value="fentanyl (transmucosal)" />
        <Picker.Item label="hydrocodone " value="hydrocodone" />
        <Picker.Item label="heroin " value="heroin" />
        <Picker.Item label="hydromorphone " value="hydromorphone" />
        <Picker.Item label="levorphanol " value="levorphanol" />
        <Picker.Item label="meperidine " value="meperidine" />
        <Picker.Item label="methadone " value="methadone" />
        <Picker.Item label="morphine " value="morphine" />
        <Picker.Item label="naloxone " value="naloxone" />
        <Picker.Item label="nalbuphine " value="nalbuphine" />
        <Picker.Item label="naltrexone " value="naltrexone" />
        <Picker.Item label="oxycodone " value="oxycodone" />
        <Picker.Item label="oxymorphone " value="oxymorphone" />
        <Picker.Item label="tapentadol " value="tapentadol" />
        <Picker.Item label="tramadol " value="tramadol" />
      <Picker.Item label="Null" value="Null" />
      </Picker>
      </View>

      <View style={{width:'40%'}}>
        <Input 
        variant="outline" 
        placeholder="Quantity"
          />
      </View>
      </View>

      <View style={styles.container4}>
        <View style={{width:'60%'}}>
    <Picker
        selectedValue={selectedValue4}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
      >
      
	    <Picker.Item label="Belbuca 75 mcg " value="Belbuca 75 mcg" />
        <Picker.Item label="default " value="Select Medication " />
		<Picker.Item label="Belbuca 75 mcg twice daily " value="Belbuca 75 mcg twice daily" />
        <Picker.Item label="Belbuca 150 mcg " value="Belbuca 150 mcg" />
        <Picker.Item label="Belbuca 150 mcg twice daily " value="Belbuca 150 mcg twice daily" />
        <Picker.Item label="Belbuca 300 mcg " value="Belbuca 300 mcg" />
        <Picker.Item label="Belbuca 300 mcg twice daily " value="Belbuca 300 mcg twice daily" />
        <Picker.Item label="Belbuca 450 mcg " value="Belbuca 450 mcg" />
        <Picker.Item label="Belbuca 450 mcg twice daily " value="Belbuca 450 mcg twice daily" />
        <Picker.Item label="Belbuca 600 mcg " value="Belbuca 600 mcg" />
        <Picker.Item label="Belbuca 600 mcg twice daily " value="Belbuca 600 mcg twice daily" />
        <Picker.Item label="Belbuca 750 mcg " value="Belbuca 750 mcg" />
        <Picker.Item label="Belbuca 750 mcg twice daily " value="Belbuca 750 mcg twice daily" />
        <Picker.Item label="Belbuca 900 mcg " value="Belbuca 900 mcg" />
        <Picker.Item label="Belbuca 900 mcg twice daily " value="Belbuca 900 mcg twice daily" />
        <Picker.Item label="buprenorphine (buccal film or SL) " value="buprenorphine (buccal film or SL)" />
        <Picker.Item label="Butrans TD 5 mcg/hr " value="Butrans TD 5 mcg/hr" />
        <Picker.Item label="Butrans TD 7.5 mcg/hr " value="Butrans TD 7.5 mcg/hr" />
        <Picker.Item label="Butrans TD 10 mcg/hr " value="Butrans TD 10 mcg/hr" />
        <Picker.Item label="Butrans TD 15 mcg/hr " value="Butrans TD 15 mcg/hr" />
        <Picker.Item label="Butrans TD 20 mcg/hr " value="Butrans TD 20 mcg/hr" />
        <Picker.Item label="butorphanol " value="butorphanol" />
        <Picker.Item label="codeine " value="codeine" />
        <Picker.Item label="diacetyl morphine " value="diacetyl morphine" />
        <Picker.Item label="dihydrocodeine " value="dihydrocodeine" />
        <Picker.Item label="fentanyl TD 12 mcg/hr " value="fentanyl TD 12 mcg/hr" />
        <Picker.Item label="fentanyl TD 25 mcg/hr " value="fentanyl TD 25 mcg/hr" />
        <Picker.Item label="fentanyl TD 50 mcg/hr " value="fentanyl TD 50 mcg/hr" />
        <Picker.Item label="fentanyl TD 75 mcg/hr " value="fentanyl TD 75 mcg/hr" />
        <Picker.Item label="fentanyl TD 100 mcg/hr " value="fentanyl TD 100 mcg/hr" />
        <Picker.Item label="fentanyl (transmucosal) " value="fentanyl (transmucosal)" />
        <Picker.Item label="hydrocodone " value="hydrocodone" />
        <Picker.Item label="heroin " value="heroin" />
        <Picker.Item label="hydromorphone " value="hydromorphone" />
        <Picker.Item label="levorphanol " value="levorphanol" />
        <Picker.Item label="meperidine " value="meperidine" />
        <Picker.Item label="methadone " value="methadone" />
        <Picker.Item label="morphine " value="morphine" />
        <Picker.Item label="naloxone " value="naloxone" />
        <Picker.Item label="nalbuphine " value="nalbuphine" />
        <Picker.Item label="naltrexone " value="naltrexone" />
        <Picker.Item label="oxycodone " value="oxycodone" />
        <Picker.Item label="oxymorphone " value="oxymorphone" />
        <Picker.Item label="tapentadol " value="tapentadol" />
        <Picker.Item label="tramadol " value="tramadol" />
      <Picker.Item label="Null" value="Null" />
      </Picker>
      </View>

      <View style={{width:'40%'}}>
        <Input 
        variant="outline" 
        placeholder="Quantity"
          />
      </View>
      </View>

      <View style={styles.container4}>
        <View style={{width:'60%'}}>
    <Picker
        selectedValue={selectedValue5}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue5(itemValue)}
      >
      
	    <Picker.Item label="Belbuca 75 mcg " value="Belbuca 75 mcg" />
        <Picker.Item label="default " value="Select Medication " />
		<Picker.Item label="Belbuca 75 mcg twice daily " value="Belbuca 75 mcg twice daily" />
        <Picker.Item label="Belbuca 150 mcg " value="Belbuca 150 mcg" />
        <Picker.Item label="Belbuca 150 mcg twice daily " value="Belbuca 150 mcg twice daily" />
        <Picker.Item label="Belbuca 300 mcg " value="Belbuca 300 mcg" />
        <Picker.Item label="Belbuca 300 mcg twice daily " value="Belbuca 300 mcg twice daily" />
        <Picker.Item label="Belbuca 450 mcg " value="Belbuca 450 mcg" />
        <Picker.Item label="Belbuca 450 mcg twice daily " value="Belbuca 450 mcg twice daily" />
        <Picker.Item label="Belbuca 600 mcg " value="Belbuca 600 mcg" />
        <Picker.Item label="Belbuca 600 mcg twice daily " value="Belbuca 600 mcg twice daily" />
        <Picker.Item label="Belbuca 750 mcg " value="Belbuca 750 mcg" />
        <Picker.Item label="Belbuca 750 mcg twice daily " value="Belbuca 750 mcg twice daily" />
        <Picker.Item label="Belbuca 900 mcg " value="Belbuca 900 mcg" />
        <Picker.Item label="Belbuca 900 mcg twice daily " value="Belbuca 900 mcg twice daily" />
        <Picker.Item label="buprenorphine (buccal film or SL) " value="buprenorphine (buccal film or SL)" />
        <Picker.Item label="Butrans TD 5 mcg/hr " value="Butrans TD 5 mcg/hr" />
        <Picker.Item label="Butrans TD 7.5 mcg/hr " value="Butrans TD 7.5 mcg/hr" />
        <Picker.Item label="Butrans TD 10 mcg/hr " value="Butrans TD 10 mcg/hr" />
        <Picker.Item label="Butrans TD 15 mcg/hr " value="Butrans TD 15 mcg/hr" />
        <Picker.Item label="Butrans TD 20 mcg/hr " value="Butrans TD 20 mcg/hr" />
        <Picker.Item label="butorphanol " value="butorphanol" />
        <Picker.Item label="codeine " value="codeine" />
        <Picker.Item label="diacetyl morphine " value="diacetyl morphine" />
        <Picker.Item label="dihydrocodeine " value="dihydrocodeine" />
        <Picker.Item label="fentanyl TD 12 mcg/hr " value="fentanyl TD 12 mcg/hr" />
        <Picker.Item label="fentanyl TD 25 mcg/hr " value="fentanyl TD 25 mcg/hr" />
        <Picker.Item label="fentanyl TD 50 mcg/hr " value="fentanyl TD 50 mcg/hr" />
        <Picker.Item label="fentanyl TD 75 mcg/hr " value="fentanyl TD 75 mcg/hr" />
        <Picker.Item label="fentanyl TD 100 mcg/hr " value="fentanyl TD 100 mcg/hr" />
        <Picker.Item label="fentanyl (transmucosal) " value="fentanyl (transmucosal)" />
        <Picker.Item label="hydrocodone " value="hydrocodone" />
        <Picker.Item label="heroin " value="heroin" />
        <Picker.Item label="hydromorphone " value="hydromorphone" />
        <Picker.Item label="levorphanol " value="levorphanol" />
        <Picker.Item label="meperidine " value="meperidine" />
        <Picker.Item label="methadone " value="methadone" />
        <Picker.Item label="morphine " value="morphine" />
        <Picker.Item label="naloxone " value="naloxone" />
        <Picker.Item label="nalbuphine " value="nalbuphine" />
        <Picker.Item label="naltrexone " value="naltrexone" />
        <Picker.Item label="oxycodone " value="oxycodone" />
        <Picker.Item label="oxymorphone " value="oxymorphone" />
        <Picker.Item label="tapentadol " value="tapentadol" />
        <Picker.Item label="tramadol " value="tramadol" />
      <Picker.Item label="Null" value="Null" />
      </Picker>
      </View>

      <View style={{width:'40%'}}>
        <Input 
        variant="outline" 
        placeholder="Quantity"
          />
      </View>
      </View>


      <View style={styles.container4}>
        <View style={{width:'60%'}}>
    <Picker
        selectedValue={selectedValue6}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue6(itemValue)}
      >
      
	    <Picker.Item label="Belbuca 75 mcg " value="Belbuca 75 mcg" />
        <Picker.Item label="default " value="Select Medication " />
		<Picker.Item label="Belbuca 75 mcg twice daily " value="Belbuca 75 mcg twice daily" />
        <Picker.Item label="Belbuca 150 mcg " value="Belbuca 150 mcg" />
        <Picker.Item label="Belbuca 150 mcg twice daily " value="Belbuca 150 mcg twice daily" />
        <Picker.Item label="Belbuca 300 mcg " value="Belbuca 300 mcg" />
        <Picker.Item label="Belbuca 300 mcg twice daily " value="Belbuca 300 mcg twice daily" />
        <Picker.Item label="Belbuca 450 mcg " value="Belbuca 450 mcg" />
        <Picker.Item label="Belbuca 450 mcg twice daily " value="Belbuca 450 mcg twice daily" />
        <Picker.Item label="Belbuca 600 mcg " value="Belbuca 600 mcg" />
        <Picker.Item label="Belbuca 600 mcg twice daily " value="Belbuca 600 mcg twice daily" />
        <Picker.Item label="Belbuca 750 mcg " value="Belbuca 750 mcg" />
        <Picker.Item label="Belbuca 750 mcg twice daily " value="Belbuca 750 mcg twice daily" />
        <Picker.Item label="Belbuca 900 mcg " value="Belbuca 900 mcg" />
        <Picker.Item label="Belbuca 900 mcg twice daily " value="Belbuca 900 mcg twice daily" />
        <Picker.Item label="buprenorphine (buccal film or SL) " value="buprenorphine (buccal film or SL)" />
        <Picker.Item label="Butrans TD 5 mcg/hr " value="Butrans TD 5 mcg/hr" />
        <Picker.Item label="Butrans TD 7.5 mcg/hr " value="Butrans TD 7.5 mcg/hr" />
        <Picker.Item label="Butrans TD 10 mcg/hr " value="Butrans TD 10 mcg/hr" />
        <Picker.Item label="Butrans TD 15 mcg/hr " value="Butrans TD 15 mcg/hr" />
        <Picker.Item label="Butrans TD 20 mcg/hr " value="Butrans TD 20 mcg/hr" />
        <Picker.Item label="butorphanol " value="butorphanol" />
        <Picker.Item label="codeine " value="codeine" />
        <Picker.Item label="diacetyl morphine " value="diacetyl morphine" />
        <Picker.Item label="dihydrocodeine " value="dihydrocodeine" />
        <Picker.Item label="fentanyl TD 12 mcg/hr " value="fentanyl TD 12 mcg/hr" />
        <Picker.Item label="fentanyl TD 25 mcg/hr " value="fentanyl TD 25 mcg/hr" />
        <Picker.Item label="fentanyl TD 50 mcg/hr " value="fentanyl TD 50 mcg/hr" />
        <Picker.Item label="fentanyl TD 75 mcg/hr " value="fentanyl TD 75 mcg/hr" />
        <Picker.Item label="fentanyl TD 100 mcg/hr " value="fentanyl TD 100 mcg/hr" />
        <Picker.Item label="fentanyl (transmucosal) " value="fentanyl (transmucosal)" />
        <Picker.Item label="hydrocodone " value="hydrocodone" />
        <Picker.Item label="heroin " value="heroin" />
        <Picker.Item label="hydromorphone " value="hydromorphone" />
        <Picker.Item label="levorphanol " value="levorphanol" />
        <Picker.Item label="meperidine " value="meperidine" />
        <Picker.Item label="methadone " value="methadone" />
        <Picker.Item label="morphine " value="morphine" />
        <Picker.Item label="naloxone " value="naloxone" />
        <Picker.Item label="nalbuphine " value="nalbuphine" />
        <Picker.Item label="naltrexone " value="naltrexone" />
        <Picker.Item label="oxycodone " value="oxycodone" />
        <Picker.Item label="oxymorphone " value="oxymorphone" />
        <Picker.Item label="tapentadol " value="tapentadol" />
        <Picker.Item label="tramadol " value="tramadol" />
      <Picker.Item label="Null" value="Null" />
      </Picker>
      </View>

      <View style={{width:'40%'}}>
        <Input 
        variant="outline" 
        placeholder="Quantity"
          />
      </View>
      </View>

      <View style={styles.container4}>
        <View style={{width:'60%'}}>
    <Picker
        selectedValue={selectedValue7}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue7(itemValue)}
      >
      
	    <Picker.Item label="Belbuca 75 mcg " value="Belbuca 75 mcg" />
        <Picker.Item label="default " value="Select Medication " />
		<Picker.Item label="Belbuca 75 mcg twice daily " value="Belbuca 75 mcg twice daily" />
        <Picker.Item label="Belbuca 150 mcg " value="Belbuca 150 mcg" />
        <Picker.Item label="Belbuca 150 mcg twice daily " value="Belbuca 150 mcg twice daily" />
        <Picker.Item label="Belbuca 300 mcg " value="Belbuca 300 mcg" />
        <Picker.Item label="Belbuca 300 mcg twice daily " value="Belbuca 300 mcg twice daily" />
        <Picker.Item label="Belbuca 450 mcg " value="Belbuca 450 mcg" />
        <Picker.Item label="Belbuca 450 mcg twice daily " value="Belbuca 450 mcg twice daily" />
        <Picker.Item label="Belbuca 600 mcg " value="Belbuca 600 mcg" />
        <Picker.Item label="Belbuca 600 mcg twice daily " value="Belbuca 600 mcg twice daily" />
        <Picker.Item label="Belbuca 750 mcg " value="Belbuca 750 mcg" />
        <Picker.Item label="Belbuca 750 mcg twice daily " value="Belbuca 750 mcg twice daily" />
        <Picker.Item label="Belbuca 900 mcg " value="Belbuca 900 mcg" />
        <Picker.Item label="Belbuca 900 mcg twice daily " value="Belbuca 900 mcg twice daily" />
        <Picker.Item label="buprenorphine (buccal film or SL) " value="buprenorphine (buccal film or SL)" />
        <Picker.Item label="Butrans TD 5 mcg/hr " value="Butrans TD 5 mcg/hr" />
        <Picker.Item label="Butrans TD 7.5 mcg/hr " value="Butrans TD 7.5 mcg/hr" />
        <Picker.Item label="Butrans TD 10 mcg/hr " value="Butrans TD 10 mcg/hr" />
        <Picker.Item label="Butrans TD 15 mcg/hr " value="Butrans TD 15 mcg/hr" />
        <Picker.Item label="Butrans TD 20 mcg/hr " value="Butrans TD 20 mcg/hr" />
        <Picker.Item label="butorphanol " value="butorphanol" />
        <Picker.Item label="codeine " value="codeine" />
        <Picker.Item label="diacetyl morphine " value="diacetyl morphine" />
        <Picker.Item label="dihydrocodeine " value="dihydrocodeine" />
        <Picker.Item label="fentanyl TD 12 mcg/hr " value="fentanyl TD 12 mcg/hr" />
        <Picker.Item label="fentanyl TD 25 mcg/hr " value="fentanyl TD 25 mcg/hr" />
        <Picker.Item label="fentanyl TD 50 mcg/hr " value="fentanyl TD 50 mcg/hr" />
        <Picker.Item label="fentanyl TD 75 mcg/hr " value="fentanyl TD 75 mcg/hr" />
        <Picker.Item label="fentanyl TD 100 mcg/hr " value="fentanyl TD 100 mcg/hr" />
        <Picker.Item label="fentanyl (transmucosal) " value="fentanyl (transmucosal)" />
        <Picker.Item label="hydrocodone " value="hydrocodone" />
        <Picker.Item label="heroin " value="heroin" />
        <Picker.Item label="hydromorphone " value="hydromorphone" />
        <Picker.Item label="levorphanol " value="levorphanol" />
        <Picker.Item label="meperidine " value="meperidine" />
        <Picker.Item label="methadone " value="methadone" />
        <Picker.Item label="morphine " value="morphine" />
        <Picker.Item label="naloxone " value="naloxone" />
        <Picker.Item label="nalbuphine " value="nalbuphine" />
        <Picker.Item label="naltrexone " value="naltrexone" />
        <Picker.Item label="oxycodone " value="oxycodone" />
        <Picker.Item label="oxymorphone " value="oxymorphone" />
        <Picker.Item label="tapentadol " value="tapentadol" />
        <Picker.Item label="tramadol " value="tramadol" />
      <Picker.Item label="Null" value="Null" />
      </Picker>
      </View>

      <View style={{width:'40%'}}>
        <Input 
        variant="outline" 
        placeholder="Quantity"
          />
      </View>
      </View>


      

        
        <TouchableOpacity
          onPress={() => navigation.navigate('Result')}
        >
        <Text style={styles.button}>Result</Text>
        </TouchableOpacity>
        
        </ScrollView>
        </View>
      </DrawerLayoutAndroid>
    );
  };

const mapStateToProps = (state) => ({
    authState: state.auth,
    userState: state.auth.user,
})

const mapDispatchToProps = {
    signOut
}

Risk2.prototypes = {
    signOut: propTypes.func.isRequired,
    authState: propTypes.object.isRequired,
    userState: propTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps )(Risk2)

  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: "center",
      justifyContent: 'flex-start',
      padding: 16
    },
    container1: {
        flexDirection: 'row',
        padding: 16,
        alignItems: "center",
        justifyContent: 'flex-start',
        backgroundColor: '#f5f0ef',
      },
    container2: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: 'flex-start',
        backgroundColor: '#dcd4d0',
      },
      container4: {
        marginTop: 8,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#f5f0ef',
      },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    },
    text:{
        color: "#000000",
        fontSize:20,
        fontWeight:'bold',
    },
    button:{
        color: "#FFFF",
        padding:10,
        backgroundColor: '#4e3e5d',
        fontSize:20,
        fontWeight:'bold',
        borderRadius:10,
        marginTop:5,
        textAlign:'center',
    },
    formItem: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        marginBottom: 20,
        width:350,
        color:'black'
      },
    container3: {
        flexDirection: 'row',
        marginTop:30,
        backgroundColor: '#f5f0ef',
        borderRadius:10,
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        textAlign: 'center'
      },

    Question:{
        color:'#120E43',
        fontSize:15,
        marginLeft:6,
        fontWeight:'bold',
    }
  });
  