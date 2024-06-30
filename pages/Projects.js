import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "../components/Card";
import projectsStyles from "../styles/projectsStyle";

const data = [
  {
    key: "Projeto1",
    title: "Projeto 1",
    location: "UNESP - Rio Claro",
    tags: ["Desktop", "Native", "Front-End"],
    coordinator: "Coordenador 1",
  },
  {
    key: "Projeto2",
    title: "Projeto 2",
    location: "UNESP - Rio Claro",
    tags: ["tag2", "tag2", "tag3"],
    coordinator: "Coordenador 2",
  },
  {
    key: "Projeto3",
    title: "Projeto 3",
    location: "UNESP - Rio Claro",
    tags: ["tag1", "tag2", "tag3"],
    coordinator: "Coordenador 3",
  },
  {
    key: "Projeto4",
    title: "Projeto 3",
    location: "UNESP - Rio Claro",
    tags: ["tag1", "tag2", "tag3"],
    coordinator: "Coordenador 3",
  },
  {
    key: "Projeto5",
    title: "Projeto 3",
    location: "UNESP - Rio Claro",
    tags: ["tag1", "tag2", "tag3"],
    coordinator: "Coordenador 3",
  },
];

const Projects = ({ navigation }) => {
  const onCardPress = ({ projectId }) => {
    navigation.navigate("ProjectDetails", {
      projectId,
    });
  };

  return (
    <View style={projectsStyles.container}>
      <FlatList
        data={data}
        scrollEnabled={true}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <Card
            key={item.key}
            id={item.key}
            coordinator={item.coordinator}
            location={item.location}
            tags={item.tags}
            title={item.title}
            onPress={onCardPress}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default Projects;
