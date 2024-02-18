import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, TodoScreen } from '@screens';

const Stack = createNativeStackNavigator();

export const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
