import { Pressable, Text } from "react-native";

export default function Button({ buttonText,bgColor,w,h,r,font,weight,color,icon,onPress }) {
  return (
    <>
      <Pressable
        onPress={() => onPress()}
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bgColor,
          width: w,
          height: h,
          borderRadius: r,
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          flexDirection: "row-reverse",
        }}
      >
        <Text
          style={{
            color: color,
            fontSize: font,
            fontWeight: weight,
          }}
        >
          {buttonText}
        </Text>
        <Text>{icon && icon}</Text>
      </Pressable>
    </>
  );
}