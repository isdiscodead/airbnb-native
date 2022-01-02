import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset"; 
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import store, { persistor } from './redux/store';

import Gate from './components/Gate';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


// images를 인자로 받아 promise array를 return하는 func
const cacheImages = images => images.map(image => {
  if(typeof image === "string") { // 주소의 경우 prefetch
    return Image.prefetch(image)
  } else {  // 파일이라면 download
    return Asset.fromModule(image).downloadAsync();
  }
})


const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);

  // assets들을 preload
  const loadAssets = () => {
      // image와 font preload
      const images = [require("./assets/loginBg.jpeg"), "https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png"];
      const fonts = [
        Ionicons.font
      ];
      // cache하여 
      const imagePromises = cacheImages(images);
      const fontPromises = cacheFonts(fonts);
      // cache~ 함수에 적용되는 모든 font와 image의 promise 배열 return
      return Promise.all([...fontPromises, ...imagePromises]); // 점 3개 -> 내용물 가져오기
  }


  return isReady ? (
  // PersistGate -> 화면 rendering을 위해 state를 load할 때까지 기다려주는 component 
  // state는 store( user reducer )에서 오는 것 ! 따라서 Persistor가 필요함
  <Provider store={store}>
    <PersistGate persistor={persistor}> 
      <Gate/> 
    </PersistGate>
  </Provider>
  ) : ( <AppLoading // appLoading component가 loadAssets 함수를 호출
          onError={console.error} 
          onFinish={handleFinish} 
          startAsync={await loadAssets()} // await -> load가 전부 완료 될 때까지 대기
        />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
