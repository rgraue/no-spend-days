import React from 'react';
import { Button, Icon } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { theme } from '@constants';

export const IconButton = ({
  name,
  buttonHandler,
}: {
  name: string;
  buttonHandler: () => any;
}) => {
  return (
    <Button
      style={styles.button}
      onPress={buttonHandler}
      appearance="ghost"
      accessoryLeft={
        <Icon fill={theme.button_primary_1} name={name} />
      }></Button>
  );
};

const styles = StyleSheet.create({
  button: {},
});
