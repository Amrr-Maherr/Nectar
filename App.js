import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/StackNavigation/StackNavigation";
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}
