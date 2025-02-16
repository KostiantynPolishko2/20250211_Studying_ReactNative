import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { IWeaponsData } from "../WeaponsCard/Sections/WeaponsData";
import WeaponsItem from "./WeaponsItem";
import { styles as generalStyles } from "@/app/constants/styles";

interface IWeaponsItem {
    models: string[],
}

const WeaponsItems: FC<IWeaponsItem> = (props) => {
    return(
        <View style={[generalStyles.flex_row, styles.body]}>
            {props.models.map((model, i) => <WeaponsItem key={i} model={model}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#90d180',
        width: '95%',
        borderRadius: 5,
    }
});

export default WeaponsItems;