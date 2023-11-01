import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingPage from "./Screens/LandingPage";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";

const Stack = createNativeStackNavigator();
const ScreensContainer = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </>
  );
};

export default ScreensContainer;
