import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Seller: FC = () => {
    return(
        <View style={styles.body}>
            <Text>seller page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faffb8',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Seller;