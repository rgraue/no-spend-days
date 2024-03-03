import { User, realmContext } from '@appRealm';
import { Screen, UserForm } from '@components';
import { SCREEN } from '@constants';
import { NavigationProp } from '@react-navigation/native';
import { setSettings, setUser, useAppDispatch, useAppSelector } from '@store';
import { navToPage } from '@utils';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

const { useQuery } = realmContext;

// temp screen to load and configure user and app state
export const IntroScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  // realm
  const user = useQuery(User);

  // state
  const [isRegistered, setIsRegistered] = useState(!user.isEmpty());

  // redux
  const dispatch = useAppDispatch();
  const { userId } = useAppSelector(({ meta }) => meta);

  // enter app if userId state set
  useEffect(() => {
    if (userId) {
      navToPage(navigation, SCREEN.HOME);
    }
  }, [userId, navigation]);

  // if user found assume registered and set state
  useEffect(() => {
    if (isRegistered) {
      setAppState();
    }
  }, [isRegistered]); // eslint-disable-line

  // capture changes to user.realm to update isRegistered
  // used when new user enters form info (add/updates user.realm)
  useEffect(() => {
    setIsRegistered(!user.isEmpty());
  }, [user]);

  // updates app redux state
  const setAppState = () => {
    dispatch(setUser(user[0]._id.toString()));
    dispatch(setSettings(user[0].settingsId.toString()));
  };

  return (
    <Screen>
      {!isRegistered ? <UserForm /> : <ActivityIndicator size={'small'} />}
    </Screen>
  );
};
