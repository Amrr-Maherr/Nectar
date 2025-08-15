import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Components/SearchBar";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";
import UseFetchData from "../Hooks/UseFetchData";
import { ScrollView } from "react-native-gesture-handler";
import SectionTitle from "../Components/SectionTitle";
import Loader from "../Components/Loader";
import GroceriesCard from "../Components/GroceriesCard";
export default function Home({ navigation }) {
      const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };
    const GroceriesData = [
      {
        title: "Pulses",
        image: require("../../assets/4215936-pulses-png-8-png-image-pulses-png-409_409 1.png"),
        bgColor: hexToRgba("#F8A44C", 0.3),
      },
      {
        title: "Rice",
        image: require("../../assets/8-82858_download-sack-of-rice-png 1.png"),
        bgColor: hexToRgba("#53B175", 0.3),
      },
    ];
    const {Loading,Error,Data} = UseFetchData()
    return Loading ? (
      <Loader />
    ) : (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingHorizontal: 25,
          paddingTop: 50,
        }}
      >
        <FlatList
          data={[1, 2]}
          keyExtractor={(item) => item.toString()}
          ListHeaderComponent={() => (
            <>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                  marginBottom: 20,
                }}
              >
                <Image
                  style={{ width: 47, height: 55 }}
                  source={require("../../assets/Logo.png")}
                />
                <Text
                  style={{
                    textAlign: "center",
                    color: "#4C4F4D",
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  Dhaka, Banassre
                </Text>
              </View>

              <View style={{ marginBottom: 20 }}>
                <SearchBar />
              </View>

              <Banner />
              <SectionTitle
                title="Groceries"
                link="See all"
                LinkText="SeeAll"
              />
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                  alignItems: "center",
                  gap: 14,
                  paddingVertical: 20,
                }}
              >
                {GroceriesData.map((data, index) => (
                  <GroceriesCard data={data} key={index} />
                ))}
              </ScrollView>
              <SectionTitle
                title="Exclusive Offer"
                link="See all"
                LinkText="SeeAll"
              />
            </>
          )}
          renderItem={({ item }) =>
            item === 1 ? (
              <FlatList
                horizontal
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <ProductCard
                    navigation={navigation}
                    Product={item}
                    style={{ marginRight: 15 }}
                  />
                )}
                ListEmptyComponent={<Text>No data available</Text>}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 10 }}
              />
            ) : (
              <>
                <SectionTitle
                  title="Best Selling"
                  link="SeeAll"
                  LinkText="See all"
                  navigation={navigation}
                />
                <FlatList
                  horizontal
                  data={Data}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <ProductCard
                      navigation={navigation}
                      Product={item}
                      style={{ marginRight: 15 }}
                    />
                  )}
                  ListEmptyComponent={<Text>No data available</Text>}
                  showsHorizontalScrollIndicator={false}
                  style={{ marginTop: 10 }}
                />
              </>
            )
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </SafeAreaView>
    );

}