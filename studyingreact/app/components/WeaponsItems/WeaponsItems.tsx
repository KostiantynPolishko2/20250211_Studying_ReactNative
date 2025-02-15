import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IWeaponsData } from "../WeaponsCard/WeaponsData";
import WeaponsItem from "./WeaponsItem";

interface IWeaponsItem {
    weapons: IWeaponsData[],
}

const WeaponsItems: FC<IWeaponsItem> = (props) => {
    return(
        <View>
            {props.weapons.map((weapon, i) => <WeaponsItem key={i} model={weapon.model}/>)}
        </View>
    );
}

export default WeaponsItem;