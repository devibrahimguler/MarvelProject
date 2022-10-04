import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './FlatListCard.style';

import DetailCard from '../DetailCard';

const FlatListCard = ({data,title,col}) => {

  const renderCard = ({item}) => <DetailCard data={item} col={col} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderCard}
      />
    </View>
  );
};

export default FlatListCard;
