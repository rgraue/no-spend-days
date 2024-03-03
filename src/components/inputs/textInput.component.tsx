import React from 'react';
import { Input, Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { theme } from '@constants';

export interface TextInputProps {
  valueState: string;
  valueStateSetter: (string) => any;
  placeholder?: string;
}

export const TextInput = ({
  valueState,
  valueStateSetter,
  placeholder,
}: TextInputProps) => {
  return (
    <Layout style={styles.container}>
      <Input
        textStyle={styles.text}
        style={styles.input}
        placeholder={placeholder}
        value={valueState}
        onChangeText={nextValue => valueStateSetter(nextValue)}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    margin: 5,
    width: '100%',
  },
  input: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: theme.background_primary_3,
    margin: 5,
  },
  text: {
    color: theme.text_color_primary_1,
    fontFamily: theme.font_family_primary,
    fontSize: 24,
  },
});
