import { View, Text } from 'react-native';
import React, { useState } from 'react';

const userDetailContext = React.createContext();

const ContextApi = () => {
const [userDetails] = useState({
    name: 'Abhishek',
    age: 23,
    city: 'Burhanpur'
})

  return (
   <userDetailContext.Provider value={userDetails} >
    <Text style={{fontSize: 22}}>This is the Parent component</Text>
    <ChildComponent />
   </userDetailContext.Provider>
  );
};

const ChildComponent = () => {
    return (
        <>
        <Text style={{fontSize: 18}}>this is ChildComponent</Text>
        <SubChildComponent />
        </>
    )
}

const SubChildComponent = () => {
    const contextData = React.useContext(userDetailContext)
    return (
        <>
        <Text style={{fontSize: 15}}>this is subchildcompoent</Text>
        <Text style={{fontWeight: 'bold'}}>User Name: {contextData.name}</Text>
        <Text style={{fontWeight: 'bold'}}>User Age: {contextData.age}</Text>
        <Text style={{fontWeight: 'bold'}}>User City: {contextData.city}</Text>
        </>
    )
}

export default ContextApi;
