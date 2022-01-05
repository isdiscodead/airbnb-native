import React from "react";
import { View } from "react-native";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// screens의 스크린들을 import 
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

// IonIcons
import { Ionicons } from "@expo/vector-icons";

// IOS or Android 확인 -> 기기에 따라 다른 아이콘 사용
import { Platform } from "react-native";
const isAndroid = Platform.OS === "android"

const Auth = createStackNavigator();


// navigator 안에는 사용할 screen들이 와야 함
export default () => (
    // Screen Options
    // mode -> card: 기본 ( 옆으로 ), modal: 아래서 위로
    // headerMode -> screen: 기본, float: 텍스트 올라옴
    <Auth.Navigator mode="modal" headerMode="float" screenOptions={{
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerBackImage: () => 
        <View style={{ paddingLeft: 20 }}>
            <Ionicons
                name={ isAndroid ? "md-arrow-down" : "ios-arrow-down" } 
                size={28} 
            />
        </View>
    }}> 
        <Auth.Screen name="Welcome" component={Welcome}/>
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>
    </Auth.Navigator>
);