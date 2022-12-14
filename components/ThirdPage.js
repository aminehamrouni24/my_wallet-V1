import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const ThirdPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        width: "90%",
        alignSelf: "center",
      }}
    >
      {/* Image part */}
      <Image
        source={require("../assets/onboard3.png")}
        resizeMode="contain"
        style={{
          width: 220,
          height: 200,
          tintColor: "#FA8072",
          alignSelf: "center",
          marginTop: 85,
          marginBottom: 35,
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          borderBottomEndRadius: 120,
          borderTopEndRadius: 130,
          borderBottomStartRadius: 170,
          borderTopStartRadius: 90,
          backgroundColor: "rgba(250,128,114,0.15)",
          position: "absolute",
          top: 210,
          left: 50,
        }}
      ></View>
      <View
        style={{
          width: 150,
          height: 150,
          borderBottomEndRadius: 170,
          borderTopEndRadius: 90,
          borderBottomStartRadius: 120,
          borderTopStartRadius: 130,
          backgroundColor: "rgba(250,128,114,0.15)",
          position: "absolute",
          top: 210,
          left: 170,
        }}
      ></View>
      {/* Text Part */}
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginTop: 35,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            letterSpacing: 2,
            fontWeight: "bold",
          }}
        >
          Reach your
        </Text>
        <Text
          style={{
            fontSize: 32,
            letterSpacing: 2,
            fontWeight: "bold",
          }}
        >
          goals with ease
        </Text>
      </View>

      {/* ****** */}
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginTop: 35,
          marginBottom: 120,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "justify",
          }}
        >
          Be part of an innovative asset be part of the future , The Gold
          Crypto-currency ...
        </Text>
      </View>
      {/* Skip Part */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,255,0.75)",
            width: 120,
            height: 60,
            alignItems: "center",
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              padding: 2,
              alignItems: "center",
              fontSize: 15,
              marginTop: 15,
              color: "white",
            }}
          >
            Join Us
          </Text>
        </TouchableOpacity>

        {/* ******** */}

        {/* <Text style={{
            padding:2,
            alignItems:"center",
            fontSize:16,
            fontWeight:"bold",
            marginTop:20,
            color:"black"
          }}>1/3</Text> */}
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(250,128,114,0.75)",
            width: 60,
            height: 60,
            borderBottomEndRadius: 400,
            borderTopEndRadius: 400,
            borderBottomStartRadius: 400,
            borderTopStartRadius: 400,
            alignItems: "center",
          }}
            onPress={() => navigation.navigate("Register")}
        >
          <Image
            source={require("../assets/tick.png")}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
              zIndex: 100,
              tintColor: "white",
              margin:10
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
