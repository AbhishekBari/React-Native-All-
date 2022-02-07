import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';

const FlatListData = () => {
const [data, setData] = useState(null);

useEffect(() => {
  const getData = async () => {
    const resp = await fetch('https://api.github.com/users');
    const data = await resp.json();
    setData(data);
  }
  getData();
}, [])

  return (
    <View style={styles.container}>
      <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) =>
      <Text style={styles.item}>{item.login} - {item.type}</Text>
      }
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: '#ffc600',
    fontSize: 24
  }
})



export default FlatListData;
