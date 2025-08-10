import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../ui/Button";
import { BlurView } from "expo-blur";
import { Image, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

export default function SelectLocation({ navigation }) {
  const [zone, setZone] = useState(null);
  const [area, setArea] = useState(null);

const zones = [
  { label: "Cairo", value: "cairo" },
  { label: "Alexandria", value: "alexandria" },
  { label: "Giza", value: "giza" },
  { label: "Shubra El-Kheima", value: "shubra_el_kheima" },
  { label: "Port Said", value: "port_said" },
  { label: "Suez", value: "suez" },
  { label: "Luxor", value: "luxor" },
  { label: "Aswan", value: "aswan" },
  { label: "Ismailia", value: "ismailia" },
  { label: "Tanta", value: "tanta" },
];

const areas = [
  { label: "Heliopolis", value: "heliopolis" },
  { label: "Zamalek", value: "zamalek" },
  { label: "Maadi", value: "maadi" },
  { label: "Nasr City", value: "nasr_city" },
  { label: "Dokki", value: "dokki" },
  { label: "Garden City", value: "garden_city" },
  { label: "Mohandessin", value: "mohandessin" },
  { label: "New Cairo", value: "new_cairo" },
  { label: "Agouza", value: "agouza" },
  { label: "El Rehab", value: "el_rehab" },
];


  return (
    <>
      <SafeAreaView
        style={{
          paddingVertical: 8,
          paddingHorizontal: 28,
          position: "relative",
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: 414,
            height: 233.1,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/Group 6806.png")}
          />

          <BlurView
            intensity={30}
            tint="light"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <View>
          <Button
            onPress={() => {
              navigation.navigate("Verification");
            }}
            w={40}
            h={40}
            icon={
              <FontAwesome5 name="navigate-before" size={44} color="#212121" />
            }
          />
        </View>
        <View
          style={{
            width: 224.69,
            height: 170.69,
            marginHorizontal: "auto",
            marginTop: 30,
            marginBottom: 40.15,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/location.png")}
          />
        </View>
        <View style={{ marginBottom: 89.35 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 26,
              fontWeight: "500",
              color: "#181725",
              marginBottom: 15,
            }}
          >
            Select Your Location
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "300",
              color: "#7C7C7C",
            }}
          >
            Switch on your location to stay in tune with what’s happening in
            your area
          </Text>
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 16, color: "#7C7C7C", marginBottom: 5 }}>
            Your Zone
          </Text>
          <Dropdown
            style={{
              borderBottomColor: "#E2E2E2",
              borderBottomWidth: 1,
              height: 40,
            }}
            data={zones}
            labelField="label"
            valueField="value"
            placeholder="Select your zone"
            value={zone}
            onChange={(item) => setZone(item.value)}
          />
        </View>

        <View>
          <Text style={{ fontSize: 16, color: "#7C7C7C", marginBottom: 5 }}>
            Your Area
          </Text>
          <Dropdown
            style={{
              borderBottomColor: "#E2E2E2",
              borderBottomWidth: 1,
              height: 40,
            }}
            data={areas}
            labelField="label"
            valueField="value"
            placeholder="Select your area"
            value={area}
            onChange={(item) => setArea(item.value)}
          />
        </View>

        <View style={{ marginTop: 40 }}>
          <Button
            color="white"
            buttonText="Submit"
            w="100%"
            bgColor="#53B175"
            h={67}
            r={19}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
