import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { NavigationRoot } from '@navigation';
import { Provider } from 'react-redux';
import { store } from '@store';
import { TodoRealmContext } from '@appRealm';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const { RealmProvider } = TodoRealmContext;

function App(): JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <RealmProvider>
          <Provider store={store}>
            <NavigationRoot />
          </Provider>
        </RealmProvider>
      </ApplicationProvider>
    </>
  );
}

export default App;
