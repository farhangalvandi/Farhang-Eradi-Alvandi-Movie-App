import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TvScreen from "../screens/TvScreen";

const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: "none" },
        tabBarActiveTintColor: "#2e3e52",
        tabBarIndicatorStyle: { backgroundColor: "#2e3e52" }
      }}
    >
      <Tab.Screen
        name="Movies"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search Results"
        component={SearchScreen}
      />
      <Tab.Screen
        name="TV Shows"
        component={TvScreen}
      />
    </Tab.Navigator>
  );
}

export default TabStack;
