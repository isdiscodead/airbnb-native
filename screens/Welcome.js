import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import { BlurView } from 'expo-blur'; 
import Btn from "../components/Auth/Btn";

const Container = styled.View`
    flex: 1;
`;

const Image = styled.Image`
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
`;

// 인터넷에서 사진을 가져오기 위해서는 width, height 지정 필수 !!
const Logo = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto 0;
`;

const LOGO_URL = "https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png";

const BtnContainer = styled.View``;

export default ({ navigation }) => {
    // 버튼 function
    const goToSignUp = () => navigation.navigate("SignUp")
    const goToSignIn = () => navigation.navigate("SignIn")

    return (
        <Container>
            <Image resizeMethod="scale" source={require('../assets/loginBg.jpeg')} /> 

            <BlurView intensity={35} tint="light" style={{ flex: 1, width: "100%", alignItems: "center", justifyContent: "center"}}>
                <Logo source={{ uri: LOGO_URL }} /> 
                <BtnContainer>
                    <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
                    <Btn onPress={goToSignIn} text={"Sign In"} />
                </BtnContainer>
            </BlurView>

            <StatusBar style="light"/>
        </Container>
    );
};