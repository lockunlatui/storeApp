import React from 'react';
import {
  ScrollView,
  Text,
  Dimensions
} from 'react-native';

import { 
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createMaterialTopTabNavigator
}  from 'react-navigation';

import { HomeStack } from '../HomeStack';
import Home from '../../containers/Home';
import Category from '../../containers/Category';

import Header from '../../components/Header';

const {height, width} = Dimensions.get('window');

const RootStack = createStackNavigator({
  Screen_Home: {
    navigationOptions: ({ navigation, name }) => ({
      header: <Header navigation={navigation} name="My Store" />
    }),
    screen: createMaterialTopTabNavigator({
      Screen_Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          title: 'Phone',
        }),
      },
      Screen_Category1: {
        screen: Category,
        navigationOptions: ({ navigation }) => ({
          title: 'Laptop',
        }),
      },
      Screen_Category2: {
        screen: Category,
        navigationOptions: ({ navigation }) => ({
          title: 'Table ',
        }),
      },
      Screen_Category3: {
        screen: Category,
        navigationOptions: ({ navigation }) => ({
          title: 'Desktop',
        }),
      }
    }, {
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        scrollEnabled: true,
          indicatorStyle: {
            backgroundColor: "#f25053",
            height: 3
          },
          tabStyle: {
            width:  ( height / width) *  70,
          },
          labelStyle: {
            fontSize: ( height / width) * 7,
            fontWeight: "500"
          },
          activeTintColor: '#fff',
          style: {
            backgroundColor: '#333',
          },
      }
    })
  },
  Screen_Category: {
    screen: Category
  }
});

const DrawerStack = createDrawerNavigator({
  RootScreen: RootStack,
  CategorySceen: Category
},{
  // define customComponent here
  contentComponent: (props) => 
  <ScrollView>
    <Text>Material Mockups</Text>
    <DrawerItems {...props} />
  </ScrollView>
})

export default DrawerStack;
