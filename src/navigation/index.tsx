import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HistoryScreen, HomeScreen, SettingScreen } from '@screens';
import { SCREEN } from '@constants';

const Stack = createNativeStackNavigator();

export const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={SCREEN.HOME}>
        <Stack.Screen name={SCREEN.HISTORY} component={HistoryScreen} />
        <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN.SETTINGS} component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
