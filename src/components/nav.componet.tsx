import React from 'react';
import { Layout } from '@ui-kitten/components';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

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
  },
  leftControl: {
    width: '9%',
    marginRight: '5%',
  },
  rightControl: {
    width: '9%',
    marginLeft: '5%',
  },
  middle: {
    width: '70%',
  },
});
