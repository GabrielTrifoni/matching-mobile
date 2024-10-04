import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login } from "./tabs";
import headerStyles from "../styles/headerStyle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Projects from "../pages/Projects";
import { ProjectDetails } from "../pages/ProjectDetails";
import Register from "../pages/Register";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      source={require("../images/logo_unesp.png")}
      style={headerStyles.unesp_logo}
    />
  );
}

// (ver qual estratégia de rota será utilizada)
export default function TabRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: headerStyles.barra_superior,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      ></Stack.Screen>

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ header: () => null }}
      ></Stack.Screen>

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <FontAwesomeIcon
              name="user-circle-o"
              style={headerStyles.usrIcon}
            />
          ),
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="Projects"
        component={Projects}
        options={{ title: "Projetos de Extensão", headerTitleAlign: "center" }}
      ></Stack.Screen>

      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={{ title: "", headerTitleAlign: "center" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
