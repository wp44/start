import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default listItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPress}>
            <View style={styles.listItem} >
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 2,
        borderRadius: 5,
        backgroundColor: "#eee"
    }
});