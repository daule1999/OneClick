import { StyleSheet } from "react-native";
import { Colors, Fonts } from '../../styles';

const styles = StyleSheet.create({
    container: {
        width: 196,
        height: 48,
        padding: 10,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    flushButton: {
        borderRadius: 0,
        width: 320,
    },
    bgprimary: {
        backgroundColor: Colors.primary[100],
    },
    bgsecondary: {
        backgroundColor: Colors.grey[10],
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.grey[30],
    },
    bgprimarydisabled: {
        backgroundColor: Colors.grey[50],
    },
    bgsecondarydisabled: {
        backgroundColor: Colors.grey[30],
    },
    text: {
        textAlign: "center",
        ...Fonts.fonts,
        ...Fonts.body1,
    },
    textprimary: {
        color: Colors.white,
    },
    textsecondary: {
        color: Colors.primary[100],
    },
    textButton: {
        color: Colors.pinkbg,
        ...Fonts.textbutton,
    }
});

export default styles;
