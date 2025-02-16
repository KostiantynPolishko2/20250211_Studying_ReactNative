import React, { FC, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ContextHandleSetWeapon } from "../WeaponsProducts";

interface IWeaponsItem {
    model: string,
}

const WeaponsItem: FC<IWeaponsItem> = ({model}) => {

    const [isActive, setIsActive] = useState<boolean>(false);

    const handleSetWeapon = useContext(ContextHandleSetWeapon);

    // dynamic styles for event onTouchStart/End
    const dynamicStyles = {
        body: {
            ...styles.body,
            backgroundColor: isActive? '#229e3d' : '#cddb8f',
        },
        text: {
            ...styles.text,
            color: isActive? 'white' : 'black',
        }
    }

    return(
        <View 
            style={dynamicStyles.body} 
            onTouchStart={()=>{handleSetWeapon(model), setIsActive(true)}} 
            onTouchEnd={()=>{setIsActive(false)}}
        >
            <Text style={dynamicStyles.text} >{model.toUpperCase()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        minWidth: '20%',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        boxShadow: '2 2 2 grey',
    },
    text: {
        textAlign: 'center',
        fontWeight: 600,
        color: 'black',
    },
});

export default WeaponsItem;