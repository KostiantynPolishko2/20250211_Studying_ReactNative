import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";

const weapons = {
    'ags-17': require('../../../../../assets/images/ags-17.png'),
    'uag-40': require('../../../../../assets/images/uag-40.png'),
    'mk-19': require('../../../../../assets/images/mk-19.png'),
    'ua-army-logo': require('../../../../../assets/images/ua-army-logo.png'),
    'ua-army-force': require('../../../../../assets/images/ua-army-force.png'),
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