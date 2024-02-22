import { Settings, User, realmContext } from '@appRealm';
import { Screen } from '@components';
import { SCREEN } from '@constants';
import { NavigationProp } from '@react-navigation/native';
import { setUser, useAppDispatch, useAppSelector } from '@store';
import { Text } from '@ui-kitten/components';
import { navToPage } from '@utils';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

const { useQuery, useRealm } = realmContext;

// temp screen to load and configure user and app state
export const IntroScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  // realm hooks
  const user = useQuery(User);
  const settings = useQuery(Settings);
  const realm = useRealm();

  const dispatch = useAppDispatch();
  const { userId } = useAppSelector(({ meta }) => meta);

  useEffect(() => {
    if (settings.isEmpty()) {
      createNewSettings();
    }
    if (user.isEmpty()) {
      createNewUser();
    } else {
      dispatch(setUser(user[0]._id.toString()));
    }

    if (userId) {
      navToPage(navigation, SCREEN.HOME);
    }
  });

  const createNewUser = () => {
    realm.write(() => {
      realm.create(User, User.generateNew('Ryan', 'Test', settings[0]._id));
    });
  };

  const createNewSettings = () => {
    console.log('Creating new default settings');
    realm.write(() => {
      realm.create(Settings, Settings.generate());
    });
  };

  return (
    <Screen>
      <ActivityIndicator size={'small'} />
      <Text>hello</Text>
    </Screen>
  );
};
