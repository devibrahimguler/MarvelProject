import {StyleSheet} from 'react-native';
import margins from '../../../styles/margins';
import paddings from '../../../styles/paddings';
import borderwidths from '../../../styles/borderwidths';
import borderradiuses from '../../../styles/borderradiuses';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: margins.container,
    padding: paddings.container,
    shadowColor: "gray",
    shadowOpacity: 1,
    shadowRadius: 2,
    width: 220,
  },
  image: {
    height: 270,
    width: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  car_name: {
    fontSize: 20,
    marginStart: 10,
  },
});
