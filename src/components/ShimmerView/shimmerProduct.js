import React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';

import Images from '../../contants/Images';

import styles from './styles';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const ShimmerProduct = () => {

  const data = [
    {
      id: 'a',
      name: ' Note 8',
      price: 100,
      image: Images.note8
    }, 
    {
      id: 'b',
      name : 'Samsung S9 ',
      price: 200,
      image: Images.s9
    },
    {
      id: 'c',
      name: 'Iphone X',
      price: 300,
      image: Images.iphonex
    },
    {
      id: 'd',
      name: ' Nokia 9',
      price: 100,
      image: Images.nokia9
    }, 
    {
      id: 'e',
      name : 'Nokia 6 ',
      price: 200,
      image: Images.nokia6
    },
    {
      id: 'f',
      name: 'Oppo F7',
      price: 300,
      image: Images.oppof7
    }
  ]

  return (
    <View style={styles.containerP}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) =>  item.id}
        renderItem={({item}) => (
            <View style={styles.boxProduct}>
              <ShimmerPlaceHolder  autoRun={true} style={styles.imgProduct} />
              <ShimmerPlaceHolder autoRun={true} style={styles.productName} />
              <ShimmerPlaceHolder autoRun={true} style={styles.productPrice} />
            </View>
          )
        }
      />
    </View>
  )

}

export default ShimmerProduct;