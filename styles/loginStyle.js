import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    color: "#F9F9F9",
    // fontFamily: 'DMSans-Regular',
    paddingHorizontal: 26,
    paddingVertical: 29,
    backgroundColor: "#F9F9F9",
  },
  unesp_image: {
    width: "auto",
    height: 90,
    marginBottom: 50,
    resizeMode: "contain",
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
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0D0140",
    // fontFamily: "DMSans-Bold",
    marginBottom: 64,
    alignSelf: "center",
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0D0140",
    // fontFamily: "DMSans-Bold",
    marginBottom: 10,
  },
  containerPassword: {
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center",
    color: '#333',
    backgroundColor:'white',
    borderRadius: 10,
    marginBottom: 15,
  },
  inputPassword: {
    height: 70,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 15,
    display: "flex",
    justifyContent: "center",
    flex:1,
    color: '#333',
  },
  buttonShowPassWord:{
    marginRight: 10,
  },
  registerText: {
    textAlign: "center",
    fontSize: 12,
  },
  registerLink: {
    color: "#03A9F4",
    fontSize: 12,
  },
  pressedLink: {
    textDecorationLine: "underline",
  },
});

export default loginStyles;
