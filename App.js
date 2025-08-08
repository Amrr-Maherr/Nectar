import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import splashScreen from "./src/screens/splashScreen";
import onbording from "./src/screens/onbording";
import SingIn from "./src/screens/SingIn";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="onbording" component={onbording} />
        <Stack.Screen name="SingIn" component={SingIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
