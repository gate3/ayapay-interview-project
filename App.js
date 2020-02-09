/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */
import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import auth from "@react-native-firebase/auth";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import configureStore from "./store";
import Login from "./screens/Login";
import Main from "./screens/Main";

const store = configureStore();
type Props = {};

const Stack = createStackNavigator();
console.disableYellowBox = true;

export default ({ navigate }) => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            {user == null ? (
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: "Welcome" }}
              />
            ) : (
              <Stack.Screen
                name="Home"
                component={Main}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};
