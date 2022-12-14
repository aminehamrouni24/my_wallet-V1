import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import React from "react";


const SecondPage = () => {
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
        source={require("../assets/onboard2.png")}
        resizeMode="contain"
        style={{
          width: 220,
          height: 200,
          tintColor: "rgba(0,0,255,0.75)",
          alignSelf: "center",
          marginTop: 85,
          marginBottom: 35,
        }}
      />
      <View
        style={{
          width: 120,
          height: 120,
          borderBottomEndRadius: 120,
          borderTopEndRadius: 130,
          borderBottomStartRadius: 170,
          borderTopStartRadius: 90,
          backgroundColor: "rgba(0,0,255,0.1)",
          position: "absolute",
          top: 250,
          left: 30,
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
          backgroundColor: "rgba(0,0,255,0.1)",
          position: "absolute",
          top: 70,
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
            fontSize: 30,
            letterSpacing: 1,
            fontWeight: "bold",
          }}
        >
          Track your money
        </Text>
        <Text
          style={{
            fontSize: 30,
            letterSpacing: 1,
            fontWeight: "bold",
          }}
        >
          Trust our system
        </Text>
      </View>

      {/* ****** */}
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginTop: 35,
          marginBottom: 150,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "justify",
          }}
        >
          Stay on top effortessly by tracking your subscriptions and bills ..
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
          <Text
            style={{
              padding: 2,
              alignItems: "center",
              fontSize: 15,
              marginTop: 15,
              color: "white",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>

        {/* ******** */}
        <Text
          style={{
            padding: 2,
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 15,
            color: "black",
          }}
        >
          . . .
        </Text>
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
          onPress={() => navigation.navigate("ThirdPage")}
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
            2/3
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({});
