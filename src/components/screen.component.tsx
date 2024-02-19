import React from 'react';
import { Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Nav } from './nav.componet';

export const Screen = ({ leftNavControl, rightNavControl, children }) => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.nav}>
        <Nav leftControl={leftNavControl} rightControl={rightNavControl} />
      </Layout>
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
  },
  nav: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 9,
    paddingHorizontal: '3%',
  },
});
