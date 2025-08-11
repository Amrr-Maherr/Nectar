import { Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../ui/Button";

export default function Onboarding({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/onbording2.png")}
    >
      <View
        style={{
          paddingVertical: 90.84,
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        <View style={{ width: 48.47, height: 56.36 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/Logo.png")}
          />
        </View>
        <View
          style={{
            maxWidth: 300,
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: 35.66,
            marginBottom: 19,
          }}
        >
          <Text
            style={{
              fontSize: 48,
              fontWeight: "700",
              color: "white",
              textAlign: "center",
            }}
          >
            Welcome to our store
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "200",
            color: "#FCFCFC",
            marginBottom: 44.88,
          }}
        >
          Get your groceries in as fast as one hour
        </Text>
        <View>
          <Button
            bgColor="#53B175"
            buttonText="Get started"
            w={353}
            h={67}
            r={19}
            font={16}
            color={"#FCFCFC"}
            onPress={() => {
              navigation.replace("SingIn");
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
