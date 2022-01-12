import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Image = styled.Image``;

export default ({ navigation }) => {
    return (
        <Container>
            <Image source={require("../assets/loginBg.jpeg")} />
        </Container>
    );
};