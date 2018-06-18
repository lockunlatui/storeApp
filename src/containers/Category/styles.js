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
  },
  positionTitle: {
    marginLeft: width / 20,
    flexDirection: 'row'
  },
  btnMenu: {
    width: width / 20,
    height: height / 25
  }
});

export default styles;