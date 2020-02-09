import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import Login from "./Login";
import Main from './Main';

const routeConfig = {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      header: null,
    },
};

const AuthStack = createStackNavigator(
    {
      Login
    },
    { ...routeConfig, initialRouteName: 'Login' }
);

const InAppStack = createStackNavigator({},
{
  initialRouteName: 'Main',
  navigationOptions: {
    tabBarIcon: tabBarIcon('home'),
    title: 'Dashboard',
  },
  headerMode: 'none',
});


export default createAppContainer(
  createSwitchNavigator(
    {
      InAppStack,
      Auth: AuthStack,
      AuthLoader,
    },
    routeConfig
  )
);
