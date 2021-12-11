import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset"; 


const cacheImages = images => images.map(image => {
  if(typeof image === "string") { // 주소의 경우
    return Image.prefetch(image)
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
})


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = () => {
      // image와 font preload
      const images = [require("./assets/loginBg.jpeg"), "https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png"];
      console.log(cacheImages(images));
  }

  return isReady ? (
  <Text>I'm ready</Text>
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
