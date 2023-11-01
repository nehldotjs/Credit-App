import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomBtn = ({
  title,
  width,
  height,
  padding,
  onPress,
  fontSize,
  textColor,
  textAlign,
  fontWeight,
  borderColor,
  borderWidth,
  borderRadius,
  textWidth,
  backgroundColor
}) => {
  const buttonStyle = {
    width: width || "100%",
    padding: padding || "none",
    fontSize: fontSize || 15,
    borderWidth: borderWidth || 0,
    textWidth: textWidth || "100%",
    borderRadius: borderRadius || 5,
    textAlign: textAlign || "center",
    borderColor: borderColor || "#155E56",
    backgroundColor: backgroundColor || "transparent"
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, { justifyContent: "center", alignItems: "center",flex:1 }]}>
      <Text
        style={{
          fontWeight: fontWeight,
          fontSize:fontSize,
          color: textColor,
          textAlign: textAlign,
          width: textWidth
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomBtn;

const styles = StyleSheet.create({});
