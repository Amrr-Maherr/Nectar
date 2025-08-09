import { useEffect } from "react";
import { Text, View, Image } from "react-native";

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("onbording");
        }, 3000)
        return () => clearTimeout(timer);
    },[])
    return (
      <>
        <View
          style={{
            backgroundColor: "#53B175",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 15.73,
          }}
        >
          <Image
            style={{ width: 54.7, height: 63.61 }}
            source={require("../../assets/SplashLogo.png")}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 60, fontWeight: "600", color: "white" }}>
              Nectar
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "white",
                letterSpacing: 2,
              }}
            >
              online groceries
            </Text>
          </View>
        </View>
      </>
    );
}