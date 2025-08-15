import { Alert, Image, Text, TextInput, View } from "react-native";
import Button from "../ui/Button";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SingUp({ navigation }) {
  const [userName,setUserName] = useState(null)
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
    const StoreData = async () => {
      const userData = {
        userName,
        Email,
        Password,
      };
      try {
        console.log(userData);
        const Value = await AsyncStorage.setItem("UserData", JSON.stringify(userData));
        navigation.replace("Login");
      } catch (error) {
        console.log(error);
      }
    };
  const SignIn = () => {
    if (!userName || !Email || !Password) {
      Alert.alert(
        "Missing Information",
        "Please fill in all the fields.", 
        [
          {
            text: "OK",
            style: "default",
          },
        ],
        { cancelable: true }
      );
    } else {
      setEmail("")
      setPassword("")
      setUserName("")
      StoreData()
    }
  }
    return (
      <>
        <View
          style={{ flex: 1, backgroundColor: "white", position: "relative" }}
        >
          <View
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: 302.29,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Group 6806.png")}
            />
            <View
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.74)",
              }}
            ></View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 77,
              width: 47.84,
              height: 55.64,
              marginHorizontal: "auto",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Logo.png")}
            />
          </View>
          <View
            style={{ marginTop: 100.21, paddingHorizontal: 25, zIndex: 99 }}
          >
            <View style={{ marginBottom: 40 }}>
              <Text
                style={{ fontSize: 26, fontWeight: "600", marginBottom: 15 }}
              >
                Sign Up
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "400", color: "#7C7C7C" }}
              >
                Enter your credentials to continue
              </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{ fontSize: 16, color: "#7C7C7C", marginBottom: 10 }}
              >
                Username
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setUserName(text);
                }}
                style={{ borderBottomColor: "#E2E2E2", borderBottomWidth: 1 }}
                placeholder="Inter your Username"
                keyboardType="default"
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{ fontSize: 16, color: "#7C7C7C", marginBottom: 10 }}
              >
                Email
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setEmail(text);
                }}
                style={{ borderBottomColor: "#E2E2E2", borderBottomWidth: 1 }}
                placeholder="Inter your Email"
                keyboardType="email-address"
              />
            </View>
            <View>
              <Text
                style={{ fontSize: 16, color: "#7C7C7C", marginBottom: 10 }}
              >
                Password
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={{ borderBottomColor: "#E2E2E2", borderBottomWidth: 1 }}
                placeholder="Inter your Password"
                maxLength={11}
                secureTextEntry={true}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#181725",
                  marginBottom: 10,
                  textAlign: "left",
                }}
              >
                By continuing you agree to our{" "}
                <Text style={{ color: "#53B175" }}>
                  Terms of Service and Privacy
                </Text>
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                onPress={() => {
                  SignIn();
                }}
                w="100%"
                buttonText="Sing Up"
                h={67}
                bgColor="#53B175"
                r={19}
                color="white"
              />
            </View>
            <View
              style={{
                marginTop: 25,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 14 }}>Don’t have an account?</Text>
              <Text
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={{ fontSize: 14, color: "#53B175" }}
              >
                Singup
              </Text>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 302.29,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/Group 6806.png")}
            />
            <View
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.74)",
              }}
            ></View>
          </View>
        </View>
      </>
    );
}