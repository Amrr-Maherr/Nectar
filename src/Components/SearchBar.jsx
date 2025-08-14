import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchBar() {
    const [SearchQuery,setSearchQuery] = useState("")
  return (
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
      onChangeText={(text)=>{
        setSearchQuery(text)
      }}
        placeholder="Search Store"
        keyboardType="default"
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}
