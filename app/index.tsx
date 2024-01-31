import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './../scr/components/core/dayListItem';


const days = [...Array(24)].map((d, i) => i + 1)

export default function HomeScreen() {

  
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
