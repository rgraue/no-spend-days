import { Settings, User, realmContext } from '@appRealm';
import { Screen, StandardButton } from '@components';
import { SCREEN } from '@constants';
import { NavigationProp } from '@react-navigation/native';
import { setSettings, setUser, useAppDispatch, useAppSelector } from '@store';
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

  // redux
  const dispatch = useAppDispatch();
  const { userId } = useAppSelector(({ meta }) => meta);

  // run once on on initial load.
  // enters app if user already exists
  useEffect(() => {
    if (!user.isEmpty()) {
      setAppState();
    }
  }, []); // eslint-disable-line

  // when userId is changed and valid enter app
  useEffect(() => {
    if (userId) {
      navToPage(navigation, SCREEN.HOME);
    }
  }, [userId, navigation]);

  // sets app redux state
  const setAppState = () => {
    dispatch(setSettings(settings[0]._id.toString()));
    dispatch(setUser(user[0]._id.toString()));
  };

  const register = () => {
    if (settings.isEmpty()) {
      createNewSettings();
    }
    if (user.isEmpty()) {
      createNewUser();
    }
  };

  const createNewUser = () => {
    realm.write(() => {
      realm.create(User, User.generateNew('Ryan', 'Test', settings[0]._id));
    });
    dispatch(setUser(user[0]._id.toString()));
  };

  const createNewSettings = () => {
    realm.write(() => {
      realm.create(Settings, Settings.generate());
    });
    dispatch(setSettings(settings[0]._id.toString()));
  };

  return (
    <Screen>
      <ActivityIndicator size={'small'} />
      <StandardButton text={'Login'} buttonHandler={register} />
    </Screen>
  );
};
