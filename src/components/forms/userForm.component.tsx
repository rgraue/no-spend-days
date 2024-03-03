import { CheckBox, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { TextInput } from '../inputs/textInput.component';
import { StandardButton } from '../buttons/standardButton.component';
import { realmContext, User, Settings } from '@appRealm';
import { theme, verbage } from '@constants';
import { validateFormInput } from '@utils';
import { StyleSheet } from 'react-native';

const { useQuery, useRealm } = realmContext;

export const UserForm = () => {
  // realm hooks
  const user = useQuery(User);
  const settings = useQuery(Settings);
  const realm = useRealm();

  // state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setIsAgreeChecked(false);
  };

  const register = () => {
    const isValidForm = validateFormInput([
      {
        value: firstName,
        type: 'text',
      },
      {
        value: lastName,
        type: 'text',
      },
      {
        value: isAgreeChecked,
        type: 'true',
      },
    ]);

    if (settings.isEmpty() && isValidForm) {
      createNewSettings();
    }
    if (user.isEmpty() && isValidForm) {
      createNewUser();
    }

    if (isValidForm) {
      clearForm();
    } else {
      console.log('form is not valid');
    }
  };

  const createNewUser = () => {
    realm.write(() => {
      realm.create(
        User,
        User.generateNew(firstName, lastName, settings[0]._id),
      );
    });
  };

  const createNewSettings = () => {
    realm.write(() => {
      realm.create(Settings, Settings.generate());
    });
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.text_header}>Lets Get Started</Text>
      <Layout style={styles.input_container}>
        <TextInput
          placeholder="First Name"
          valueState={firstName}
          valueStateSetter={setFirstName}
        />
        <TextInput
          placeholder="Last Name"
          valueState={lastName}
          valueStateSetter={setLastName}
        />
      </Layout>
      <Layout style={styles.agreement_container}>
        <Text style={styles.text_agreement}>{verbage.agreement_statement}</Text>
        <CheckBox
          checked={isAgreeChecked}
          onChange={nextChecked => setIsAgreeChecked(nextChecked)}>
          {() => (
            <Text style={styles.checkbox_text}>
              I understand and agree to the above statement.
            </Text>
          )}
        </CheckBox>
      </Layout>
      <Layout style={styles.submit_container}>
        <StandardButton
          text={'Lets Go'}
          color={theme.button_primary_3}
          buttonHandler={register}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: 'transparent',
    padding: 10,
    margin: 1,
    alignItems: 'center',
  },
  input_container: {
    flex: 5,
    backgroundColor: 'transparent',
    width: '100%',
  },
  agreement_container: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 10,
  },
  submit_container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  text_header: {
    flex: 1,
    // borderWidth: 1,
    fontSize: 38,
    fontFamily: theme.font_family_primary,
  },
  text_agreement: {
    fontSize: 8,
    margin: 5,
    color: theme.text_color_primary_1,
  },
  checkbox_text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.text_color_primary_1,
    margin: 5,
  },
});
