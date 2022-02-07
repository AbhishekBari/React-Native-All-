import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IndexScreen = ({navigation}) => {
  return (
    <View>
      <Text>Index Screen</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Create')}
      />
      <Button
        title="Go to flatlist"
        onPress={() => navigation.navigate('FlatList')}
      />

      <Button
        title="Go to Effect"
        onPress={() => navigation.navigate('Effect')}
      />
      <Button
        title="Go to Context"
        onPress={() => navigation.navigate('Context')}
      />

      <Button
        title="Go to Reducer"
        onPress={() => navigation.navigate('Reducer')}
      />
      
      <Button
        title="Go to Axios Api"
        onPress={() => navigation.navigate('Axios')}
      />

<Button
        title="Go to Fetch Api"
        onPress={() => navigation.navigate('Fetch')}
      />
      
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <View style={styles.createIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          {/* <Feather name="plus" size={30} /> */}
          {/* <Icon name="plus" size={30} /> */}
          <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity>
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  createIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    width: 120,
  },
});

export default IndexScreen;
