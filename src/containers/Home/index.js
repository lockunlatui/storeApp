import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import strings from '../../contants/Strings';

import Featured from '../../components/Featured';
import ShimmerView from '../../components/ShimmerView';
import Products from '../../components/Products';

const {height, width} = Dimensions.get('window');

class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
      loadShimmer: false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loadShimmer: true
      })
    }, 2000)
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
      <View style={{paddingTop: 10, paddingLeft: 10}}>
        <Text>
        Featured
        </Text>
      </View>
      {this.state.loadShimmer === false ?
        <ShimmerView /> :
        <Featured />
      }
      <View style={{paddingLeft: 10}}>
      <Text>
      Subcategory
      </Text>
    </View>
      <Products />
      </ScrollView>
    )
  }
}

export default Home;