import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";

const MainPage: FC = () => 
    <>
        <Header/>
        <Home/>
        <Footer/>
    </>

export default MainPage;