import {
  Dimensions,
  StyleSheet
} from 'react-native';

const {height, width} = Dimensions.get('window');

const imgFeaturedWidth = ( width / 2 ) * 1.8 ;
const imgFeaturedHeight = imgFeaturedWidth / 710 * 466;

console.log('width', imgFeaturedWidth ,'height', imgFeaturedHeight)

const styles = StyleSheet.create({
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
    color: '#333',
    fontWeight: '500',
    fontSize: ( width / height ) * 25
  },
  priceFeature: {
    right: 10,
    color: '#f25053',
    fontWeight: '200',
    fontSize: ( width / height ) * 21
  },
  boxContentFeature: {
    padding: 10
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