import {
  Dimensions,
  StyleSheet
} from 'react-native';

const {height, width} = Dimensions.get('window');

const imgFeaturedWidth = ( width / 8 ) * 2.08;
const imgFeaturedHeight = imgFeaturedWidth / 400 * 460 ;

console.log('width', imgFeaturedWidth ,'height', imgFeaturedHeight)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgFeatured: {
    height: imgFeaturedHeight,
    width: imgFeaturedWidth,
  },
  boxProduct: {
    backgroundColor: '#fff',
    padding: 5,
    margin: 10
  },
  productName: {
    marginTop: 10,
    color: '#333',
    fontWeight: '500',
    fontSize: ( width / height ) * 23
  },
  productPrice: {
    color: '#f25053',
    fontWeight: '200',
    fontSize: ( width / height ) * 21,
  }
});

export default styles;