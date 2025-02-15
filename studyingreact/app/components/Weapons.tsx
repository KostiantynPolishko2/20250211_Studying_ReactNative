import React, { FC, useState, useEffect, createContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import WeaponsCard from "./WeaponsCard/WeaponsCard";
import { IWeaponsData } from "./WeaponsCard/WeaponsData";
import { weapons, models} from "../constants/CardsDates";
import WeaponsItems from "./WeaponsItems/WeaponsItems";
import { fetchWeapon } from "./WeaponsCard/api";

export const ContextHandleSetWeapon = createContext((model: string):void=>{});

interface IWeapons {}

const Weapons: FC<IWeapons> = () => {

    const [weaponModels, setWeaponModels] = useState<string[]>([]);
    const [weapon, setWeapon] = useState<IWeaponsData | null>(null);

    const handleSetWeapon = (model: string) => {
        console.log(model.toLowerCase());
        setWeapon(fetchWeapon(model, weapons));
    }

    useEffect(() => {
        setWeaponModels(models);
    }, models)

    return (
        <View style={styles.body}>
            <Text style={styles.textRow}>PRODUCTS</Text>
            <ContextHandleSetWeapon.Provider value={handleSetWeapon}>
                <WeaponsItems models={weaponModels}/>
            </ContextHandleSetWeapon.Provider>
            {weapon? <WeaponsCard weapons={weapon}/> : <></>}
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