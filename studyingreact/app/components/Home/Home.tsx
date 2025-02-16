import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Home: FC = () => {
    return(
        <View style={styles.body}>
            <Text>home page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b8e9ff',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Home;