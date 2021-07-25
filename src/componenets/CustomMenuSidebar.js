import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

// Define a variable for selected screen index
global.selectedScreenIndex = 0;
 
export default class CustomMenuSidebar extends Component {
  constructor() {
    super();
    // Main Top Large Image of the Custom Sidebar
    this.headerImage = 'https://www.techup.co.in/wp-content/uploads/2019/02/techup_logo_final_wb.jpg';
    // OptionsList which will used in map loop in render method 
    this.optionsList = [
      {
        navOptionIcon: 'camera',
        navOptionTitle: 'Home',
        screenToNavigate: 'homeScreen',
      },
      {
        navOptionIcon: 'image',
        navOptionTitle: 'MyList',
        screenToNavigate: 'myList',
      }
    ];
  }
  render() {
    return (
      <View style={styles.containerSideMenu}>
        {/*Navigation Bar header  Image */}
        <Image
          source={{ uri: this.headerImage }}
          style={styles.headerStyle}
        />
        {/*Divider between header Image and options*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from jsonArray using loop*/}
        <View style={{ width: '100%' }}>
          {this.optionsList.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.selectedScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionIcon} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.selectedScreenIndex === key ? 'blue' : 'black',
                }}
                onPress={() => {
                  global.selectedScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionTitle}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   headerStyle: {
    resizeMode: 'cover',
    width: 150,
    height: 150,
  },
  containerSideMenu: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  }
 
});