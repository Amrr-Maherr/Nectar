import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../ui/Button";
import UseStoreData from "../Hooks/UseStoreData";
import Loader from "../Components/Loader";

export default function RecipeDetail({ route }) {
  const { product } = route.params;

  const { Loading, Error, StoreData } = UseStoreData();

  if (!product) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.noData}>No product data available</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Recipe Image */}
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Recipe Name */}
        <Text style={styles.title}>{product.name}</Text>

        {/* Ingredients */}
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {product.ingredients?.map((ing, index) => (
          <Text key={index} style={styles.listItem}>
            • {ing}
          </Text>
        ))}

        {/* Instructions */}
        <Text style={styles.sectionTitle}>Instructions:</Text>
        {product.instructions?.map((inst, idx) => (
          <Text key={idx} style={styles.listItem}>
            {idx + 1}. {inst}
          </Text>
        ))}

        {/* Extra Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            ⏱ Prep Time: {product.prepTimeMinutes} minutes
          </Text>
          <Text style={styles.infoText}>
            🍳 Cook Time: {product.cookTimeMinutes} minutes
          </Text>
          <Text style={styles.infoText}>🍽 Servings: {product.servings}</Text>
          <Text style={styles.infoText}>
            ⭐ Difficulty: {product.difficulty}
          </Text>
          <Text style={styles.infoText}>🌍 Cuisine: {product.cuisine}</Text>
          <Text style={styles.infoText}>
            🔥 Calories per Serving: {product.caloriesPerServing}
          </Text>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            buttonText={Loading ? "Saving..." : "Add to Favorites"}
            w="100%"
            h={47}
            r={19}
            bgColor="#53B175"
            color="white"
            onPress={() => StoreData(product)}
          />
        </View>
        {Error && (
          <Text style={{ color: "red", marginTop: 10, textAlign: "center" }}>
            Failed to save recipe. Try again.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noData: {
    fontSize: 18,
    color: "#666",
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 6,
    color: "#444",
  },
  listItem: {
    fontSize: 16,
    marginLeft: 12,
    marginBottom: 4,
    color: "#555",
    lineHeight: 22,
  },
  infoBox: {
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },
});
