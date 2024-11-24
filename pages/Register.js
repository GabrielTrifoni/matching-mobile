import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert, ScrollView } from "react-native";
import axios from "axios";

import loginStyles from "../styles/loginStyle";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Button from "../components/button";

const Register = ({ navigation }) => {
  const [secureText, setSecureText] = useState(true);
  const [auth, setAuth] = useState(false);

  const [textInputName, setTextInputName] = useState("");
  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputPassword, setTextInputPassword] = useState("");
  const [textInputConfirmPassword, setTextInputConfirmPassword] = useState("");
  const [textInputCpf, setTextInputCpf] = useState("");
  const [textInputPhone, setTextInputPhone] = useState("");
  const [textInputBio, setTextInputBio] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function register() {
    if (textInputName.trim() && textInputEmail.trim() && textInputPassword.trim() && textInputConfirmPassword.trim()) {
      if(textInputPassword === textInputConfirmPassword) {
        const data = {
          fullname: textInputName,
          email: textInputEmail,
          password: textInputPassword,
          cpf: textInputCpf,
          phone: textInputPhone,
          bio: textInputBio,
        };
  
        axios
          .post('http://192.168.0.21:3000/users', data)  //mudar url para o ip local
          .then((response) => {
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
            navigation.replace("Login");
          })
          .catch((error) => {
            console.error(error);
            if (error.response && error.response.data) {
              Alert.alert('Erro', error || 'Erro no cadastro');
            } else {
              Alert.alert('Erro', 'Não foi possível conectar ao servidor');
            }
          });
      } else {
        Alert.alert('Erro', 'As senhas não coincidem!');
      }
    } else {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos corretamente!');
    }
  }

  function login() {
    navigation.navigate("Login");
  }

  return (
    <ScrollView>

    <View style={loginStyles.container}>
      {/* FORM */}
      <View>
        <Image
          source={require("../images/logo_unesp.png")}
          style={loginStyles.unesp_image}
        />
        <Text style={loginStyles.pageTitle}>Cadastre-se</Text>
        <Text style={loginStyles.inputLabel}>Nome completo</Text>
        <TextInput
          placeholder="Digite seu nome completo"
          placeholderTextColor="rgba(13, 1, 64, 0.6)"
          style={loginStyles.input}
          onChangeText={(value) => {
            setTextInputName(value);
          }}
        ></TextInput>

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
          ></TextInput>
          <MaterialCommunityIcons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={loginStyles.buttonShowPassWord} 
            onPress={toggleShowPassword} 
            />
        </View> 

        <Text style={loginStyles.inputLabel}>Confirmar senha</Text>
        <View style = {loginStyles.containerPassword}>
          <TextInput
            secureTextEntry={!showConfirmPassword}
            textContentType="newPassword"
            placeholder="Confirme sua senha"
            placeholderTextColor="rgba(13, 1, 64, 0.6)"
            style={loginStyles.inputPassword}
            onChangeText={(value) => {
              setTextInputConfirmPassword(value);
            }}
          ></TextInput>
          <MaterialCommunityIcons 
            name={showConfirmPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={loginStyles.buttonShowPassWord} 
            onPress={toggleShowConfirmPassword} 
            />
        </View> 

        <Text style={loginStyles.inputLabel}>CPF</Text>
          <TextInput
            placeholder="Digite seu CPF"
            placeholderTextColor="rgba(13, 1, 64, 0.6)"
            style={loginStyles.input}
            onChangeText={(value) => {
              setTextInputCpf(value);
            }}
          ></TextInput>

        <Text style={loginStyles.inputLabel}>Telefone</Text>
          <TextInput
            placeholder="Digite seu telefone"
            placeholderTextColor="rgba(13, 1, 64, 0.6)"
            style={loginStyles.input}
            onChangeText={(value) => {
              setTextInputPhone(value);
            }}
          ></TextInput>

        <Text style={loginStyles.inputLabel}>Bio</Text>
          <TextInput
            placeholder="Informe sua bio"
            placeholderTextColor="rgba(13, 1, 64, 0.6)"
            style={loginStyles.input}
            onChangeText={(value) => {
              setTextInputBio(value);
            }}
          ></TextInput>
      </View>

      <Button buttonText={"CADASTRAR"} onPress={register} auth={auth} />

      <Text style={loginStyles.registerText}>
        Já possui uma conta?{" "}
        <Text 
          style={[
            loginStyles.registerLink,
            isPressed ? loginStyles.pressedLink : null,  
          ]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={login}
          >
          Login
        </Text>
      </Text>
    </View>
    </ScrollView>
  );
};

export default Register;
