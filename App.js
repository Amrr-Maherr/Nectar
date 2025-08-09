import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import onbording from "./src/screens/onbording";
import SingIn from "./src/screens/SingIn";
import MobileNumber from "./src/screens/MobileNumber";
import Verification from "./src/screens/Verification";
import SelectLocation from "./src/screens/SelectLocation";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="onbording" component={onbording} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
