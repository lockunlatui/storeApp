import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';


const Header = ({navigation, name}) => {

  return (
     <View style={styles.positionTitle}>

     <View style={styles.headerLeft}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.btnMenu}>
        <Icon name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.titleHeader}>{name}</Text>
      </View>

      <View style={styles.headerRight}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.btnMenu}>
        <Icon name="search" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.btnMenu}>
        <Icon name="shopping-cart" size={24} color="#fff" />
      </TouchableOpacity>
      </View>

    </View>
  );

}

export default Header;