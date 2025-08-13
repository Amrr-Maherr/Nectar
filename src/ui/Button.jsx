import { Text, TouchableOpacity, View } from "react-native";

export default function Button({
  buttonText,
  bgColor,
  w,
  h,
  r,
  font,
  weight,
  color,
  icon,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: bgColor,
        width: w,
        height: h,
        borderRadius: r,
        paddingHorizontal: 25,
      }}
    >
      {icon && <View style={{ marginRight: 10 }}>{icon}</View>}
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          color: color,
          fontSize: font,
          fontWeight: weight,
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}
