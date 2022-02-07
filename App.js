import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screen/IndexScreen';
import CreateScreen from './src/screen/CreateScreen';
import FlatList from './src/screen/FlatListData';
import EffectHook from './src/screen/EffectHook';
import ContextApi from './src/screen/ContextApi';
import ReducerHook from './src/screen/ReducerHook';
import AxiosApi from './src/screen/AxiosApi';
import FetchApi from './src/screen/FetchApi';


import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options= {{ 
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingRight: 10,
                width: 120,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                {/* <Feather name="plus" size={30} /> */}
                {/* <Icon name="plus" size={30} /> */}
                <Icon name="plus" size={30} color="#000000" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="FlatList" component={FlatList} />
      <Stack.Screen name="Effect" component={EffectHook} />
      <Stack.Screen name="Context" component={ContextApi} />
      <Stack.Screen name="Reducer" component={ReducerHook} />
      <Stack.Screen name="Axios" component={AxiosApi} />
      <Stack.Screen name="Fetch" component={FetchApi} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
