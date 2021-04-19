import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import {colors} from '../../../assets/theme';

import styles from './styles';

const Input = ({
  label,
  style,
  onChangeText,
  value,
  placeholder,
  keyboardType,
  icon,
  iconPosition,
  secure,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const flexDirection = iconPosition === 'right' ? 'row-reverse' : 'row';
  const borderColor = error
    ? colors.danger
    : focused
    ? colors.primary
    : colors.grey;

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper, {flexDirection, borderColor}]}>
        {!!icon && icon}
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secure}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
