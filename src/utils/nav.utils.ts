import { NavigationProp } from '@react-navigation/native';
import { SCREEN } from '@constants';

export const navToPage = (nav: NavigationProp<any>, screen: SCREEN) => {
  nav.navigate(screen);
};
