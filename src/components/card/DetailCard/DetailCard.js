import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './DetailCard.style';

import useFetch from '../../../hooks/useFetch';

import GenerateImageUrl from '../../../utilities/GenerateImageUrl';

const DetailCard = ({data, col}) => {
  const comsId = data.resourceURI.split("http://gateway.marvel.com/v1/public/" + col +"/")[1];
  const {loading, error, data: imageData} = useFetch("comics", "/" + comsId)
  
  if(error) {
    return <Text>error</Text>
  }
  if(loading) {
    return <Text>Login</Text>
  }
  return (
    <TouchableOpacity >
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: GenerateImageUrl(imageData[0])}} />
      <View style={styles.inner_container}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>Çizgi Roman İsmi:</Text>
          <Text style={styles.car_name}>{data.name}</Text>
        </View>
      </View>
      </View>
    </TouchableOpacity>
  );
};

export default DetailCard;
