import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Components/SearchBar";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";
import UseFetchData from "../Hooks/UseFetchData";
import { ScrollView } from "react-native-gesture-handler";
import SectionTitle from "../Components/SectionTitle";
import Loader from "../Components/Loader";
export default function Home({navigation}) {
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
                  <ProductCard Product={item} style={{ marginRight: 15 }} />
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
                    <ProductCard Product={item} style={{ marginRight: 15 }} />
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