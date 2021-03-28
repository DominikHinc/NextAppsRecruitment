import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components/button/button';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  COUNTER_MAX_VALUE,
  COUNTER_MIN_VALUE,
  decrement,
  increment,
} from '../../store/slices/counter';
import {CounterScreenProps} from './counter-screen.props';
import {counterScreenStyles} from './counter-screen.styles';

enum ActionType {
  INCREMENT,
  DECREMENT,
}

const LONG_PRESS_DELAY = 500;
const INTERVAL_DELAY = 100;

export const CounterScreen = ({}: CounterScreenProps) => {
  const [intervalState, setIntervalState] = useState<{
    inProgress: boolean;
    type: ActionType | null;
  }>({inProgress: false, type: null});

  let intervalRef = useRef<NodeJS.Timeout>({} as NodeJS.Timeout);

  const counterState = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const buttonPressHandler = useCallback(
    (type: ActionType) => {
      dispatch(type === ActionType.INCREMENT ? increment() : decrement());
    },
    [dispatch],
  );

  const longButtonPressHandler = useCallback(
    (type: ActionType) => {
      setIntervalState({inProgress: true, type});
    },
    [setIntervalState],
  );

  const buttonPressOutHandler = useCallback(() => {
    setIntervalState({inProgress: false, type: null});
  }, [setIntervalState]);

  useEffect(() => {
    if (intervalState.inProgress) {
      intervalRef.current = setInterval(() => {
        intervalState.inProgress &&
          buttonPressHandler(intervalState.type as ActionType);
      }, INTERVAL_DELAY);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [buttonPressHandler, intervalState]);

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
            onPress={() => buttonPressHandler(ActionType.INCREMENT)}
            onLongPress={() => longButtonPressHandler(ActionType.INCREMENT)}
            onPressOut={buttonPressOutHandler}
            delayLongPress={LONG_PRESS_DELAY}
            title="increase"
            disabled={counterState >= COUNTER_MAX_VALUE}
          />
        </View>
        <View style={counterScreenStyles.buttonContainer}>
          <Button
            onPress={() => buttonPressHandler(ActionType.DECREMENT)}
            onLongPress={() => longButtonPressHandler(ActionType.DECREMENT)}
            onPressOut={buttonPressOutHandler}
            title="decrease"
            disabled={counterState <= COUNTER_MIN_VALUE}
          />
        </View>
      </View>
    </View>
  );
};
