import styled from "styled-components/native";

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