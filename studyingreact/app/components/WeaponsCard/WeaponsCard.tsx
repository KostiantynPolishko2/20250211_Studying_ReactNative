import React, {FC} from "react";
import { View, Text, StyleSheet } from "react-native";

interface IWeaponsCard {
    model?: string,
}

const WeaponsCard:FC<IWeaponsCard> = (props) => {
    return(
        <View style={styles.body}>
            <Text style={styles.textRow}>{props.model || 'UNDEFINED'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#92d442',
        width: 250,
        height: 200,
        margin: 5,
        padding: 2,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
    },
    textRow: {
        textAlign:'center',
        fontSize: 16,
        color: '#fafa4d',
        fontWeight: 600,
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: 'black',
        textShadowRadius: 5,
    }
});

export default WeaponsCard;