import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import loginStyles from "../styles/loginStyle";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Button from "../components/button";

const Login = ({ navigation }) => {
  const [secureText, setSecureText] = useState(true);
  const [auth, setAuth] = useState(false);

  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputPassword, setTextInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [isPressed, setIsPressed] = useState(false);

  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  };

  function login() {
    if (textInputEmail.trim() && textInputPassword.trim()) {
      const data = {
        email: textInputEmail,
        password: textInputPassword,
      };
      
      axios
      .post('http://192.168.0.21:3000/auth/login', data)  //mudar url para o ip local
      .then(async (response) => {
          const { access_token } = response.data;
          try {
            await AsyncStorage.setItem('userToken', access_token);
          } catch (e) {
            console.error(e);
          }
          navigation.replace("Home");
        })
        .catch((error) => {
          console.error("aaaaa", error);
          if (error) {
            Alert.alert('Erro', error || 'Erro no login');
          } else {
            Alert.alert('Erro', 'Não foi possível conectar ao servidor');
          }
        });
    } else {
      Alert.alert("Os campos email e senha devem ser preenchidos corretamente!");
    }
  }

  function register() {
    navigation.navigate("Register")
  }

  return (
    <View style={loginStyles.container}>
      {/* FORM */}
      <View>
        <Image
          source={require("../images/logo_unesp.png")}
          style={loginStyles.unesp_image}
        />
        <Text style={loginStyles.pageTitle}>Login</Text>
        <Text style={loginStyles.inputLabel}>Email</Text>
        <TextInput
          autoComplete="email"
          textContentType="emailAddress"
          placeholder="Digite seu email"
          placeholderTextColor="rgba(13, 1, 64, 0.6)"
          style={loginStyles.input}
          onChangeText={(value) => {
            setTextInputEmail(value);
          }}
        ></TextInput>

        <Text style={loginStyles.inputLabel}>Senha</Text>
        <View style = {loginStyles.containerPassword}>
          <TextInput
            secureTextEntry={!showPassword}
            textContentType="newPassword"
            placeholder="Digite sua senha"
            placeholderTextColor="rgba(13, 1, 64, 0.6)"
            style={loginStyles.inputPassword}
            onChangeText={(value) => {
              setTextInputPassword(value);
            }}
          >
            
          </TextInput>
          <MaterialCommunityIcons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={loginStyles.buttonShowPassWord} 
            onPress={toggleShowPassword} 
          />
        </View> 
      </View>

      <Button buttonText={"LOGIN"} onPress={login} auth={auth} />
      <Text style={loginStyles.registerText}>
        Ainda não possui uma conta?{" "}
        <Text 
          style={[
            loginStyles.registerLink,
            isPressed ? loginStyles.pressedLink : null,  
          ]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={register}
        >
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
};

export default Login;
