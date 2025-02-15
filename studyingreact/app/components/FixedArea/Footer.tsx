import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer: FC = () => {
    return(
        <View style={styles.body}>
            <Text style={styles.text}>footer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#85857a',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
    }
});

export default Footer;