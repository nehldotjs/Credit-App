import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

import CardSlider from "../Components/CardSlider";
import CustomBtn from "../Components/CustomBtn";

export default function LandingPage() {
  const navigation = useNavigation();

  const handleLogin = () => {
    return navigation.navigate("Login");
  };
  const handleSignUp = () => {
    return navigation.navigate("SignUp");
  };

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView style={[styles.container, { height: windowHeight }]}>
      <View
        style={[
          styles.LandingPageWrapper,
          { height: windowHeight * 0.9, width: windowWidth }
        ]}>
        <CardSlider />

        {/* <View
          style={{
            gap: 10,
            width: "100%",
            justifyContent: "space-between",
            paddingRight: 20,
            paddingLeft: 20
          }}>
          <CustomBtn
            backgroundColor={"#155E56"}
            onPress={handleLogin}
            fontWeight={"bold"}
            textColor={"#fff"}
            borderRadius={10}
            title={"Login"}
            width={"100%"}
            padding={15}
          />
          <CustomBtn
            backgroundColor={"#fff"}
            textColor={"#155E56"}
            fontWeight={"bold"}
            borderRadius={10}
            width={"100%"}
            padding={15}
            borderWidth={3}
            title={"Sign Up"}
            onPress={handleSignUp}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  LandingPageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  }
});
