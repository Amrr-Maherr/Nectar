import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import SingIn from "../screens/SingIn";
import MobileNumber from "../screens/MobileNumber";
import Verification from "../screens/Verification";
import SelectLocation from "../screens/SelectLocation";
import Login from "../screens/Login";
import SingUp from "../screens/SingUp";
import Onboarding from "../screens/Onboarding"
import Tabs from "../TabsNavigation/Tabs";

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SingUp} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </>
  );
}
