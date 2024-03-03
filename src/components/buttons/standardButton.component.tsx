import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { theme } from '@constants';

export const StandardButton = ({
  buttonHandler,
  text,
  color = undefined,
}: {
  buttonHandler: () => any;
  text: string;
  color?: string;
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
    },
    button: {
      backgroundColor: color ? color : theme.button_primary_1,
      borderWidth: 0,
    },
  });

  return (
    <Layout style={styles.container}>
      <Button style={styles.button} onPress={buttonHandler}>
        {text}
      </Button>
    </Layout>
  );
};
