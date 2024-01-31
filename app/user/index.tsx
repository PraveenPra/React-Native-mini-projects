import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UserProps {}

const User = (props: UserProps) => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {}
});
