import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import ScreensContainer from "./src/Screens";

const App = () => {
  return (
    <NavigationContainer>
      <ScreensContainer />
    </NavigationContainer>
  );
};

export default App;
