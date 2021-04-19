import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textMessage: {
    color: colors.white,
  },
  textRetry: {
    color: colors.white,
    fontSize: 12,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
