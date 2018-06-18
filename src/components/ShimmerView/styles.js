import {
  Dimensions,
  StyleSheet
} from 'react-native';

const {height, width} = Dimensions.get('window');

const imgFeaturedWidth = ( width / 2 ) * 1.8 ;
const imgFeaturedHeight = imgFeaturedWidth / 710 * 466;

const imgProductWidth = ( width / 8 ) * 2.08;
const imgProductHeight = imgProductWidth / 400 * 460 ;

console.log('width', imgFeaturedWidth ,'height', imgFeaturedHeight)

const styles = StyleSheet.create({
  containerP: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxProduct: {
    backgroundColor: '#fff',
    padding: 5,
    margin: 10
  },
  productName: {
    marginTop: 10,
    width: ( width / height ) * 23
  },
  productPrice: {
    marginTop: 10,
    width: ( width / height ) * 21,
  },
  container: {
    padding: 10
  },
  boxFeature:{
    backgroundColor: '#fff'
  },
  imgFeatured: {
    height: imgFeaturedHeight,
    width: imgFeaturedWidth,
  },
  imgProduct: {
    height: imgProductHeight,
    width: imgProductWidth,
  },
  boxImgFeature: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameFeature: {
    left: 10,
  },
  priceFeature: {
    right: 10,
    width: width * 0.2
  },
  btnShimmer: {
    right: 10,
    width: width * 0.2
  },
  boxContentFeature: {
    padding: 10
  },
  contentShimmer:{
    width: '100%'
  },
  boxBtnFeature:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10
  },
  btnRating:{
    left: 10
  },
  btnFeature: {
    flexDirection: 'row',
  },
  btnClickFeature: {
    marginRight: 10
  }
});

export default styles;