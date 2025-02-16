import React, {FC} from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles as _styles } from "@/app/constants/styles";

interface IRecordData {
    type: string,
    value?: string,
}

const RecordData: FC<IRecordData> = ({type, value}) => (
    <View style={[_styles.flex_row, styles.body]}>
        <Text style={styles.rowText}>{type}</Text>
        <Text style={styles.rowText}>{value || 'undefined'}</Text>
    </View>
);

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#8089b4',
        marginBottom: 2,
        padding: 0,
    },
    rowText: {
        color: 'white',
        lineHeight: 15,
    },
});

export default RecordData;