import { IconButton, Screen } from '@components';
import { SCREEN } from '@constants';
import { NavigationProp } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';
import { navToPage } from '@utils';
import React from 'react';

export const HistoryScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const renderHomeButton = (
    <IconButton
      name="home-outline"
      buttonHandler={() => navToPage(navigation, SCREEN.HOME)}
    />
  );

  return (
    <Screen leftNavControl={null} rightNavControl={renderHomeButton}>
      <Text>History</Text>
    </Screen>
  );
};
