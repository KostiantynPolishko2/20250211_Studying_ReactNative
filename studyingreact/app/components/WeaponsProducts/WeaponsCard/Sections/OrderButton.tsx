import React, { FC } from "react";
import { Button } from "react-native-elements";
import { View, StyleSheet, Alert, Text } from "react-native";

interface IOrderButton {
    isAble?: boolean,
    handleOrder: ()=>void,
}

const OrderButton: FC<IOrderButton> = (props) => 
    <View style={styles.body}>
        <Button 
            title="ORDER"
            onPress={props.handleOrder}
            buttonStyle = {styles.buttonSize}
            titleStyle = {styles.buttonText}
            disabled = {!props.isAble}
        />
    </View>

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 5,
    },
    buttonSize: {
        width: 60,
        padding: 0,
    },
    buttonText: {
        fontSize: 14,
        // lineHeight: 30,
    }
});

export default OrderButton;