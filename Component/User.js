import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    H1,
} from 'native-base'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'


const User = ({details}) => {
    // console.log(details)
    return (
        <Card style={styles.card}>
          <CardItem cardBody style={styles.cardItem}>
            <Image
              source={{
                uri: details.avatar_url,
                width: 150,
                height: 250,
              }}
              style={styles.image}
            />
          </CardItem>
          <CardItem style={styles.cardItem}>
            <H1 style={styles.text}>
              {details.name} 
            </H1>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.text2}>
              {details.bio} 
            </Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Icon name = "source-repository" size={40}/>
            <Text style={styles.text}>
              {details.public_repos} 
            </Text>
            
            <Icon2 name = "users" size={35} 
            style={{marginLeft:20
            ,marginRight:10}}/>
            <Text style={styles.text}>
              {details.followers} 
            </Text>

            <Icon2 name = "user-friends" size={35} 
            style={{marginLeft:20
            ,marginRight:10}}/>
            <Text style={styles.text}>
              {details.following} 
            </Text>

          </CardItem>
          
        </Card>
      );
}

export default User;


const styles = StyleSheet.create({
    card: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      borderWidth: 2,
    },
    cardItem: {
      backgroundColor: '#4f8a8b',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#fbd46d',
      marginTop: -50,
    },
    text: {
      color: '#eeeeee',
      textAlign: 'center',
    },
    text2: {
        color: '#eeeeee',
        textAlign: 'center',
        fontSize:20
      },
  });
  