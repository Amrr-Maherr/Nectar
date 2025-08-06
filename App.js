import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import splashScreen from "./src/splashScreen";
import onbording from "./src/onbording";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
