import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import { persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import { PURGE } from "redux-persist/es/constants";


// Persist Config 
// 어떤 storage를 사용해서 어떻게 state를 저장하고 싶은지를 설정
// ex) localStorage( 웹용 ), AsyncStorage( native용 ) 등... 
// npm install @react-native-async-storage/async-storage
const persistConfig = {
    key: 'root', 
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const persistedStore = persistedStore(store)

const store = configureStore({
    // rootReducer 대신 사용하도록 설정
    reducer: persistedReducer,
    // toolkit과의 action 종류 충돌을 방지하기 위해 middleware 설정 ( toolkit이 persist의 action 무시 )
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredPaths: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export default store;