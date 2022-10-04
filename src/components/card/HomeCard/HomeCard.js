import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './HomeCard.style';

import GenerateImageUrl from '../../../utilities/GenerateImageUrl';

const HomeCard = ({navigation, data, title}) => {

  const toDetailPage = () => {
    navigation.navigate("DetailPage", {data});
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={toDetailPage}>
      <Image style={styles.image} source={{uri: GenerateImageUrl(data)}} />
      <View style={styles.inner_container}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.car_name}>{data.name ? data.name : data.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
