import React from 'react';
import { Layout } from '@ui-kitten/components';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '@constants';

export const Nav = ({
  leftControl,
  rightControl,
}: {
  leftControl: ReactNode | null;
  rightControl: ReactNode | null;
}) => {
  return (
    <Layout style={styles.navBar}>
      <Layout style={styles.leftControl}>{leftControl}</Layout>
      <Layout style={styles.middle}></Layout>
      <Layout style={styles.rightControl}>{rightControl}</Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.background_primary_1,
  },
  leftControl: {
    width: '9%',
    marginRight: '5%',
    backgroundColor: 'transparent',
  },
  rightControl: {
    width: '9%',
    marginLeft: '5%',
    backgroundColor: 'transparent',
  },
  middle: {
    width: '70%',
    backgroundColor: 'transparent',
  },
});
