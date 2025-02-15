import React, { FC, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import WeaponsCard from "./WeaponsCard/WeaponsCard";
import { IWeaponsData } from "./WeaponsCard/WeaponsData";
import { weapons as  _weapons} from "../constants/CardsDates";
import { DisplayWrapper } from "./WeaponsCard/WeaponsCard.styled";
import WeaponsItem from "./WeaponsItems/WeaponsItem";

interface IWeapons {}

const Weapons: FC<IWeapons> = () => {

    const [weapons, setWeapons] = useState<IWeaponsData[]>(_weapons);

    return (
        <View style={styles.body}>
            <Text style={styles.textRow}>Weapons</Text>
            <DisplayWrapper>
                {weapons.map((weapon, i) => <WeaponsItem key={i} model={weapon.model}/>)}
            </DisplayWrapper>
            <WeaponsCard weapons={weapons[0]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        backgroundColor: '#dfffb8',
    },
        textRow: {
        textAlign:'center',
    }
});

export default Weapons;