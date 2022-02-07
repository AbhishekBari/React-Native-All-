import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CreateScreen = ({navigation}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn(`You have clicked the button ${count} time`);
  }, [count])
  return (
    <View>
      <Text>Create Screen</Text>
      <Text style={styles.countText}>count is {count}</Text>
      <Button title = 'press me' onPress={() => setCount(count + 1)}/>
      <Button title = 'reset' onPress={() => setCount(count - 1) }/>
      <Button title = 'reset' onPress={() => setCount(0) }/>
       {/* <Icon name="rocket" size={30} color="#900" /> */}

    </View>
  );
};

const styles = StyleSheet.create({
  countText:{
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold'
  }
});

export default CreateScreen;
