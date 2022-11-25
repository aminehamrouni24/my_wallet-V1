import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* header part */}
        <Header title="Home" />
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 60,
            width: "100%",
            height: "100%",
            marginTop: -40,
          }}
        >
          {/* ******* Cards List */}
          <View
            style={{
              width: 340,
              height: 190,
              // backgroundColor: "#009fdd",
              alignSelf: "center",
              margin: 20,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <Text
              style={{
                margin: 50,
                textAlign: "center",
              }}
            >
              Coins design Here !!!
            </Text>
          </View>
          <View
            style={{
              width: 320,
              height: 50,
              backgroundColor: "white",
              alignSelf: "center",
              margin: 20,
              marginTop: -50,
              borderRadius: 20,
              borderColor: "black",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                margin: 10,
                textAlign: "center",
              }}
            >
              {" "}
              NFC Technology scanning Here !!!
            </Text>
          </View>
          {/* ****************** */}

          <View
            style={{
              margin: 30,
            }}
          >
            <Text>All services</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 10,
                  borderRadius: 10,
                }}
              ></View>
              <View
                style={{
                  width: 60,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 10,
                  borderRadius: 10,
                }}
              ></View>
              <View
                style={{
                  width: 60,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 10,
                  borderRadius: 10,
                }}
              ></View>
              <View
                style={{
                  width: 60,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 10,
                  borderRadius: 10,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              margin: 20,
              borderWidth:1,
              borderColor:"black"
            }}
          >
            <Text>Transactions Here</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 160,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 10,
                  borderRadius: 10,
                }}
              >
                <Text>
                  Transaction
                </Text>
              </View>
              <View
                style={{
                  width: 60,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 10,
                  borderRadius: 10,
                }}
              >
                <Text>
                  Time
                </Text>
              </View>
              <View
                style={{
                  width: 70,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 10,
                  borderRadius: 10,
                }}
              >
                <Text>
                  Amount
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
