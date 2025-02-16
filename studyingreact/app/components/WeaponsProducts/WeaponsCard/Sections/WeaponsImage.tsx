import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";

const weapons = {
    ags17: require('../../../../../assets/images/ags17.png'),
    uag40: require('../../../../../assets/images/uag40.png'),
  };

interface IWeaponsImage {
    model: keyof typeof weapons,
}

const WeaponsImage: FC<IWeaponsImage> = ({model}) => {

    const error = '../../../../../assets/images/404.png';

    return(
        <Image 
            style={styles.body} 
            source={model && weapons[model]? weapons[model] : error}
            alt='weapons'
        />
    );
};

const styles = StyleSheet.create({
    body: {
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 5,
    }
});

export default WeaponsImage;