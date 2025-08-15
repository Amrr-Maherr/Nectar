import { Text, View } from "react-native";

export default function SectionTitle({title,link,LinkText,navigation}) {
  return (
    <>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingVertical: 20,
        }}
      >
        <Text
          style={{ fontSize: 24, fontWeight: "semibold", color: "#181725" }}
        >
          {title}
        </Text>
        <Text
        onPress={()=>{
            navigation.navigate(link);
        }}
          style={{ fontSize: 16, fontWeight: "semibold", color: "#53B175" }}
        >
          {LinkText}
        </Text>
      </View>
    </>
  );
}
