import {StyleSheet} from 'react-native';
import { Colors } from './colors';

const universalStyles = StyleSheet.create({
  containerView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors().FirstColor
  },
  row: {
    flexDirection: 'row',
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerOne: {
    justifyContent: 'center',
  },
  centerTwo: {
    alignItems: 'center',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  width100: {
    width: '100%',
  },
});

export default universalStyles;