import React from "react";
import { View } from "react-native";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// screens의 스크린들을 import 
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import BackBtn from "../components/Auth/BackBtn";



const Auth = createStackNavigator();


// navigator 안에는 사용할 screen들이 와야 함
export default () => (
    // Screen Options
    // mode -> card: 기본 ( 옆으로 ), modal: 아래서 위로
    // headerMode -> screen: 기본, float: 텍스트 올라옴
    <Auth.Navigator screenOptions={{
        mode: "modal",
        headerMode: "float", 
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerBackImage: () => <BackBtn></BackBtn>
        }}
    > 
        <Auth.Screen name="Welcome" component={Welcome}/>
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>
    </Auth.Navigator>
);