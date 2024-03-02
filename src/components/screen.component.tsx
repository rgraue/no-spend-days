import React, { ReactNode } from 'react';
import { Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Nav } from './nav.componet';
import { theme } from '@constants';

export const Screen = ({
  leftNavControl = null,
  rightNavControl = null,
  children,
}: {
  leftNavControl?: ReactNode;
  rightNavControl?: ReactNode;
  children?: any;
}) => {
  return (
    <Layout style={styles.container}>
      <Nav leftControl={leftNavControl} rightControl={rightNavControl} />
      <Layout style={styles.content}>{children}</Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '9%',
    paddingHorizontal: '2%',
    backgroundColor: theme.background_primary_1,
  },
  content: {
    flex: 9,
    paddingHorizontal: '3%',
    backgroundColor: theme.background_primary_1,
  },
});
