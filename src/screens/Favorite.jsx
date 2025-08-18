import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import UseFetchData from "../Hooks/UseFetchData";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Favorite({navigation}) {
  const { Data } = UseFetchData();

  return (
    <View style={{ flex: 1, paddingTop: 50,paddingHorizontal:15,backgroundColor:"white" }}>
      <FlatList
        contentContainerStyle={{
          paddingBottom:80
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
              padding: 10,
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
            <Text style={{ flex: 1, fontSize: 16 }}>{item.name}</Text>
            <AntDesign name="right" size={20} color="#000" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
