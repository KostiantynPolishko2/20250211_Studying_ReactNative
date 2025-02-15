import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IWeaponsItem {
    model: string,
}

const WeaponsItem: FC<IWeaponsItem> = ({model}) => 
    <View style={styles.body}>
        <Text style={styles.text}>{model.toUpperCase()}</Text>
    </View>

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#cddb8f',
        width: '25%',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        fontWeight: 600,
    }
})

export default WeaponsItem;