import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/button/button';
import {counterScreenStyles} from './counter-screen.styles';

interface MainScreenProps {}

export const CounterScreen = ({}: MainScreenProps) => {
  return (
    <View style={counterScreenStyles.screen}>
      <View style={counterScreenStyles.titleContainer}>
        <Text style={counterScreenStyles.title}>CounterApp</Text>
        <Text style={counterScreenStyles.subtitle}>
          Next level calculations
        </Text>
      </View>
      <View style={counterScreenStyles.counterContainer}>
        <Text style={counterScreenStyles.counter}>0</Text>
        <View style={counterScreenStyles.buttonContainer}>
          <Button onPress={() => {}} title="increase" />
        </View>
        <View style={counterScreenStyles.buttonContainer}>
          <Button onPress={() => {}} title="decrease" />
        </View>
      </View>
    </View>
  );
};
