import { ActivityIndicator, View } from "react-native";

export default function Loader(){
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
}