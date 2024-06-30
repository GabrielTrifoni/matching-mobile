import { Text, View } from "react-native";
import { tagStyles } from "./styles";

export const Tag = ({ tag }) => (
  <View style={tagStyles.tagWrapper}>
    <Text style={tagStyles.tag}>{tag}</Text>
  </View>
);
