import { NavigationProp } from '@react-navigation/native';
import { SCREEN } from '@constants';

export const navToPage = (nav: NavigationProp<any>, screen: SCREEN) => {
  console.log('navigating to: ', screen);
  nav.navigate(screen);
};
