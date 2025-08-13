import { Image, Text, View } from "react-native";
import Button from "../ui/Button";

export default function OrderAccepted({ navigation }) {
  return (
    <>
      <View
        style={{
          position: "relative",
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
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
              backgroundColor: "rgba(255, 255, 255, 0.73)",
            }}
          ></View>
        </View>
        <View
          style={{
            width: 269,
            height: 240,
            marginHorizontal: "auto",
            marginBottom: 66,
            marginTop: 151,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/Group 6872.png")}
          />
        </View>
        <View style={{ maxWidth: 300, zIndex: 99 }}>
          <Text
            style={{
              textAlign: "center",
              marginBottom: 20,
              fontSize: 28,
              fontWeight: "700",
            }}
          >
            Your Order has been accepted
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginBottom: 20,
              fontSize: 16,
              fontWeight: "300",
              color: "#7C7C7C",
            }}
          >
            Your items has been placcd and is on it’s way to being processed
          </Text>
        </View>
        <View style={{ marginTop: 134, zIndex: 99, paddingHorizontal: 25 }}>
          <Button
            // onPress={() => {
            //   navigation.replace("Login");
            // }}
            color="#FFF9FF"
            buttonText="Track Order"
            bgColor="#53B175"
            weight="600"
            font={14}
            h={67}
            r={19}
            w="100%"
          />
          <Text
            // onPress={() => {
            //   navigation.navigate("Login");
            // }}
            style={{
              paddingVertical: 25,
              marginBottom: 38,
              textAlign: "center",
            }}
          >
            Back to home
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: -80,
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
              backgroundColor: "rgba(255, 255, 255, 0.73)",
            }}
          ></View>
        </View>
      </View>
    </>
  );
}
