import {
  Dimensions,
  StyleSheet
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  titleHeader: {
    fontSize: width / 20,
    color: '#FFF',
    fontWeight: '500',
    marginLeft: width / 20,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  positionTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingTop: width / 35,
    paddingBottom: width / 35,
  },
  btnMenu: {
    width:  ( height / width) *  24,
    height: ( height / width) *  24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerRight:{
    flexDirection: 'row'
  },
  headerLeft:{
    flexDirection: 'row',
  }
});

export default styles;