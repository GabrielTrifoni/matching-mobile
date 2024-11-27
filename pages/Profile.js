import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { profileStyles } from "../styles/profileStyle";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Checkbox from "expo-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

import Button from "../components/button";
import { ScrollView } from "react-native";
import Loading from "../components/loading";

const Profile = () => {
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({ fullname: '', email: '', interests: [] });
  const [newInterests, setNewInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCheckboxChange = (subjectId) => {
    if (!formData.interests.includes(subjectId)) {
      setNewInterests([...newInterests, subjectId]);
    }

    setFormData((prevState) => {
      const newInterests = prevState.interests.includes(subjectId)
        ? prevState.interests.filter(id => id !== subjectId)
        : [...prevState.interests, subjectId];
      return { ...prevState, interests: newInterests };
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          Alert.alert("Erro", "Usuário não autenticado.");
          return;
        }

        const response = await axios.get('http://192.168.0.21:3000/users/details', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData({ 
          fullname: response.data.fullname, 
          email: response.data.email, 
          bio: response.data.bio,
          interests: response.data.subjects.map(subject => subject.subject.id) 
      });
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        Alert.alert("Erro", "Não foi possível carregar os dados do usuário.");
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await axios.get("http://192.168.0.21:3000/subjects", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const { payload } = response.data;
        setSubjects(payload);
        console.log(subjects);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }


    fetchSubjects();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await AsyncStorage.getItem('userToken');
      await axios.post('http://192.168.0.21:3000/user/subjects', {
        email: formData.email,
        subjects: newInterests
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      Alert.alert("Sucesso", "Interesses salvos com sucesso!");
      console.log("Dados atualizados com sucesso");
    } catch (error) {
      console.error("Erro ao atualizar perfil.", error);
    }
  };

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <ScrollView>
      <View style={profileStyles.container}>
        <TextInput
          placeholderTextColor="#00000099"
          style={profileStyles.courseInput}
          value={formData.fullname}
          editable={false}
        />
        <View style={profileStyles.bioContainer}>
          <Text style={profileStyles.inputLabel}>Bio</Text>
          <AntDesignIcon name="edit" style={profileStyles.editIcon} />
        </View>
        <TextInput
          placeholder="Diga um pouco sobre você"
          placeholderTextColor="#524B6B"
          style={profileStyles.input}
          value={formData.bio}
        />

        <View style={profileStyles.subjectsContainer}>
          <Text style={profileStyles.title}>
            Selecione suas áreas de interesse
          </Text>
          <Text style={profileStyles.subtitle}>
            Determine quais tipos de projetos de extensão serão recomendados para você
          </Text>

          {subjects.map((subject) => (
            <View key={subject.id} style={profileStyles.checkboxContainer}>
              <Text style={profileStyles.checkboxLabel}>
                {subject.subject}
              </Text>
              <Checkbox
                value={formData.interests.includes(subject.id)}
                onValueChange={() => handleCheckboxChange(subject.id)}
                color={formData.interests.includes(subject.id) ? '#03A9F4' : undefined}
              />
            </View>
          ))}
        </View>

        <Button buttonText={"SALVAR"} onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default Profile;
