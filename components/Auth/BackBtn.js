import React from "react";
import styled from "styled-components/native";
// IonIcons
import { Ionicons } from "@expo/vector-icons";

// IOS or Android 확인 -> 기기에 따라 다른 아이콘 사용
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android"

const Container = styled.View`
    padding-left: 20px;
`;

export default () => <Container>
    <View style={{  }}>
            <Ionicons
                name={ isAndroid ? "md-arrow-down" : "ios-arrow-down" } 
                size={28} 
            />
        </View>

</Container>