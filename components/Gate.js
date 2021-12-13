// Gate.js -> 2개의 다른 navigation을 보여줌 
import React from "react";
import { View, Text } from "react-native";


export default () => {
    const isLoggedIn = false;
    return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        {isLoggedIn? <Text>Welcome</Text> : <Text>Login Please</Text>}
    </View>
    );
}