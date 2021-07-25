import React from 'react'
import {StyleSheet,View, Image,Dimensions} from 'react-native'
import {
    Header,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Text
} from 'native-base'

import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {signOut} from '../action/auth'

import Welcome from '../assets/Skull.png'

import WavyHeader from '../componenets/WavyHeader';


const CustomHeader = ({signOut, authState, navigation}) => {

    return(
        <>
        <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <WavyHeader customStyles={styles.svgCurve} />
                </View>
        </View>
        <Image
            source={Welcome}
            style={{width: null, height: 150,left:-20, marginTop: 115}}
            resizeMode="contain"
            />
        <Body>
            <Title style={{color: 'black',fontWeight: 'bold',textAlign:'center'}}>Opioid Overdose</Title>
            <Title style={{color: 'black',fontWeight: 'bold',textAlign:'center'}}>Prediction System</Title>
            
        </Body>
        
        <Right>
            {authState.isAuthenticated && (
                <>
                <Button
                transparent
                iconLeft
                onPress={() => navigation.navigate('AddPost')}
                >
                <Text style={{color: '#fdcb9e'}}>Add Post</Text>
                </Button>
                <Button
                transparent
                onPress={() => signOut()}
                >
                    <Icon name="log-out-outline" style={{color: "red"}} />
                </Button>
                </>
            )}
        </Right>
       
        </>
    )
}

const mapStateToProps = (state) => ({
    authState: state.auth
})

const mapDispatchToProps = {
    signOut
}

CustomHeader.prototypes = {
    signOut: propTypes.func.isRequired,
    authState: propTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps )(CustomHeader)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    headerContainer: {
      marginTop: 0,
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginTop: 35
    }
  });