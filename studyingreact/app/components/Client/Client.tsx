import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Client: FC = () => {
    return(
        <View style={styles.body}>
            <Text>client page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8d0a2',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Client;