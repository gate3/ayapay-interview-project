import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Leagues from "./Leagues";
import Teams from "./Teams";
import Squads from "./Squads";

const Stack = createStackNavigator();

export const Main = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Leagues} />
      <Stack.Screen name="Teams" component={Teams} />
      <Stack.Screen name="Squads" component={Squads} />
    </Stack.Navigator>
  );
};

export default Main;
