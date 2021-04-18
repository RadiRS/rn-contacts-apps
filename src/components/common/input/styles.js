import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/theme';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
  },
  wrapper: {
    marginTop: 5,
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
