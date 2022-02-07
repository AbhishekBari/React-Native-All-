import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';

const EffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
         const interval = setInterval(() => {
             setCount(count + 1);
         }, 5000);   

         return () => {
             clearInterval(this.interval)
         }
    }, [count])

  return (
    <View>
      <Text>count incremented {count} times</Text>
    </View>
  );
};


export default EffectHook;
