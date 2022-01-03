import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// screens의 스크린들을 import 
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Auth = createStackNavigator();

// navigator 안에는 screen이 와야 함
export default () => <Auth.Navigator> 
    <Auth.Screen name="SignIn" component={SignIn}/>
    <Auth.Screen name="Welcome" component={Welcome}/>
    <Auth.Screen name="SignUp" component={SignUp}/>
</Auth.Navigator>