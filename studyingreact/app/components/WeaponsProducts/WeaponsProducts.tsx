import React, { FC, useState, useEffect, createContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import CardLoad from "./WeaponsCard/CardLoad";
import { IWeaponsData } from "./WeaponsCard/Sections/WeaponsData";
import { weapons, models} from "../../constants/CardsDates";
import WeaponsItems from "./WeaponsItems/WeaponsItems";
import { fetchWeapon } from "./WeaponsCard/api";
import CardStarted from "./WeaponsCard/CardStarted";

export const ContextHandleSetWeapon = createContext((model: string):void=>{});

interface IWeaponsProducts {}

const WeaponsProducts: FC<IWeaponsProducts> = () => {

    const [weaponModels, setWeaponModels] = useState<string[]>([]);
    const [weapon, setWeapon] = useState<IWeaponsData | null>(null);

    const handleSetWeapon = (model: string) => {
        // console.log(model.toLowerCase());
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
            {weapon? <CardLoad weapons={weapon}/> : <CardStarted/>}
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

export default WeaponsProducts;