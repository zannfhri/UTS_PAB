const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DATE1 from "./screens/DATE1";
import TIME from "./screens/TIME";
import SUMMARY from "./screens/SUMMARY";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TIME"
              component={TIME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DATE1"
              component={DATE1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SUMMARY"
              component={SUMMARY}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
