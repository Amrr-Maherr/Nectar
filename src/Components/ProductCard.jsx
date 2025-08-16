import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ProductCard({ Product, navigation }) {
  return (
    <View style={styles.card}>
      {/* Image */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetail", { product: Product });
        }}
        style={styles.imageWrapper}
      >
        <Image style={styles.image} source={{ uri: Product.image }} />
      </TouchableOpacity>

      {/* Info */}
      <View style={styles.info}>
        {/* Title */}
        <Text style={styles.title}>{Product.name.slice(0, 15)}</Text>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <AntDesign name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{Product.rating}</Text>
          <Text style={styles.reviewText}>({Product.reviewCount} reviews)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: "#fff",
    width: 170,
    marginVertical: 10,
    marginRight: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  imageWrapper: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
    color: "#333",
  },
  reviewText: {
    fontSize: 12,
    color: "#7C7C7C",
    marginLeft: 6,
  },
});
