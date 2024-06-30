import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 130,
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "regular",
    marginTop: 5,
  },

  tagsList: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },

  bottom: {
    marginTop: 20,
    fontSize: 14,
  },
});

export default cardStyles;
