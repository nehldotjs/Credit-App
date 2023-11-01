import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "../Components/CustomBtn";
import CustomInput from "../Components/CustomInput";
import { AntDesign } from "@expo/vector-icons";
import LoginScreen from "./LoginScreen";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SignUpScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView
      style={[
        { height: windowHeight, width: windowWidth },
        { justifyContent: "center", alignItems: "center" }
      ]}>
      <View
        style={[
          { height: windowHeight * 0.9, width: windowWidth },
          {
            // justifyContent: "space-between",
            paddingBottom: "20%",
            paddingLeft: 20,
            paddingRight: 20,
            gap: 30
          }
        ]}>
        <View style={{ width: 40, height: 40 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {
              <AntDesign
                name="back"
                size={24}
                color="black"
                style={{
                  borderColor: "#155E56",
                  borderRadius: 5,
                  borderWidth: 2,
                  padding: 5
                }}
              />
            }
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#155E56" }}>
            Create your creditWave account
          </Text>
          <Text style={{ color: "gray", fontSize: 15 }}>
            Let's introduce. Enter your details as they appear on your legal
            documents
          </Text>
        </View>
        <View
          style={[
            { height: windowHeight * 0.4 },
            { justifyContent: "space-evenly" }
          ]}>
          {<CustomInput label={"First Name"} />}
          {<CustomInput label={"Last Name"} />}
          {<CustomInput label={"Email Address"} />}
          {<CustomInput label={"Phone Number"} />}
        </View>
        <View style={{ justifyContent: "center", gap: 15 }}>
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              fontSize: 15,

              color: "gray",
              width: "100%",
              paddingLeft: 10,
              paddingRight: 10
            }}>
            By clicking, you agree to our{" "}
            <Text
              style={{ color: "#155E56" }}
              onPress={console.log("hello world")}>
              Terms and condition and privacy policy
            </Text>
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#155E56",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              borderRadius: 5
            }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Continue
            </Text>
          </TouchableOpacity>
          <Text style={{ width: "100%", textAlign: "center" }}>
            Alrea dy have an account?{" "}
            <TouchableOpacity
              style={{ color: "#155E56" }}
              onPress={handleLogin}>
              Sign in
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({});
