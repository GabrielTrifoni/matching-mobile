import { Text, TouchableOpacity, View } from "react-native";
import cardStyles from "./style";
import { Tag } from "../Tag";

export const Card = ({ id, title, location, tags, coordinator, onPress }) => {
  return (
    <TouchableOpacity
      key={id}
      onPress={() => {
        onPress({ projectId: title });
      }}
    >
      <View style={cardStyles.container}>
        <Text style={cardStyles.title}>{title}</Text>
        <Text style={cardStyles.subtitle}>{location}</Text>

        <View style={cardStyles.tagsList}>
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </View>

        <Text style={cardStyles.bottom}>{coordinator}</Text>
      </View>
    </TouchableOpacity>
  );
};
