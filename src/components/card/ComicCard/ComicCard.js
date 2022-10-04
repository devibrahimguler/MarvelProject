import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './ComicCard.style';

import GenerateImageUrl from '../../../utilities/GenerateImageUrl';

const ComicCard = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: GenerateImageUrl(data)}} />
      <View style={styles.inner_container}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>Çizgi Roman İsmi:</Text>
          <Text style={styles.car_name}>{data.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ComicCard;
