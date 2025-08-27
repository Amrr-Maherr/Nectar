import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import UseFetchData from "../Hooks/UseFetchData";
import AntDesign from "react-native-vector-icons/AntDesign";
import Loader from "../Components/Loader";

export default function Favorite({navigation}) {
  const { Data,Error,Loading } = UseFetchData();
console.log(Data);

  return Loading ? (
    <Loader />
  ) : (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 15,
        backgroundColor: "white",
      }}
    >
      <View
        style={{ alignItems: "center", justifyContent: "center", padding: 20 }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#181725" }}>
          Favorite
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        data={Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductDetail", { product: item });
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 8,
                marginRight: 15,
              }}
            />
            <View style={{ flex: 1, gap: 5 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#181725" }}
              >
                {item.name.slice(0, 20)}...
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "300", color: "#7C7C7C" }}
              >
                {item.difficulty}
              </Text>
            </View>
            <AntDesign name="right" size={20} color="#000" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
