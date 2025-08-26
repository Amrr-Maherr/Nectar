import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export default function SearchBar({navigation}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search for recipes
  const searchRecipes = async (query) => {
    if (!query.trim()) {
      setRecipes([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
      const data = await response.json();
      setRecipes(data.recipes ? data.recipes : []);
    } catch (error) {
      console.error("Search error:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  // Search with delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchRecipes(searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View>
      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F2F3F2",
          height: 51,
          width: "100%",
          borderRadius: 15,
          paddingHorizontal: 15,
        }}
      >
        <Ionicons
          name="search"
          size={20}
          color="#7C7C7C"
          style={{ marginRight: 10 }}
        />
        <TextInput
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search for recipes..."
          style={{ flex: 1 }}
        />
        {loading && <ActivityIndicator size="small" color="#53B175" />}
      </View>

      {/* Search Results */}
      {searchQuery.length > 0 && (
        <View style={{ marginTop: 10 }}>
          {recipes.length > 0 ? (
            <FlatList
              data={recipes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    padding: 15,
                    backgroundColor: "#fff",
                    marginVertical: 5,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#E2E2E2",
                  }}
                  onPress={() => {
                    console.log("Selected recipe:", item.name);
                    setSearchQuery(item.name);
                    navigation.navigate("ProductDetail", { product: item });
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 8,
                      marginRight: 15,
                      backgroundColor: "#F2F3F2",
                    }}
                    onError={(error) =>
                      console.log("Image loading error:", error)
                    }
                  />
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{ fontSize: 14, color: "#7C7C7C", marginTop: 5 }}
                    >
                      {item.cuisine} • {item.difficulty}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          ) : (
            !loading && (
              <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                <Text
                  style={{ textAlign: "center", color: "#7C7C7C", padding: 20 }}
                >
                  No recipes found
                </Text>
              </View>
            )
          )}
        </View>
      )}
    </View>
  );
}
