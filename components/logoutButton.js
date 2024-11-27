import React, { useState } from "react";
import { TouchableOpacity, Alert, Modal, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import headerStyles from "../styles/headerStyle";
import modalStyle from "../styles/modalStyle"

const LogoutButton = () => {
    const [modal, setModal] = useState(false);
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("userToken");
            setModal(false);
            navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
            });
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
            Alert.alert("Erro", "Não foi possível fazer o logout.");
        }
    };

    return (
        <>
            <TouchableOpacity onPress={() => setModal(true)}>
                <FontAwesomeIcon
                    name="sign-out"
                    style={headerStyles.usrIcon}
                />
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType="slide"
                visible={modal}
                onRequestClose={() => setModal(false)}
            >
                <View style={modalStyle.modalOverlay}>
                    <View style={modalStyle.modalContent}>
                        <Text style={modalStyle.modalTitle}>Confirmação</Text>
                        <Text style={modalStyle.modalMessage}>Tem certeza de que deseja sair?</Text>
                        <View style={modalStyle.modalActions}>
                            <TouchableOpacity
                                style={[modalStyle.button, modalStyle.cancelButton]}
                                onPress={() => setModal(false)}
                            >
                                <Text style={modalStyle.cancelText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[modalStyle.button, modalStyle.confirmButton]}
                                onPress={handleLogout}
                            >
                                <Text style={modalStyle.confirmText}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default LogoutButton;
