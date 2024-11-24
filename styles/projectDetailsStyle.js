import { StyleSheet } from "react-native";

export const projectDetailsStyle = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F9F9F9",
  },

  header: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 15,
    paddingHorizontal: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  urlButton: {
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#d7eaf7",
    gap: 10,
  },

  urlButtonText: {
    color: "#6F97FF",
  },

  hashtagContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#d7eaf7",
    marginTop: 10,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 5,
  },

  hashtag: {
    backgroundColor: "#BBCEFF",
    color: "#0075FF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    minWidth: 60,
    textAlign: "center",
  },

  tagsList: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },

  descriptionContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 30,
  },

  descriptionTitle: { fontWeight: "bold", fontSize: 16, marginBottom: 6 },

  description: {
    marginBottom: 10,
  },

  attachment: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
  }
});
