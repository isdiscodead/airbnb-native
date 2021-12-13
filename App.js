import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset"; 
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import Gate from './components/Gate';

// images를 인자로 받아 promise array를 return
const cacheImages = images => images.map(image => {
  if(typeof image === "string") { // 주소의 경우
    return Image.prefetch(image)
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
})


const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = () => {
      // image와 font preload
      const images = [require("./assets/loginBg.jpeg"), "https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png"];
      const fonts = [
        Ionicons.font
      ];
      const imagePromises = cacheImages(images);
      const fontPromises = cacheFonts(fonts);
      // cache~ 함수에 적용되는 모든 font와 image의 promise 배열 return
      return Promise.all([...fontPromises, ...imagePromises]); // 점 3개 -> 내용물 가져오기
  }


  return isReady ? (
  <Text> <Gate></Gate> </Text>
  ) : ( <AppLoading 
          onError={console.error} 
          onFinish={handleFinish} 
          startAsync={loadAssets}
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
