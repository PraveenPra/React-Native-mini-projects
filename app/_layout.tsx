import { Stack } from 'expo-router';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {AmaticSC_400Regular,AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    let [fontsLoaded,fontError] = useFonts({
        Inter_900Black,
       Amatic: AmaticSC_400Regular,
       AmaticBold:AmaticSC_700Bold
      });
    
    
      useEffect(()=>{
        if(fontsLoaded && !fontError)
        SplashScreen.hideAsync();
      },[fontsLoaded,fontError])
    
      
      if (!fontsLoaded && !fontError) {
        return null;
      }
  return (<GestureHandlerRootView style={{ flex: 1 }}>
    <Stack screenOptions={{
        // headerStyle:{backgroundColor:'black'}
    }}>
        <Stack.Screen name='index' options={{title:"Mini Projects"}}/>
        </Stack>
        </GestureHandlerRootView>);
};

export default RootLayout;

