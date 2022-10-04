import React from 'react';
import {SafeAreaView, ScrollView, Image, View, Text, FlatList} from 'react-native';
import styles from './CharacterDetail.style';

import GenerateImageUrl from '../../utilities/GenerateImageUrl';

import FlatListCard from '../../components/card/FlatListCard';

const CharacterDetail = ({route}) => {
  const data = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.inner_container}>
          <Image style={styles.image} source={{uri: GenerateImageUrl(data)}} />
          <Text style={styles.car_name}>{data.name}</Text>
        </View>
        <FlatListCard data={data.comics.items} title={"Çizgi Romanlar :"} col={"comics"} />
        <FlatListCard data={data.series.items} title={"Çizgi Roman Serileri :"} col={"series"} />
        <FlatListCard data={data.stories.items} title={"Çizgi Roman Hikayeleri :"} col={"stories"} />
        <FlatListCard data={data.events.items} title={"Çizgi Roman Olayları :"} col={"events"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterDetail;
