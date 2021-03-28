import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/button/button';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {COUNTER_MAX_VALUE, increment} from '../../store/slices/counter';
import {counterScreenStyles} from './counter-screen.styles';

interface MainScreenProps {}

export const CounterScreen = ({}: MainScreenProps) => {
  const counterState = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const increaseHandler = () => {
    dispatch(increment());
  };

  return (
    <View style={counterScreenStyles.screen}>
      <View style={counterScreenStyles.titleContainer}>
        <Text style={counterScreenStyles.title}>CounterApp</Text>
        <Text style={counterScreenStyles.subtitle}>
          Next level calculations
        </Text>
      </View>
      <View style={counterScreenStyles.counterContainer}>
        <Text style={counterScreenStyles.counter}>{counterState}</Text>
        <View style={counterScreenStyles.buttonContainer}>
          <Button
            onPress={increaseHandler}
            title="increase"
            disabled={counterState >= COUNTER_MAX_VALUE}
          />
        </View>
        <View style={counterScreenStyles.buttonContainer}>
          <Button onPress={() => {}} title="decrease" />
        </View>
      </View>
    </View>
  );
};
