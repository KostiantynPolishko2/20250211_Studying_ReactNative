import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import RecordData from "./RecordData";
import { styles as _styles } from "@/app/constants/styles";

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
    weapons?: IWeaponsData | null,
}

const WeaponsData: FC<IWeaponsCard> = (props) => {
    return(
        <View style={styles.body}>
            <RecordData type="model" value={props.weapons?.model}/>
            <RecordData type="name" value={props.weapons?.name}/>
            <RecordData type="price, uah" value={props.weapons?.price.toString()}/>
            <RecordData type="weight, kg" value={props.weapons?.weight.toString()}/>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#5360a1',
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