import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {colors} from '../../assets/theme';

import styles from './styles';

const MessageComponent = ({
  style,
  children,
  danger,
  info,
  success,
  message,
  onRetry,
  onDismiss,
  ...props
}) => {
  const [isDismissed, setDismissed] = useState(false);

  const backgroundColor = info
    ? colors.secondary
    : danger
    ? colors.danger
    : info
    ? colors.grey
    : success
    ? colors.success
    : colors.primary;

  if (isDismissed) {
    return null;
  }

  const onPressDismiss = () => {
    if (typeof onDismiss === 'function') {
      onDismiss();
    }
    setDismissed(true);
  };

  return (
    <View style={[styles.container, {backgroundColor}]} {...props}>
      <Text style={styles.textMessage}>{message}</Text>
      {onRetry && !onDismiss && (
        <TouchableOpacity onPress={onRetry} activeOpacity={0.7}>
          <Text style={styles.textRetry}>Retry</Text>
        </TouchableOpacity>
      )}
      {!!onDismiss && (
        <TouchableOpacity onPress={onPressDismiss} activeOpacity={0.7}>
          <Text style={styles.textRetry}>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MessageComponent;
