import { IconButton, Screen, StandardButton } from '@components';
import { NavigationProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SCREEN } from '@constants';
import { navToPage } from '@utils';
import { Settings, User, realmContext } from '@appRealm';
import { clearState, useAppDispatch, useAppSelector } from '@store';

const { useQuery, useRealm } = realmContext;

export const SettingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  // realm
  const user = useQuery(User);
  const settings = useQuery(Settings);
  const realm = useRealm();

  // redux
  const dispatch = useAppDispatch();
  const { userId } = useAppSelector(state => state.meta);

  // cleanup realm
  useEffect(() => {
    if (!userId) {
      navToPage(navigation, SCREEN.INTRO);
    }
  }, [userId, navigation]);

  const deleteUser = () => {
    console.log('deleting user');
    realm.write(() => {
      realm.delete(user);
      realm.delete(settings);
    });

    dispatch(clearState());
  };

  const renderHomeButton = (
    <IconButton
      name="home-outline"
      buttonHandler={() => navToPage(navigation, SCREEN.HOME)}
    />
  );

  return (
    <Screen leftNavControl={null} rightNavControl={renderHomeButton}>
      <StandardButton text={'delete user'} buttonHandler={deleteUser} />
    </Screen>
  );
};
