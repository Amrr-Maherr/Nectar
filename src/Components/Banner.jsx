import { Image, View } from "react-native";

export default function Banner() {
    return (
      <>
        <View style={{ width: "100%", height: 114 }}>
          <Image
            style={{ width: "100%", height: "100%",objectFit:"contain" }}
            source={require("../../assets/banner.png")}
          />
        </View>
      </>
    );
}