import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Products: FC = () => {
    return(
        <View style={styles.body}>
            <Text>products page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaf38d',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Products;