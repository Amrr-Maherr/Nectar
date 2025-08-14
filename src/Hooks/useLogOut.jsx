import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLogOut({ navigation }) {
  const LogOut = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      navigation.replace("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return LogOut;
}