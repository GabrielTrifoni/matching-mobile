import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { projectDetailsStyle } from "../styles/projectDetailsStyle";
import { Tag } from "../components/Tag";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import ReadMore from "@fawazahmed/react-native-read-more";

const data = {
  id: "Projeto1",
  title: "Projeto 1",
  location: "UNESP - Rio Claro",
  tags: ["Desktop", "Native", "Front-End"],
  coordinator: "Coordenador 1",
  url: "https://www.google.com",
  hashtags: ["#natureza", "#tecnologia", "#computação", "..."],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  motivation:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  video_url: "https://www.youtube.com/watch?v=KjY2rPxLrUg",
};

export const ProjectDetails = ({ route, navigation }) => {
  const { projectId } = route.params;

  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: fetch project details from firebase
    setTimeout(() => {
      setProject(data);
      setLoading(false);
    }, 1000);
  });

  const Tags = () => (
    <View style={projectDetailsStyle.tagsList}>
      {project.tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </View>
  );

  const HashTags = () => (
    <View style={projectDetailsStyle.hashtagContainer}>
      {project.hashtags.map((hashtag, index) => (
        <Text key={index} style={projectDetailsStyle.hashtag}>
          {hashtag}
        </Text>
      ))}
    </View>
  );

  return (
    <View>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <View style={projectDetailsStyle.container}>
          <View style={projectDetailsStyle.header}>
            <Text style={projectDetailsStyle.headerTitle}>{project.title}</Text>

            <Tags />
          </View>

          <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
            <View style={projectDetailsStyle.urlButton}>
              <FontAwesomeIcon
                name="external-link"
                style={projectDetailsStyle.urlButtonText}
              />
              <Text style={projectDetailsStyle.urlButtonText}>
                Abrir website
              </Text>
            </View>

            <HashTags />

            <View style={projectDetailsStyle.descriptionContainer}>
              <Text style={projectDetailsStyle.descriptionTitle}>Sobre .</Text>
              <ReadMore
                numberOfLines={4}
                style={projectDetailsStyle.description}
                seeMoreText="Ver mais"
                seeLessText="Ver menos"
                seeLessStyle={{ color: "#FF9228" }}
                seeMoreStyle={{ color: "#FF9228" }}
              >
                {project.description}
              </ReadMore>

              <Text style={projectDetailsStyle.descriptionTitle}>
                Motivação do projeto .
              </Text>
              <ReadMore
                numberOfLines={4}
                style={projectDetailsStyle.description}
                seeMoreText="Ver mais"
                seeLessText="Ver menos"
                seeLessStyle={{ color: "#FF9228" }}
                seeMoreStyle={{ color: "#FF9228" }}
              >
                {project.motivation}
              </ReadMore>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
