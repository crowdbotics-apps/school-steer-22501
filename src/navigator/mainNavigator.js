import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile170927Navigator from '../features/UserProfile170927/navigator';
import Tutorial170926Navigator from '../features/Tutorial170926/navigator';
import NotificationList170898Navigator from '../features/NotificationList170898/navigator';
import Settings170897Navigator from '../features/Settings170897/navigator';
import Settings170889Navigator from '../features/Settings170889/navigator';
import UserProfile170887Navigator from '../features/UserProfile170887/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile170927: { screen: UserProfile170927Navigator },
Tutorial170926: { screen: Tutorial170926Navigator },
NotificationList170898: { screen: NotificationList170898Navigator },
Settings170897: { screen: Settings170897Navigator },
Settings170889: { screen: Settings170889Navigator },
UserProfile170887: { screen: UserProfile170887Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
