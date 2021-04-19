import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme';

export default StyleSheet.create({
  logoImage: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 12,
  },
  form: {
    marginTop: 20,
  },
  registerSection: {
    flexDirection: 'row',
    marginTop: 8,
  },
  touchRegister: {
    marginLeft: 8,
  },
  textRegister: {
    color: colors.primary,
  },
});
