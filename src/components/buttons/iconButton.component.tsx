import React from 'react';
import { Button, Icon } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

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
      accessoryLeft={<Icon name={name}></Icon>}></Button>
  );
};

const styles = StyleSheet.create({
  button: {},
});
