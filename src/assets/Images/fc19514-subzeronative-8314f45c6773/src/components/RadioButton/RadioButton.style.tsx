import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../styles";

const styles = StyleSheet.create({
	container: {
        marginBottom: 8,
        alignItems: 'center',
        flexDirection: 'row',
	},
    radioText: {
        marginLeft: 8,
        color: Colors.charcoal,
		...Fonts.fonts,
        ...Fonts.body2,
    },
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: Colors.pinkbg,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: Colors.pinkbg,
    },
    heading:{
		...Fonts.fonts,
        marginBottom: 12,
        color: Colors.charcoal,
    }
});

export default styles;