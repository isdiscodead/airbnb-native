// Gate.js -> 2개의 다른 navigation을 보여줌 
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/usersSlice";

// using hooks
export default () => {
    // useSelector는 state의 원하는 부분에 대해서 접근하게 해주는 hook
    const { isLoggedIn } = useSelector(state => state.usersReducer) 
    // Hook 사용 시 useDispatch 사용 가능 ! ( 아닐 경우 똑같이 mapDispatchToProps 사용 )
    // dispatch -> action을 받아 이벤트 발생시켜주는 함수
    const dispatch = useDispatch();
    
    return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        { isLoggedIn ? ( 
            <TouchableOpacity onPress={() => dispatch(logOut())}>
                <Text>Log Out</Text>
            </TouchableOpacity> 
        ) : ( 
            <TouchableOpacity onPress={() => dispatch(logIn("bs.token"))}>
                <Text>Log In</Text>
            </TouchableOpacity> 
        )}
    </View>
    );
};


// redux 사용 -> mapStateToProps
/*
const Gate = (props) => {
    console.log(props)
    const isLoggedIn = false;
    return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        {isLoggedIn? <Text>Welcome</Text> : <Text>Login Please</Text>}
    </View>
    );
};


const mapStateToProps = (state) => {
    console.log(state);
    return { isLoggedIn: false }
}


export default connect(mapStateToProps)(Gate);
*/