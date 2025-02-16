import React, { FC } from "react";
import { View, Text, StyleSheet} from "react-native";
import { StylesCard } from "./WeaponsCard.styled";
import { DisplayWrapper } from "./WeaponsCard.styled";
import WeaponsImage from "./Sections/WeaponsImage";
import Description from "./Sections/Description";

interface ICardstarted {}

const CardStarted: FC<ICardstarted> = () => 
    <View style={StylesCard.body}>
        <Text style={styles.textRow}>CHOOSE DEFENCE & SAFE</Text>
        <DisplayWrapper bgColor={'#71a0b1'}>
            <WeaponsImage model="ua-army-logo"/>
            <WeaponsImage model="ua-army-force"/>
        </DisplayWrapper>
        <Description description="JOINT TO OUR HAND PACK"/>
    </View>

const styles = StyleSheet.create({
    textRow: {
        ...StylesCard.textRow,
        color: '#0a6915',
        textShadowColor: '#e86500',
    }
});

export default CardStarted;