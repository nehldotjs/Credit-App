import React, { useState, useRef, useLayoutEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "./CustomBtn";
import { SLIDER_WIDTH, ITEM_WIDTH } from "./CardsProps";
// import Swiper from "react-native-swiper"
import Carousel, { Pagination } from "react-native-snap-carousel";
import Card from "./CardsProps";
const windowHeight = Dimensions.get("window").height;

import img1 from "../assets/svg/undraw_Savings_re_eq4w (1).png";
import img2 from "../assets/svg/undraw_Order_confirmed_re_g0if.png";
import img3 from "../assets/svg/undraw_Transfer_money_re_6o1h.png";
import img4 from "../assets/svg/undraw_Pay_online_re_aqe6.png";
import img5 from "../assets/svg/undraw_Confirmed_re_sef7.png";
import img6 from "../assets/svg/undraw_Credit_card_payments_re_qboh.png";
import img7 from "../assets/svg/undraw_Gift_card_re_5dyy.png";
import img8 from "../assets/svg/undraw_Online_payments_re_y8f2.png";

const CardSlider = () => {
  const [activeCard, setActiveCard] = useState(0);
  const isCarousel = React.useRef(null);

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

  const data = [
    {
      id: 1,
      imgUrl: img1,
      title: "savings",
      body: "We can help you save and mange yout money when you reduce expenditure such as recurring cost"
    },
    {
      id: 2,
      imgUrl: img2,
      title: "bills payment",
      body: "Our e-BillPay is convinient and efficient payment service that provides multiple billers and institutions, online monetary collections and payments"
    },
    {
      id: 3,
      imgUrl: img3,
      title: "loans",
      body: "Our lointerest personal, car and buisiness loans provides you with the right financing for your needs while guaranteeing you all the security you are looking for "
    },
    {
      id: 4,
      imgUrl: img4,
      title: "wallet",
      body: "Our digital wallet {or electrical wallet is a financial system that runs on any connected device. it securely stores your payment information and passwords for secure,quick and seemless transactions."
    },
    {
      id: 5,
      imgUrl: img5,
      title: "instant bank transfer",
      body: "We facilitate transferring money from your wallet to any bank in the country. it is safer than withdrawing and paying in cash"
    },
    {
      id: 6,
      imgUrl: img6,
      title: "but now pay later",
      body: "Make purchaeses and spread payments over time Sign up, provides all required information, recieve your credit limit and proceed to buy"
    },
    {
      id: 7,
      imgUrl: img7,
      title: "loyalty & reward",
      body: "Our loyalty and reward system are freely given without restrication to encourage repeat business"
    },
    {
      id: 8,
      imgUrl: img8,
      title: "fixed deposit",
      body: "Grow your money with us, we will let you invest a specific  amount of money for a fixed period of time, at an agreed interest rate"
    }
  ];

  return (
    <>
      <View>
        <Carousel
          layout="default"
          data={data}
          ref={isCarousel}
          renderItem={Card}
          itemWidth={ITEM_WIDTH}
          sliderWidth={SLIDER_WIDTH}
          onSnapToItem={(index) => setActiveCard(index)}
           useScrollView={true}
        />
      </View>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeCard}
        carouselRef={isCarousel}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: "50%",
          marginHorizontal: 0,
          backgroundColor: "#155E56"
        }}
        tappableDots={true}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <View
        style={{
          width: SLIDER_WIDTH * 0.8,
          height: windowHeight * 0.15,
          justifyContent: "center",
          margin: "auto",
          gap: 10
        }}>
        <CustomBtn
          width={"100%"}
          borderWidth={2}
          title={"Login"}
          borderRadius={5}
          color={"#155E56"}
          fontWeight={"bold"}
          textColor={"#155E56"}
          borderColor={"#155E56"}
          onPress={handleLogin}
        />

        <CustomBtn
          width={"100%"}
          color={"white"}
          title={"Sign Up"}
          fontWeight={"bold"}
          textColor={"#fff"}
          borderRadius={5}
          borderWidth={2}
          height={"100%"}
          backgroundColor={"#155E56"}
          borderColor={"#155E56"}
          onPress={handleSignUp}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default CardSlider;
