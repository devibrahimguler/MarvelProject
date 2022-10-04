import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './BasicCard.style';

import FlatListCard from '../FlatListCard';

const BasicCard = ({navigation, data}) => {
  return (
    <View style={styles.container}>
      <FlatListCard
        navigation={navigation}
        data={data.comics}
        title={'Çizgi Romanlar :'}
        row={'comics'}
        col={'comics'}
        desctription={'Bu karakter hakkında Çizgi Roman bulunamadı!'}
      />

      <FlatListCard
        navigation={navigation}
        data={data.series}
        title={'Çizgi Roman Serileri :'}
        row={'series'}
        col={'comics'}
        desctription={'Bu karakter hakkında Çizgi Roman Serisi bulunamadı!'}
      />
      <FlatListCard
        navigation={navigation}
        data={data.stories}
        title={'Çizgi Roman Hikayeleri :'}
        row={'stories'}
        col={'comics'}
        desctription={'Bu karakter hakkında Çizgi Roman Hikayesi bulunamadı!'}
      />
      <FlatListCard
        navigation={navigation}
        data={data.events}
        title={'Çizgi Roman Olayları :'}
        row={'events'}
        col={'comics'}
        desctription={'Bu karakter hakkında Çizgi Roman Olayı bulunamadı!'}
      />
    </View>
  );
};

export default BasicCard;
