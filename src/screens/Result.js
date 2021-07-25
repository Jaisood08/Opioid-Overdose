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


const Result = ({signOut,userState, authState, navigation}) => {

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
    
    var RandomNumber = (Math.floor(Math.random() * 100) + 1) % 25 ;

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
            borderBottomColor: 'black',
            borderBottomWidth: 3,
        }}
        > Risk Assessment </Text>
        <Text
        style={{
            fontWeight:'bold',
            fontSize:26,
            color:'#2C3A47',
            textAlign:'center',
            marginTop:22
        }}>
        Predicted Opioid Risk Assessment 
        </Text>


        <Text
        style={{
            fontWeight:'bold',
            fontSize:100,
            color:'#2C3A47',
            textAlign:'center',
        }}>
        {RandomNumber}%
        </Text>

        
    
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
        <Text style={styles.button}>Home</Text>
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

Result.prototypes = {
    signOut: propTypes.func.isRequired,
    authState: propTypes.object.isRequired,
    userState: propTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps )(Result)

  
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
  