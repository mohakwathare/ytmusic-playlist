import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Searchbar(searchElem, onSearchElemChange) {
    return (
        <SearchBar
            placeholder="Search music...."
            onChangeText={elem => {onSearchElemChange(elem)}}
            value={searchElem}
        />
    );
}

const styles = StyleSheet.create({});