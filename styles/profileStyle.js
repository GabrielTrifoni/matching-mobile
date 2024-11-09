import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingHorizontal: 26,
    paddingVertical: 29,
    backgroundColor: "#F9F9F9",
  },

  courseInput: {
    // fontFamily: "DM Sans",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 23.44,
    textAlign: "left",
  },

  bioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputLabel: {
    // fontFamily: "DM Sans",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18.23,
    textAlign: "left",
    marginBottom: 10,
    marginTop: 40,
  },

  input: {
    height: 70,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 15,
    display: "flex",
    justifyContent: "center",
  },

  editIcon: {
    // width: 24,
    // height: 24,
    color: "#03A9F4",
    alignSelf: "center",
    margin: 0,
    padding: 0,
    fontSize: 14,
    marginTop: "auto",
    marginBottom: 10,
  },

  subjectsContainer: {
    marginTop: 40,
  },

  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20.83,
  },

  subtitle: {
    marginTop: 16,
    marginBottom: 32,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 15.62,
    textAlign: "center",
    color: "#524B6B"
  },

  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },

  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "700",
  },
})