import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Searchbar from '../Searchbar/Searchbar';

export default function HomeScreen() {

    const [searchElem, setSearchElem] = useState('');

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Searchbar searchElem = {searchElem} onSearchElemChange = {setSearchElem} />
        <Text>Home!</Text>
      </View>
    );
}