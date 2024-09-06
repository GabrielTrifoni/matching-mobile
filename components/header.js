import React from "react";
import { View, Image } from "react-native";

import headerStyles from "../styles/headerStyle.js";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={headerStyles.barra_superior}>
      <Image
        source={require("../images/logo_unesp.png")}
        style={headerStyles.unesp_logo}
      />
      <FontAwesomeIcon name="user-circle-o" style={headerStyles.usrIcon} />
    </View>
  );
};

export default Header;
