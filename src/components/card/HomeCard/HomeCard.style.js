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
    borderWidth: borderwidths.container,
    borderRadius: borderradiuses.container,
    borderColor: "gray",
    shadowColor: "gray",
    shadowOpacity: 1,
    shadowRadius: 2
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 7,
  },
  car_name: {
    fontSize: 20,
    marginStart: 10,
  },
});
