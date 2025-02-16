import styled from "styled-components/native";
import { StyleSheet } from "react-native";

interface IDisplay{
    bgColor?: string,
}

export const DisplayWrapper = styled.View<IDisplay>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props: IDisplay)=>(props.bgColor || 'transparent')};
`

export const StylesCard = StyleSheet.create({
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