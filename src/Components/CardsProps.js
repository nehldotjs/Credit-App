import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Card = ({ item, index }) => {
  return (
    <View style={[styles.container]} key={index} >
      <View
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
            height: 300,
            width: "100%",
            paddingLeft: 20,
            paddingRight: 20
          }
        ]}>
        <Image
          source={item.imgUrl}
          style={{
            resizeMode: "contain",
            width: "100%",
            height: "100%"
          }}
        />
      </View>
      <Text
        style={{
          textTransform: "capitalize",
          fontSize: 25,
          fontWeight: "bold",
          color: "#00C795",
          height: "auto",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          width: "100%",
          height: "auto",
          paddingLeft: 10,
          paddingRight: 10,
          color: "#155E56"
        }}>
        {item.body}
      </Text>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: ITEM_WIDTH,
    elevation: 7
  },
  image: {
    width: ITEM_WIDTH,
    height: 300
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});
