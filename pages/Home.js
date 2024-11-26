import React from "react";
import { View, Text } from "react-native";

import Button from "../components/button";

import homeStyles from "../styles/homeStyle";
import styles from "../styles/style";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.page}>
        {/* Barra superior */}
        {/* <Header /> */}

        {/* Conteúdo da tela */}
        <View style={homeStyles.container}>
          <Text style={homeStyles.titulo}>
            O que é a extensão?
          </Text>
          <Text style={homeStyles.texto}>
            A extensão universitária da UNESP conecta a academia à comunidade, promovendo troca de conhecimentos e experiências. Esses projetos envolvem alunos, professores e sociedade em ações que impulsionam o desenvolvimento social, cultural e econômico. Fortalece o compromisso social da universidade, contribui para a formação cidadã dos estudantes e oferece soluções inovadoras para desafios locais e regionais, transformando e enriquecendo a realidade.
          </Text>

          <Text style={homeStyles.titulo}>
            Qual a importância de participar?
          </Text>
          <Text style={homeStyles.texto}>
            A extensão universitária é crucial para a formação integral dos estudantes, permitindo a aplicação prática de teorias e promovendo o desenvolvimento sustentável nas comunidades. Ela cria um elo entre o conhecimento acadêmico e as demandas sociais, gerando impacto positivo e duradouro.
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
