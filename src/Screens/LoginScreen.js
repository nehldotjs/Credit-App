import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import {
  FontAwesome5,
  Ionicons,
  Entypo,
  Feather,
  Fontisto
} from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "../Components/CustomBtn";
import CustomInput from "../Components/CustomInput";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleLogin = () => {
    console.log("Hello World");
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView
      style={[
        { alignItems: "center" },
        { height: windowHeight, width: windowWidth }
      ]}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15%",
          marginTop: "10%"
        }}>
        <Text
          style={{
            margin: "auto",
            width: "100%",
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "#00C795"
          }}>
          Credit
          <Text
            style={{
              margin: "auto",
              width: "100%",
              textAlign: "center",
              fontSize: 25,
              fontWeight: "lighter ",
              color: "gray"
            }}>
            Wave
          </Text>
        </Text>
      </View>
      <View
        style={[
          {
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingBottom: "40%",
            margin: "auto",
            flex: 1
          },
          { width: windowWidth * 0.9 }
        ]}>
        <View
          style={{
            justifyContent: "space-evenly",
            marginBottom: 10,
            width: "100%"
          }}>
          <Text
            style={{
              fontSize: 20,
              color: "#155E56",
              fontWeight: "bold",
              textTransform: "capitalize"
            }}>
            welcome back
          </Text>
          <Text style={{ color: "gray" }}>Login into your account</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            width: "100%"
          }}>
          <View
            style={{
              justifyContent: "space-evenly",
              display: "flex",
              flex: 1
            }}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput placeholder="Email address" style={styles.textInput} />
            <Text style={styles.inputLabel}>Password</Text>
            <View>
              <TextInput
                placeholder="****************"
                secureTextEntry={true}
                style={styles.textInput}
              />{" "}
              <Text style={{ color: "gray", paddingTop: 10 }}>
                Remember password
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            width: "100%",
            gap: 15
          }}>
          <CustomBtn
            title={"Continue"}
            backgroundColor={"#155E56"}
            padding={15}
            fontWeight={"bold"}
            textColor={"white"}
            textAlign={"center"}
            onPress={handleLogin}
          />
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "space-between",
              color: "gray"
            }}>
            Dont have an account?{" "}
            <CustomBtn
              title={"Sign Up"}
              backgroundColor={"transparent"}
              width={"auto"}
              borderWidth
              padding={(0, 0, 0, 5)}
              textColor={"#155E56"}
              onPress={handleSignUp}
            />
          </Text>
          <CustomBtn
            title={"Forget Password?"}
            backgroundColor={"transparent"}
            borderWidth={"none"}
            padding={5}
            textColor={"red"}
          />
          <TouchableOpacity
            style={[
              {
                justifyContent: "center",
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }
            ]}>
            <MaterialCommunityIcons
              name="fingerprint"
              color="#155E56"
              size={70}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    width: "100%",
    borderColor: "gray",
    paddingLeft: 20,
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    fontSize: 15,
    backgroundColor: "#fff "
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray"
  },
  loginBtn: {
    height: "50px",
    width: "100%",
    backgroundColor: "#155E56"
  }
});
