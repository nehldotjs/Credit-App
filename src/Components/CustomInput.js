import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomInput = ({ label }) => {
  return (
    <View
      style={{
        // backgroundColor: "skyblue",
        width: "100%",
        flex: 1,
        justifyContent: "space-evenly"
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          color: "gray",
          marginBottom: 5
        }}>
        {label}
      </Text>
      <TextInput
        placeholder={label}
        style={{
          borderColor: "lightgray",
          borderWidth: 2,
          borderRadius: 5,
          flex: 1,
          paddingLeft: 20,
          color: "gray",
          marginBottom: 5
        }}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
