import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { profileStyles } from "../styles/profileStyle";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Checkbox from "expo-checkbox";

import Button from "../components/button";

const Profile = () => {
  const [checkedInterests, setCheckedInterests] = useState({
    mobile: false,
    web: false,
    machineLearning: false,
    programmingLanguages: false,
    databases: false,
  });

  const handleCheckboxChange = (interest) => {
    setCheckedInterests((prevState) => ({
      ...prevState,
      [interest]: !prevState[interest],
    }));
  };

  return (
    <View style={profileStyles.container}>
      <TextInput
        placeholder="Insira seu curso..."
        placeholderTextColor="#00000099"
        style={profileStyles.courseInput}
      />
      <View style={profileStyles.bioContainer}>
        <Text style={profileStyles.inputLabel}>Bio</Text>
        <AntDesignIcon name="edit" style={profileStyles.editIcon} />
      </View>
      <TextInput
        placeholder="Diga um pouco sobre você"
        placeholderTextColor="#524B6B"
        style={profileStyles.input}
      />

      <View style={profileStyles.subjectsContainer}>
        <Text style={profileStyles.title}>
          Selecione suas áreas de interesse
        </Text>
        <Text style={profileStyles.subtitle}>
          Determine quais tipos de projetos de extensão serão recomendados para você
        </Text>

        <View style={profileStyles.checkboxContainer}>
          <Text style={profileStyles.checkboxLabel}>
            Desenvolvimento Mobile
          </Text>
          <Checkbox
            value={checkedInterests.mobile}
            onValueChange={() => handleCheckboxChange("mobile")}
            color={checkedInterests.mobile ? '#03A9F4' : undefined}
          />
        </View>

        <View style={profileStyles.checkboxContainer}>
          <Text style={profileStyles.checkboxLabel}>
            Desenvolvimento Web
          </Text>
          <Checkbox
            value={checkedInterests.web}
            onValueChange={() => handleCheckboxChange("web")}
            color={checkedInterests.web ? '#03A9F4' : undefined}
          />
        </View>

        <View style={profileStyles.checkboxContainer}>
          <Text style={profileStyles.checkboxLabel}>
            Aprendizado de Máquina
          </Text>
          <Checkbox
            value={checkedInterests.machineLearning}
            onValueChange={() => handleCheckboxChange("machineLearning")}
            color={checkedInterests.machineLearning ? '#03A9F4' : undefined}
          />
        </View>

        <View style={profileStyles.checkboxContainer}>
          <Text style={profileStyles.checkboxLabel}>
            Linguagens de Programação
          </Text>
          <Checkbox
            value={checkedInterests.programmingLanguages}
            onValueChange={() => handleCheckboxChange("programmingLanguages")}
            color={checkedInterests.programmingLanguages ? '#03A9F4' : undefined}
          />
        </View>

        <View style={profileStyles.checkboxContainer}>
          <Text style={profileStyles.checkboxLabel}>
            Banco de Dados
          </Text>
          <Checkbox
            value={checkedInterests.databases}
            onValueChange={() => handleCheckboxChange("databases")}
            color={checkedInterests.databases ? '#03A9F4' : undefined}
          />
        </View>
      </View>

      <Button buttonText={"SALVAR"} />
    </View>
  );
};

export default Profile;
