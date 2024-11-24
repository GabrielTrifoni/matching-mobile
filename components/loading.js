import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#03A9F4" />
      <Text style={{ marginTop: 10, color: "#03A9F4" }}>Carregando...</Text>
    </View>
  );
};

export default Loading;
