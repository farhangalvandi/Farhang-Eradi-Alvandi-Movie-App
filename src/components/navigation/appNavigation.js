import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieDetail from "../screens/MovieDetailScreen";
import { HeaderBackButton } from "@react-navigation/elements";
import TabStack from "../tabs/TabStack";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const renderHeaderLeft = ({ navigation }) => (
    <HeaderBackButton
      onPress={() => navigation.goBack()}
      label="Back to List"
      labelVisible={true}
    />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center"
        }}
      >
        <Stack.Screen
          name="MoviesApp"
          component={TabStack}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#2e3e52" }
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#273646"
            },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name="Detail"
          component={MovieDetail}
          options={({ navigation, route }) => ({
            headerLeft: () => renderHeaderLeft({ navigation }),
            title: route.params.title
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;