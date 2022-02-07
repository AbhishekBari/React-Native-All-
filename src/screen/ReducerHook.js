import {View, Text, Button} from 'react-native';
import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    case 'reset':
      return 0;
    default:
      throw new Error('unExprected action');
  }
};

const ReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <View>
      <Text style={{fontSize : 22}}>{count}</Text>
      <Button title='Add' onPress={() => dispatch('add')}/>
      <Button title='Subtract' onPress={() => dispatch('subtract')}/>
      <Button title='Reset' onPress={() => dispatch('reset')}/>
    </View>
  );
};

export default ReducerHook;
