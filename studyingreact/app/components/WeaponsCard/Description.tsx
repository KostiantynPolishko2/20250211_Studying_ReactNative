import React, { FC, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

interface IDescription {
    description: string,
}

const Description: FC<IDescription> = (props) => {
    
    const [isShow, setShow] = useState<boolean>(false);

    return(
        <View style={[styles.body, {flex: !isShow? 1 : 0}]}>
            <Text 
                style={styles.text}
                numberOfLines={!isShow? 1 : 0} 
                ellipsizeMode="middle"
            >{props.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        backgroundColor: 'yellow',
        margin: 5,
        boxShadow: '2 2 5 black',
        borderRadius: 5,
        borderCurve: 'continuous',
    },
    fullTxt : {
        flex: 0,
    },
    shortTxt: {
        flex: 1,
        height: 30
    },
    text: {
        padding: 5,
        textAlign: 'justify',
        alignContent: 'center',
    }
});

export default Description;