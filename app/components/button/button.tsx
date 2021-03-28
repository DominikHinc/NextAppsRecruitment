import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './button.props';
import {buttonStyles} from './button.styles';

export const Button = ({title, onPress}: ButtonProps) => {
  return (
    <View style={buttonStyles.shadowContainer}>
      <TouchableOpacity style={buttonStyles.touchableContainer}>
        <Text style={buttonStyles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
