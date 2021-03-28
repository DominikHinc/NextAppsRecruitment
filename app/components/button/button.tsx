import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './button.props';
import {buttonStyles} from './button.styles';

export const Button = ({title, ...props}: ButtonProps) => {
  return (
    <View
      style={[
        buttonStyles.shadowContainer,
        props.disabled && buttonStyles.disabled,
      ]}>
      <TouchableOpacity style={buttonStyles.touchableContainer} {...props}>
        <Text style={buttonStyles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
