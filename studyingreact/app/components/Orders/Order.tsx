import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Order: FC = () => {
    return(
        <View style={styles.body}>
            <Text>order page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7bf9e',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Order;