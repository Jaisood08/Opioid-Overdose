import React, { useRef, useState } from "react";
import { 
    TouchableOpacity,
    DrawerLayoutAndroid,
    Image,
    Text, 
    StyleSheet, 
    View
 } from "react-native";


import Welcome from '../assets/Skull.png'

import home from '../assets/home.jpg'
import alert from '../assets/alert.jpg'


import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {signOut} from '../action/auth'
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Icon2 from 'react-native-vector-icons/dist/Entypo'
import Icon3 from 'react-native-vector-icons/dist/FontAwesome'


const Home = ({signOut,userState, authState, navigation}) => {

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
          onPress={() => navigation.navigate('AddPost')}
        >
        <Text style={styles.button}>Add Post</Text>
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
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View style={styles.container1}>
        
        <Image
        source={{uri:userState.image}}
        style={{width:40, height: 40}}
        resizeMode="contain"
        />
        <Text style={styles.text}>{userState.name}</Text>

        <TouchableOpacity
            style={{marginLeft:240,alignSelf:'flex-end'}}
            onPress={() => drawer.current.openDrawer()}
          >
             <Icon2 name="menu" size={50} style={{color: "red"}} />
        </TouchableOpacity>
        </View>

        <View style={styles.container2}>
        <Image
        source={home}
        style={{width:590, height: 590}}
        resizeMode="contain"
        />
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

Home.prototypes = {
    signOut: propTypes.func.isRequired,
    authState: propTypes.object.isRequired,
    userState: propTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps )(Home)

  
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
        padding: 16,
        alignItems: "center",
        justifyContent: 'flex-start',
        backgroundColor: '#dcd4d0',
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
        color: "#000",
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
    }
  });
  