import { Image, Text, View } from "react-native";

export default function CategoryCard({category}) {
    return (
      <>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 27.52,
            width: 174,
            Height: 189,
            backgroundColor: category.bgColor || "red",
            borderRadius: 18,
            marginTop:10,
            paddingHorizontal:20,
            paddingVertical: 15,
            borderColor:category.border,
            borderWidth:1
          }}
        >
          <Image
            style={{ width: 111, height:84, objectFit: "contain" }}
            source={category.image}
          />
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "700",
                color: "#181725",
              }}
            >
              {category.name}
            </Text>
        </View>
      </>
    );
}