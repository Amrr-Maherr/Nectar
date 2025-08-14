import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard from "../Components/CategoryCard";

export default function Explore() {
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const Data = [
    {
      name: "Frash Fruits & Vegetable",
      image: require("../../assets/pngfuel6.png"),
      bgColor: hexToRgba("#53B175", 0.3),
      border: "#53B175",
    },
    {
      name: "Cooking Oil & Ghee",
      image: require("../../assets/Group 6835.png"),
      bgColor: hexToRgba("#F8A44C", 0.3),
      border: "#F8A44C",
    },
    {
      name: "Meat & Fish",
      image: require("../../assets/pngfuel 9.png"),
      bgColor: hexToRgba("#F7A593", 0.3),
      border: "#F7A593",
    },
    {
      name: "Bakery & Snacks",
      image: require("../../assets/pngfuel 4.png"),
      bgColor: hexToRgba("#D3B0E0", 0.3),
      border: "#D3B0E0",
    },
    {
      name: "Dairy & Eggs",
      image: require("../../assets/pngfuel.png"),
      bgColor: hexToRgba("#FDE598", 0.3),
      border: "#FDE598",
    },
    {
      name: "Beverages",
      image: require("../../assets/pngfuel 644.png"),
      bgColor: hexToRgba("#B7DFF5", 0.3),
      border: "#B7DFF5",
    },
    {
      name: "Dairy & Eggs",
      image: require("../../assets/pngfuel6.png"),
      bgColor: hexToRgba("#836AF6", 0.3),
      border: "#836AF6",
    },
    {
      name: "Beverages",
      image: require("../../assets/pngfuel6.png"),
      bgColor: hexToRgba("#D73B77", 0.3),
      border: "#D73B77",
    },
  ];

  return (
    <>
      <SafeAreaView
        style={{
          paddingHorizontal: 15,
          paddingTop: 50,
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "800" }}
          >
            Find Products
          </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 10,
          }}
          renderItem={({ item }) => <CategoryCard category={item} />}
        />
      </SafeAreaView>
    </>
  );
}