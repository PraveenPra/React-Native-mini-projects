import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './../scr/components/core/dayListItem';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {AmaticSC_400Regular,AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((d, i) => i + 1)

export default function HomeScreen() {

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
  return (
    <View style={styles.container}>

      <FlatList
        data={days}
        renderItem={({ item }) => (
          <DayListItem day={item}/>
        )}
      contentContainerStyle={styles.content}
      numColumns={2}
      columnWrapperStyle={styles.column}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding:10
   },
  column: {
    gap: 10,
  },
 
});
