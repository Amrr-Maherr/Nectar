import { Pressable, Text } from "react-native";

export default function Button({ buttonText,bgColor,w,h,r }) {
  return (
    <>
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bgColor,
          width: w,
          height: h,
          borderRadius: r,
        }}
      >
        <Text style={{ color: "white" }}>{buttonText}</Text>
      </Pressable>
    </>
  );
}