import { Image, Text, TextInput, View } from "react-native";
import Button from "../ui/Button";

export default function Login({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
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
              backgroundColor: "rgba(255, 255, 255, 0.7)",
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
        <View style={{ marginTop: 100.21, paddingHorizontal: 25,zIndex:99 }}>
          <View style={{ marginBottom: 40 }}>
            <Text style={{ fontSize: 26, fontWeight: "600", marginBottom: 15 }}>
              Login
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#7C7C7C" }}>
              Enter your email and password
            </Text>
          </View>
          <View style={{ marginBottom: 40 }}>
            <Text style={{ fontSize: 16, color: "#7C7C7C", marginBottom: 10 }}>
              Email
            </Text>
            <TextInput
              style={{ borderBottomColor: "#E2E2E2", borderBottomWidth: 1 }}
              placeholder="Inter your phone number"
              keyboardType="email-address"
              maxLength={11}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "#7C7C7C", marginBottom: 10 }}>
              Password
            </Text>
            <TextInput
              style={{ borderBottomColor: "#E2E2E2", borderBottomWidth: 1 }}
              placeholder="Inter your phone number"
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
                textAlign: "right",
              }}
            >
              Forgot Password?
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Button
              w="100%"
              buttonText="Log In"
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
                navigation.navigate("SignUp");
              }}
              style={{ fontSize: 14, color: "#53B175" }}
            >
              Singin
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
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
          ></View>
        </View>
      </View>
    </>
  );
}