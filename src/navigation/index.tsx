import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HistoryScreen,
  HomeScreen,
  IntroScreen,
  SettingScreen,
} from '@screens';
import { SCREEN } from '@constants';

const Stack = createNativeStackNavigator();

export const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        initialRouteName={SCREEN.INTRO}>
        <Stack.Screen name={SCREEN.INTRO} component={IntroScreen} />
        <Stack.Screen
          name={SCREEN.HISTORY}
          component={HistoryScreen}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
        <Stack.Screen
          name={SCREEN.SETTINGS}
          component={SettingScreen}
          options={{ animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
