import { Image, Text, View } from "react-native";
import Button from "../ui/Button";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function ProductCard({Product}) {
    return (
      <>
        <View
          style={{
            borderColor: "#E2E2E2",
            borderWidth: 1,
            borderRadius: 19,
            gap: 15,
            width: 165,
            marginVertical: 10,
            overflow: "hidden",
            marginRight: 15,
          }}
        >
          <View
            style={{ width: "100%", height: 150, marginHorizontal: "auto" }}
          >
            <Image
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              source={{ uri: Product.image }}
            />
          </View>
          <View style={{ padding: 15 }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#181725",
                  textAlign: "left",
                  marginBottom: 2,
                }}
              >
                {Product.name.slice(0, 10)}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  color: "#7C7C7C",
                  textAlign: "left",
                }}
              >
                Rating {Product.rating}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "semibold",
                  color: "#181725",
                }}
              >
                Review {Product.reviewCount}
              </Text>
              {/* <Image
                style={{ width: 45, height: 45 }}
                source={require("../../assets/NextButton.png")}
              /> */}
              <Button
                w={45.67}
                h={45.67}
                r={17}
                bgColor="#53B175"
                icon={<AntDesign name="plus" size={25} color="white" />}
              />
            </View>
          </View>
        </View>
      </>
    );
}