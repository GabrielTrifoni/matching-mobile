import { StyleSheet } from "react-native";

const modalStyle = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(245, 245, 245, 0.9)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: "#E0E0E0",
    },
    confirmButton: {
        backgroundColor: "#FF5252",
    },
    cancelText: {
        color: "#333",
        fontSize: 16,
    },
    confirmText: {
        color: "#FFF",
        fontSize: 16,
    },
});

export default modalStyle;