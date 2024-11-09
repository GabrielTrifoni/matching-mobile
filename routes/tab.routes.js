import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login } from "./tabs";
import headerStyles from "../styles/headerStyle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Projects from "../pages/Projects";
import { ProjectDetails } from "../pages/ProjectDetails";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

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
  const navigation = useNavigation();

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
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <FontAwesomeIcon
                name="user-circle-o"
                style={headerStyles.usrIcon}
              />
            </TouchableOpacity>
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

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Crie seu perfil", headerTitleAlign: "center" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
