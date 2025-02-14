import React, { FC } from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";

export interface IWeaponsData {
    model: string,
    name: string,
    isVisible: boolean,
    price: number,
    weight: number,
    description: string,
    image_path: string,
}

export interface IWeaponsCard {
    weapons?: IWeaponsData,
}

const WeaponsData: FC<IWeaponsCard> = (props) => {
    return(
        <View style={styles.body}>
            <Text style={styles.rowText}>model - {props.weapons?.model || 'undefined'}</Text>
            <Text style={styles.rowText}>name - {props.weapons?.name || 'undefined'}</Text>
            <Text style={styles.rowText}>price - {props.weapons?.price || '0.0'}</Text>
            <Text style={styles.rowText}>weight - {props.weapons?.weight || '0.0'}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#8089b4',
        width: 130,
        margin: 5,
        padding: 5,
        borderRadius: 5,
        height: 75,
    },
    rowText: {
        color: 'white',
        lineHeight: 17,
    }
});

export default WeaponsData;