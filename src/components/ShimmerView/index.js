import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import Images from '../../contants/Images';

const ShimmerView = () => {

  return (
  <View style={styles.container}>
    <View style={styles.boxFeature}>
      <View style={styles.boxImgFeature}>
        <ShimmerPlaceHolder style={styles.imgFeatured} autoRun={true} />
      </View>

      <View style={styles.infoFeature}>
        <ShimmerPlaceHolder style={styles.nameFeature} autoRun={true} />
        <ShimmerPlaceHolder style={styles.priceFeature} autoRun={true} />
      </View>
      
      <View style={styles.boxContentFeature}>
        <ShimmerPlaceHolder style={styles.contentShimmer} autoRun={true} />
      </View>

      <View style={styles.boxBtnFeature}>
      <View style={styles.btnRating}>
        <ShimmerPlaceHolder autoRun={true} />
      </View>
      <View style={styles.btnFeature}>
        <ShimmerPlaceHolder style={styles.btnShimmer} autoRun={true} />
    </View>
    </View>

    </View>
  </View>
  );

}

export default ShimmerView;