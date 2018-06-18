import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import ShimProduct from '../ShimmerView/shimmerProduct';

import Images from '../../contants/Images';

import styles from './styles';

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

class Products extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      loadShim: false,
    }
  }

  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loadShim: true
      })
    }, 2000)
  }

  render() {

    console.log(this.state.loadShim)

    return (
      <View style={styles.container}>
      {
        this.state.loadShim === true ?
        <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) =>  item.id}
        renderItem={({item}) => ( 
          <View style={styles.boxProduct}>
          <Image style={styles.imgFeatured} source={item.image} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
          )
        }
      /> : 
      <ShimProduct /> 
      }
     
    </View>
    )
  }
}

export default Products;