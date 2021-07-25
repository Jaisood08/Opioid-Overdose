import React, {useState} from 'react'
import {StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'

import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    H3
} from 'native-base'

import CustomHeader from '../layout/CustomHeader'

import {connect} from 'react-redux'
import {signIn} from '../action/auth'
import propTypes from 'prop-types'

const SignIn = ({navigation, signIn}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const doSignIn = () => {
        signIn({email, password})
    }


    return (
      <>
      <CustomHeader/>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Container style={styles.container}>
            <Form>
              <Item rounded style={styles.formItem}>
                <Input
                  placeholder="Enter your registerd email"
                  value={email}
                  style={{color: 'black',textAlign: 'center'}}
                  onChangeText={(text) => setEmail(text)}
                />
              </Item>
              <Item rounded style={styles.formItem}>
                <Input
                  placeholder="Enter your registerd password"
                  value={password}
                  secureTextEntry={true}
                  style={{color: 'black',textAlign: 'center'}}
                  onChangeText={(text) => setPassword(text)}
                />
              </Item>
              <Button 
              color='#f3a137'
              block
              style={{backgroundColor:'#f3a137',width:200,borderRadius:10,alignSelf:'center'}}
              onPress={doSignIn}>
                <Text>SignIn</Text>
              </Button>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={{marginTop: 10}}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  Do not have an account, SignUp here
                </Text>
              </TouchableOpacity>
            </Form>
            </Container>
          </ScrollView>
        </>
      );
}

const mapDispatchToProps = {
    signIn: (data) => signIn(data)
}

SignIn.propTypes = {
    signIn: propTypes.func.isRequired
}


export default connect(null, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
    container: {
      marginTop:80,
      backgroundColor: '#f5f0ef',
      flex: 1,
      justifyContent: 'flex-start',
      alignContent: 'center',
      textAlign: 'center'
    },
    heading: {
      textAlign: 'center',
      color: '#fdcb9e',
      marginHorizontal: 5,
      marginTop: 30,
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
  });
  