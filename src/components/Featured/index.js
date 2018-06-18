import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import Images from '../../contants/Images';

const Header = () => {

  return (
  <View style={styles.container}>
    <View style={styles.boxFeature}>
      <View style={styles.boxImgFeature}>
        <Image style={styles.imgFeatured} source={Images.imgFeatured} />
      </View>

      <View style={styles.infoFeature}>
        <Text style={styles.nameFeature}> Samsung Note 8</Text>
        <Text style={styles.priceFeature}> $800</Text>
      </View>
      
      <View style={styles.boxContentFeature}>
        <Text numberOfLines={2}>Galaxy Note 8 là niềm hy vọng vực lại dòng Note danh tiếng của Samsung với diện mạo nam tính, sang trọng.
         Trang bị camera kép xóa phông thời thượng, màn hình vô cực như trên S8 Plus,
          bút Spen với nhiều tính năng mới và nhiều công nghệ được Samsung ưu ái đem lên Note 8.</Text>
      </View>

      <View style={styles.boxBtnFeature}>
      <View style={styles.btnRating}>
        <StarRating
          starSize={24}
          disabled={true}
          maxStars={5}
          fullStarColor="gray"
          rating={2}
          buttonStyle={{paddingRight: 3}}
          emptyStarColor="#ddd"
        />
      </View>
      <View style={styles.btnFeature}>
      <TouchableOpacity style={styles.btnClickFeature}>
      <Icon name="shopping-basket" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnClickFeature}>
        <Icon name="favorite" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="more-vert" size={24} color="gray" />
      </TouchableOpacity>
    </View>
    </View>

    </View>
  </View>
  );

}

export default Header;