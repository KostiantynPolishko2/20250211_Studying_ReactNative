import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Header: FC = () => {
    return(
        <View style={styles.body}>
            <Text>header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c9c991',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

export default Header;