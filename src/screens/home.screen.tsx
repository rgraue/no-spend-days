import React from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { IconButton, Screen } from '@components';
import { navToPage } from '@utils';
import { SCREEN } from '@constants';
import { useAppSelector } from '@store';

export const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const { today, userId } = useAppSelector(({ meta }) => meta);
  const renderSettingsButton = (
    <IconButton
      name="menu-outline"
      buttonHandler={() => navToPage(navigation, SCREEN.SETTINGS)}
    />
  );

  const renderHistoryButton = (
    <IconButton
      name="activity-outline"
      buttonHandler={() => navToPage(navigation, SCREEN.HISTORY)}
    />
  );

  return (
    <Screen
      leftNavControl={renderHistoryButton}
      rightNavControl={renderSettingsButton}>
      <Text style={styles.text} category="h1">
        No Spend Days
      </Text>
      <Text>{today}</Text>
      <Text>{userId!}</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
