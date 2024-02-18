import React from 'react';
import { Button, Layout } from '@ui-kitten/components';

export const MyButton = ({ buttonHandler, text }) => {
  return (
    <Layout>
      <Button onPress={buttonHandler}>{text}</Button>
    </Layout>
  );
};
