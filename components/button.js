import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import buttonStyles from '../styles/buttonStyle.js';

const Button = (props) => {
    return(
        <View>
            <TouchableOpacity
                style={buttonStyles.botao}
                onPress={props.onPress}

            >

                <Text style={buttonStyles.texto_botao}>{(props.auth) ? 
                <ActivityIndicator size={24} color="#FFF" /> : 
                props.buttonText}</Text>

            </TouchableOpacity>
        </View>
    );

}

export default Button;
