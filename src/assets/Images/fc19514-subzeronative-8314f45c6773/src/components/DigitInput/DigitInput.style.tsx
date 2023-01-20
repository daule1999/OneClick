import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../styles";

const styles = StyleSheet.create({
    root: {
        display: 'flex',
    },
    conatiner: {
        display: 'flex',
        flexDirection: "row",
    },
    inputRoot: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.aquadeep[60],
        backgroundColor: Colors.aquadeep[10],
        color: Colors.charcoal,
        ...Fonts.h5,
        marginRight: 8,
        marginBottom: 8,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    inputSizeSm: {
        width: 40,
        height: 40,
    },
    inputSizeMd: {
        width: 48,
        height: 48,
    },
    inputSizeLg: {
        width: 56,
        height: 56,
    },
    focusState: {
        borderBottomColor: Colors.aquadeep[100],
    },
    disabledState: {
        backgroundColor: Colors.grey[10],
        borderBottomColor: Colors.grey[50],
        color: Colors.grey[50],
    },
    errorState: {
        borderBottomColor: Colors.red,
    },
    childrenContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: 16,
        alignSelf: "flex-end",
        marginBottom: 16,
    }
});

export default styles;
