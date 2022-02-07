import { View, FlatList,  Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AxiosApi = () => {
    

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
          const res = await axios.get(
            'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10'
          );
          setData(res.data);
        } catch (error) {
            console.error(error);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

      
    
  return (
    <View style={{flex:1, padding:24}}>

            <FlatList 
              data={data}
              keyExtractor = {item => item.id}
              renderItem={({item}) => <Text style={{fontSize: 25}}> {item.id} - {item.title}  </Text>}
            />
        
      <Text>fetching data....</Text>
    </View>
  );
};

export default AxiosApi;
