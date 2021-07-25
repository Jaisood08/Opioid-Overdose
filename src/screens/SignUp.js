import React, {useState} from 'react'
import {StyleSheet, ScrollView, TouchableOpacity, View} from 'react-native'

import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    Thumbnail,
    Content
} from 'native-base'

import storage from '@react-native-firebase/storage'
import ProgressBar from 'react-native-progress/Bar'

import ImagePicker from 'react-native-image-picker'
import {options} from '../utils/options'

//redux
import propTypes from 'prop-types'
import {signUp} from '../action/auth'
import {connect} from 'react-redux'

const SignUp = ({signUp}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Contact, setInstaUserName] = useState('')
    const [country, setCountry] = useState('')
    const [bio, setBio] = useState('')
    const [Address, setAdd] = useState('')
    const [image, setImage] = useState(
        'https://image.flaticon.com/icons/png/512/3011/3011270.png'
    )

    const [imageUploading, setImageUploading] = useState(false)
    const [uploadStatus, setUploadStatus] = useState(null)

    const chooseImage = async () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response)

            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                console.log(response)
                uploadImage(response)
              }
             
               
        })
    }

    const uploadImage = async (response) => {
        setImageUploading(true)
        const reference = storage().ref(response.fileName)

        const task = reference.putFile(response.path)
        task.on('state_changed', (taskSnapshot) => {
            const percentage = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 1000

            setUploadStatus(percentage)
        })

        task.then(async () => {
            const url = await reference.getDownloadURL()

            setImage(url)
            setImageUploading(false)
        })
    }

    const doSignUp = async () => {
        signUp({name,Contact, bio,Address, country, email, password, image})
    }



    return (
        <Container style={styles.container}>
          <Content padder>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.imageContainer}>
                <TouchableOpacity onPress={chooseImage}>
                  <Thumbnail large source={{uri: image}} />
                </TouchableOpacity>
              </View>
    
              {imageUploading && (
                <ProgressBar progress={uploadStatus} style={styles.progress} />
              )}
    
              <Form>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Name"
                    value={name}
                    style={{color: 'black',textAlign:'center'}}
                    onChangeText={(text) => setName(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Email"
                    value={email}
                    style={{color: 'black',textAlign:'center'}}
                    onChangeText={(text) => setEmail(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    style={{color: 'black',textAlign:'center'}}
                    onChangeText={(text) => setPassword(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Contact Number"
                    value={Contact}
                    style={{color: 'black',textAlign:'center'}}
                    onChangeText={(text) => setInstaUserName(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Your Short Bio"
                    value={bio}
                    style={{color: 'black',textAlign:'center'}}
                    onChangeText={(text) => setBio(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="country"
                    value={country}
                    style={{color: 'black',textAlign:'center'}}
                    onChangeText={(text) => setCountry(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Address"
                    value={Address}
                    style={{color: 'black',textAlign:'center'}}
                    onChangeText={(text) => setAdd(text)}
                  />
                </Item>
                <Button regular block
                style={{backgroundColor:'#f3a137'}}
                onPress={doSignUp}>
                  <Text>SignUp</Text>
                </Button>
              </Form>
            </ScrollView>
          </Content>
        </Container>
      );
    
}

const mapDispatchToProps = {
    signUp: (data) => signUp(data)
}

SignUp.propTypes = {
    signUp: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SignUp)



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f0ef',
      flex: 1,
      justifyContent: 'flex-start',
    },
    imageContainer: {
      alignItems: 'center',
      marginVertical: 5,
    },
    progress: {width: null, marginBottom: 20},
    formItem: {
      textAlign: 'center',
      marginBottom: 20,
    },
  });