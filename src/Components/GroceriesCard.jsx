import { Image, Text, View } from "react-native";

export default function GroceriesCard({data}) {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 15,
            borderRadius: 18,
            height: 105,
            backgroundColor: data.bgColor,
            padding: 15,
            width: 248,
          }}
        >
          <Image
            style={{ objectFit: "cover", width: 69, height: 70 }}
            source={data.image}
          />
          <Text
            style={{ fontSize: 20, fontWeight: "semibold", color: "#3E423F" }}
          >
            {data.title}
          </Text>
        </View>
      </>
    );
}