import { useEffect, useState } from "react";
import { Button, Text, View, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { projectDetailsStyle } from "../styles/projectDetailsStyle";
import { Tag } from "../components/Tag";
import Loading from "../components/loading";
import axios from "axios";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import ReadMore from "@fawazahmed/react-native-read-more";

export const ProjectDetails = ({ route, navigation }) => {
  const { projectId } = route.params;

  const [project, setProject] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://192.168.0.21:3000/projects/${projectId}`);
        if (response.status === 200) {
          setProject(response.data.payload);
        } else {
          Alert.alert("Erro", "Não foi possível carregar os detalhes do projeto.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Falha ao conectar ao servidor.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchProjectDetails();
  }, [projectId]);

  const uniqueKnowledge = [
    ...new Set(project.subjects?.map((subject) => subject.subject?.knowledge)),
  ];

  const Tags = () => (
    <View style={projectDetailsStyle.tagsList}>
      {uniqueKnowledge?.map((knowledge, index) => (
        <Tag key={index} tag={knowledge} />
      ))}
    </View>
  );

  const HashTags = () => (
    <View style={projectDetailsStyle.hashtagContainer}>
      {project.subjects?.map((subject, index) => (
        <Text key={index} style={projectDetailsStyle.hashtag}>
          #{subject.subject?.subject}
        </Text>
      ))}
    </View>
  );

  const handleOpenWebsite = () => {
    Alert.alert("Função em desenvolvimento", "Essa funcionalidade será implementada futuramente pois o website ainda não está no ar.");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : (
        <View style={projectDetailsStyle.container}>
          <View style={projectDetailsStyle.header}>
            <Text style={projectDetailsStyle.headerTitle}>{project.title}</Text>

            <Tags />
          </View>

          <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
            <TouchableOpacity style={projectDetailsStyle.urlButton} onPress={handleOpenWebsite}>
              <FontAwesomeIcon
                name="external-link"
                style={projectDetailsStyle.urlButtonText}
              />
              <Text style={projectDetailsStyle.urlButtonText}>
                Abrir website
              </Text>
            </TouchableOpacity>

            <HashTags />

            <View style={projectDetailsStyle.descriptionContainer}>
              <Text style={projectDetailsStyle.descriptionTitle}>Sobre</Text>
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
                Motivação do projeto
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
            <Image
              source={{ uri: project.attachment.url }}
              style={projectDetailsStyle.attachment}
              />
            </View>
        </View>
      )}
    </View>
  </ScrollView>
  );
};
