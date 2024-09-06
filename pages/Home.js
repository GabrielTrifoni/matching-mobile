import React from "react";
import { View, Text } from "react-native";

import Button from "../components/button";

import homeStyles from "../styles/homeStyle";
import styles from "../styles/style";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        {/* Barra superior */}
        {/* <Header /> */}

        {/* Conteúdo da tela */}
        <View style={styles.container}>
          <Text style={homeStyles.titulo}>
            O que são os projetos de extensão?
          </Text>
          <Text style={homeStyles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>

          <Text style={homeStyles.titulo}>
            Qual a importância de participar?
          </Text>
          <Text style={homeStyles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>

          <Text style={homeStyles.titulo}>Como a comunidade pode ajudar?</Text>
          <Text style={homeStyles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
        </View>

        {/* Botão inferior */}
        <Button
          buttonText={"VER PROJETOS"}
          onPress={() => {
            navigation.navigate("Projects");
          }}
        />
      </View>
    </>
  );
};

export default Home;
