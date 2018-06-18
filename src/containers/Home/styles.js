import {
  Dimensions,
  StyleSheet
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex: 1
  }
});

export default styles;