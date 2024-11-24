import React, { useEffect, useState } from "react";
import { View, Alert, FlatList } from "react-native";
import axios from "axios";
import { Card } from "../components/Card";
import projectsStyles from "../styles/projectsStyle";
import { Text } from "react-native";

const Projects = ({ navigation }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os projetos
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://192.168.0.21:3000/projects?page=1&size=10"); // mudar url para ip local
        if (response.status === 200) {
          const items = response.data.payload.items || [];
          setProjects(items);
          // console.log("Projetos retornados com sucesso:", items);
        } else {
          Alert.alert("Erro", "Falha ao recuperar projetos.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert(
          "Erro",
          error.response?.data?.message || "Não foi possível conectar ao servidor"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const onCardPress = (projectId) => {
    navigation.navigate("ProjectDetails", { projectId });
  };

  if (loading) {
    return (
      <View style={projectsStyles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={projectsStyles.container}>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.title}
            coordinator={item.supervisor?.fullname || "Sem coordenador"}
            location={item.location || "Unesp - Rio Claro"}
            tags={item.subjects?.map((i) => i.subject.subject) || []}
            imageUrl={item.attachment?.url || null}
            onPress={() => onCardPress(item.id)}
          />
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default Projects;
