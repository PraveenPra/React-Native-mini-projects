import { Stack } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Day1Props {}

const Day1 = (props: Day1Props) => {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{headerTitle:'Day 1'}}/>
      <Text>Day1</Text>
    </View>
  );
};

export default Day1;

const styles = StyleSheet.create({
  container: {}
});
