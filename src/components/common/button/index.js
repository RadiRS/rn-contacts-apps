import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../../../assets/theme';

import styles from './styles';

const Button = ({
  label,
  disabled,
  loading,
  primary,
  secondary,
  danger,
  onPress,
  ...props
}) => {
  const backgroundColor = secondary
    ? colors.secondary
    : danger
    ? colors.danger
    : disabled
    ? colors.grey
    : colors.primary;

  const color = disabled ? 'black' : colors.white;
  const colorSpinner = disabled ? colors.primary : colors.white;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled}
      style={[styles.container, {backgroundColor}]}
      onPress={onPress}
      {...props}>
      <View style={styles.wrapper}>
        {loading && (
          <ActivityIndicator style={styles.spinner} color={colorSpinner} />
        )}
        {label && <Text style={{color}}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
