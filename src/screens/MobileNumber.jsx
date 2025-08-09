import { Alert, Image, Pressable, TextInput, View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import Button from "../ui/Button";
import FontAwesome5 from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
export default function MobileNumber({ navigation }) {
  const [Number, setNumber] = useState(null);
  const handelNumber = () => {
    if (!Number) {
      Alert.alert(
        "Error",
        "Please enter a valid phone number (11 digits).",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Retry",
            style: "default",
          },
        ],
        { cancelable: true }
      );
    } else {
      // setTimeout(() => {
      navigation.navigate("SelectLocation");
      // },3000)
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          paddingVertical: 8,
          paddingHorizontal: 28,
          position: "relative",
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: 414,
            height: 233.1,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/Group 6806.png")}
          />

          <BlurView
            intensity={30}
            tint="light"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          ></BlurView>
        </View>
        <View>
          <Text>
            <Button
              w={40}
              h={40}
              icon={
                <FontAwesome5
                  name="navigate-before"
                  size={44}
                  color="#212121"
                />
              }
            />
          </Text>
        </View>
        <View style={{ marginTop: 65.19, marginBottom: 27.58 }}>
          <Text style={{ fontSize: 26, fontWeight: "500", color: "#181725" }}>
            Enter your mobile number
          </Text>
        </View>
        <View>
          <Text style={{ color: "#7C7C7C", fontSize: 16, fontWeight: "500" }}>
            Mobile Number
          </Text>
        </View>
        <View>
          <TextInput
            onChange={(number) => {
              setNumber(number);
            }}
            style={{ borderBottomColor: "#E2E2E2", borderBottomWidth: 1 }}
            placeholder="+020"
            keyboardType="numeric"
            maxLength={11}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 222.59,
            flexDirection: "row-reverse",
          }}
        >
          <Pressable
            onPress={() => {
              handelNumber();
            }}
            style={{
              width: 67,
              height: 67,
              marginLeft: "auto",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/NextButton.png")}
            />
          </Pressable>
          <View>
            <Text style={{ fontSize: 18, color: "#53B175" }}>Resend Code</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
