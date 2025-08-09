import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import splashScreen from "./src/screens/splashScreen";
import onbording from "./src/screens/onbording";
import SingIn from "./src/screens/SingIn";
import MobileNumber from "./src/screens/MobileNumber";
import Verification from "./src/screens/Verification";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Verification"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="onbording" component={onbording} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
