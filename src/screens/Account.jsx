import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Button from "../ui/Button";

export default function Account({ navigation }) {
  const ProfileDataArray = [
    {
      title: "Order",
      icon: <Entypo name="shop" size={25} color="#212121" />,
      link: "Order",
    },
    {
      title: "My Details",
      icon: <Feather name="user" size={25} color="#212121" />,
      link: "MyDetails",
    },
    {
      title: "Delivery Address",
      icon: <Entypo name="location" size={25} color="#212121" />,
      link: "DeliveryAddress",
    },
    {
      title: "Payment Methods",
      icon: <MaterialIcons name="payment" size={25} color="#212121" />,
      link: "PaymentMethods",
    },
    {
      title: "Promo Code",
      icon: <Entypo name="ticket" size={25} color="#212121" />,
      link: "PromoCode",
    },
    {
      title: "Notifications",
      icon: <Feather name="bell" size={25} color="#212121" />,
      link: "Notifications",
    },
    {
      title: "Help",
      icon: <Entypo name="help" size={25} color="#212121" />,
      link: "Help",
    },
    {
      title: "About",
      icon: <MaterialIcons name="info-outline" size={25} color="#212121" />,
      link: "About",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingHorizontal: 25,
          paddingTop: 31,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row-reverse",
          gap: 20,
        }}
      >
        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#181725" }}>
              Afsar Hossen
            </Text>
            <EvilIcons name="pencil" size={25} color="#53B175" />
          </View>
          <Text>Imshuvo97@gmail.com</Text>
        </View>
        <View>
          <Image
            style={{ width: 47.84, height: 55.64 }}
            source={require("../../assets/Logo.png")}
          />
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        {ProfileDataArray.map((ele, index) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(`${ele.link}`);
            }}
            key={index}
            style={{
              paddingVertical: 15,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              paddingHorizontal: 25,
              borderColor: "#E2E2E2",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "row-reverse",
              gap: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row-reverse",
                  gap: 20,
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "800", color: "#181725" }}
                >
                  {ele.title}
                </Text>
                <View>{ele.icon}</View>
              </View>
              <View>
                <Text>
                  <MaterialIcons
                    name="navigate-next"
                    size={35}
                    color="#181725"
                  />
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginTop: 32, paddingHorizontal: 26 }}>
        <Button
          onPress={() => {
            navigation.replace("Login");
          }}
          color="#53B175"
          buttonText="Log Out"
          bgColor="#F2F3F2"
          weight="bold"
          font={14}
          h={67}
          r={19}
          icon={<Feather name="log-out" size={25} color="#53B175" />}
        />
      </View>
    </SafeAreaView>
  );
}
