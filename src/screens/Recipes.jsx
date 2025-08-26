import { ActivityIndicator, FlatList, Text, View } from "react-native";
import UseFetchData from "../Hooks/UseFetchData";
import ProductCard from "../Components/ProductCard";
import SearchBar from "../Components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Recipes({navigation}) {
  const { Data, Loading, Error } = UseFetchData();

  if (Loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
  }

  if (Error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>Something went wrong</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
      <View style={{ paddingVertical: 10 }}>
        <SearchBar navigation={navigation} />
      </View>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard Product={item} navigation={navigation} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 15,
        }}
        contentContainerStyle={{
          paddingBottom: 70,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
