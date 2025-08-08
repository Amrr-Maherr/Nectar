import { Alert, Image, Text, TextInput, View } from "react-native";
import Button from "../ui/Button";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useEffect, useState } from "react";

export default function SingIn({ navigation }) {
    const [mobileNumber, setMobileNumber] = useState(null)
    // handleSignIn: Responsible for handling the sign-in process.
    // This function will trigger the authentication flow for the selected provider
    const handelSighIn = () => {
        if (!mobileNumber) {
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
                  onPress: () => console.log("Retry pressed"),
                  style: "default",
                },
              ],
              { cancelable: true }
            );
        } else {
            navigation.navigate("splashScreen");
        }
    }
    return (
      <>
        <View
          style={{
            backgroundColor: "white",
            position: "relative",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              width: "100%",
              height: 300,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/SingInBg.png")}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 24.53,
              width: "100%",
              paddingBottom: 90,
            }}
          >
            <View
              style={{
                maxWidth: 222,
                marginRight: "auto",
                marginBottom: 30.61,
              }}
            >
              <Text
                style={{ fontSize: 26, fontWeight: "500", color: "#030303" }}
              >
                Get your groceries with nectar
              </Text>
            </View>
            <View>
              <TextInput
                value={mobileNumber}
                onChange={(number) => {
                  setMobileNumber(number);
                }}
                style={{ borderBottomColor: "#E2E2E2", borderBottomWidth: 1 }}
                placeholder="Inter your phone number"
                keyboardType="numeric"
                maxLength={11}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 37.8,
                marginTop: 40,
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "500", color: "#828282" }}
              >
                Or connect with social media
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <Button
                buttonText="Continue with Google"
                bgColor="#5383EC"
                w="100%"
                h={67}
                r={19}
                font={16}
                color={"#FCFCFC"}
                icon={<FontAwesome5 name="google" size={24} color="#FCFCFC" />}
                onPress={handelSighIn}
              />
              <Button
                buttonText="Continue with Facebook"
                bgColor="#4A66AC"
                w="100%"
                h={67}
                r={19}
                font={16}
                color={"#FCFCFC"}
                icon={
                  <FontAwesome5 name="facebook-f" size={24} color="#FCFCFC" />
                }
                onPress={handelSighIn}
              />
            </View>
          </View>
        </View>
      </>
    );
}
