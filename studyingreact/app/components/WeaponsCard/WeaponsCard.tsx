import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import WeaponsImage from "./WeaponsImage";
import WeaponsData from "./WeaponsData";
import OrderButton from "./OrderButton";
import { DisplayWrapper } from "./WeaponsCard.styled";
import { IWeaponsCard } from "./WeaponsData";
import Description from "./Description";

const WeaponsCard:FC<IWeaponsCard> = (props) => {

    const handleOrderWeapons = () => {
        console.log('weapons', props.weapons);
    }

    const bgColor = props.weapons?.isVisible? 'lightblue' : '#a3a395';

    return(
        <View style={styles.body}>
            <Text style={styles.textRow}>{props.weapons?.model?.toLocaleUpperCase() || 'UNDEFINED'}</Text>
            <DisplayWrapper bgColor={bgColor}>
                <WeaponsImage model={'ags17'}/>
                <View>
                    <WeaponsData weapons={props.weapons}/>
                    <OrderButton isAble={props.weapons?.isVisible} handleOrder={handleOrderWeapons}/>
                </View>
            </DisplayWrapper>
            <Description description={props.weapons?.description || 'none'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#92d442',
        width: 250,
        height: 180,
        margin: 5,
        padding: 0,
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