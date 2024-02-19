import { IconButton, Screen } from '@components';
import { NavigationProp } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';
import React from 'react';
import { SCREEN } from '@constants';
import { navToPage } from '@utils';

export const SettingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const renderHomeButton = (
    <IconButton
      name="arrow-ios-back-outline"
      buttonHandler={() => navToPage(navigation, SCREEN.HOME)}
    />
  );

  return (
    <Screen leftNavControl={renderHomeButton} rightNavControl={null}>
      <Text>Settings</Text>
    </Screen>
  );
};
