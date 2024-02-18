import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { MyButton } from '@components';

export const HomeScreen = ({ navigation }) => {
  function switchPage() {
    navigation.navigate('Todo');
  }

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h1">
        Welcome
      </Text>
      <Text>Edit src files to start creating</Text>
      <MyButton text={'TODO Page'} buttonHandler={switchPage} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});
