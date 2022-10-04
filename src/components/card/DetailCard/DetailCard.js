import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './DetailCard.style';

import useFetch from '../../../hooks/useFetch';

import GenerateImageUrl from '../../../utilities/GenerateImageUrl';

const DetailCard = ({navigation,data, col, row}) => {
  const comsId = data.resourceURI.split(
    'http://gateway.marvel.com/v1/public/' + row + '/',
  )[1];
  const {loading, error, data: imageData} = useFetch(col, '/' + comsId);
  const toDetailPage = () => {
    navigation.navigate("DetailPage", {data: imageData[0]});
  }
  return (
    <TouchableOpacity onPress={toDetailPage}>
      <View style={styles.container}>
        {error ? (
          <Text>Error Message</Text>
        ) : loading ? (
          <ActivityIndicator size={25} />
        ) : (
          <>
            <Image
              style={styles.image}
              source={{uri: GenerateImageUrl(imageData[0])}}
            />
            <View style={styles.inner_container}>
              <View style={styles.inner_container}>
                <Text style={styles.title}>
                  {col == 'comics' ? 'Çizgi Roman İsmi:' : 'Kahraman İsmi:'}
                </Text>
                <Text style={styles.car_name}>{data.name}</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DetailCard;
