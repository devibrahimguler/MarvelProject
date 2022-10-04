import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './FlatListCard.style';

import DetailCard from '../DetailCard';

const FlatListCard = ({navigation, data, title, col, row, desctription}) => {
  const renderCard = ({item}) => <DetailCard navigation={navigation} data={item} col={col} row={row} />;
  return (
    <View style={styles.container}>
      {data.available == 0 ? (
        <Text>{desctription}</Text>
      ) : (
        <>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            horizontal={true}
            data={data.items}
            renderItem={renderCard}
          />
        </>
      )}
    </View>
  );
};

export default FlatListCard;
