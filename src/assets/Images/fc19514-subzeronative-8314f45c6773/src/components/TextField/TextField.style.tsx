import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../styles";

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: 288,
        height: 110,
    },
    inputRoot: {
        width: 288,
        height: 56,
        backgroundColor: Colors.aquadeep[10],
        borderBottomColor: Colors.aquadeep[60],
        borderBottomWidth: 2,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingTop: 24,
        paddingBottom: 8,
        paddingRight: 16,
        ...Fonts.body2,
        color: Colors.charcoal,
        textDecorationLine: "none",
    },
    inputFocused: {
        borderBottomColor: Colors.aquadeep[100],
    },
    inputDisabled: {
        backgroundColor: Colors.grey[10],
        borderBottomColor: Colors.grey[50],
    },
    inputLabel: {
        zIndex: 1,
        ...Fonts.body2,
        color: Colors.grey[80],
        width: 256,
        height: 24,
    },
    inputLabelFocused: {
        ...Fonts.body3,
        color: Colors.aquadeep[100],
    },
    inputPrefix: {
        zIndex: 1,
        ...Fonts.body2,
        color: Colors.grey[80],
        transform: [{ translateX: 16 }, { translateY: 50 }],
        width: 20,
        height: 24,
    },
    inputError: {
        borderBottomColor: Colors.red
    },
    inputErrorLabel: {
        color: Colors.red
    },
    childrenContainer: {
        marginTop: 16,
    },
    endInputIcon: {
        zIndex: 1,
        transform: [{ translateX: 250 }, { translateY: -32 }],
    }
});

export default styles;