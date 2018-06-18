import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

class Category extends Component {

  render() {

    return (
      <View>
        <Button onPress={() => this.props.navigation.goBack(null)} title="Go Home" />
      </View>
    )
  }
}

export default Category;