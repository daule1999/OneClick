import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import ReduxWrapper from "../Utils/ReduxWrapper";
import backButton from "../assets/Images/backButto.png";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../Navigation/RouteItems";
import { changeTheme } from "../Redux/actions/app";
function HeaderLeft({ app, setThirdPartySite$ }) {
  const { enableBackWithBal = true } = app;
  const navi = useNavigation();
  // console.log(navi, "navi");

  if (!enableBackWithBal) {
    return (
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.headerLeft}
      >
        <Avatar.Text size={24} label="XD" />
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={{ marginLeft: 9 }}>
        <TouchableOpacity
          onPress={() => {
            setThirdPartySite$("");
            navi.navigate(screens.Home);
          }}
          style={styles.headerLeft}
        >
          <Image source={backButton} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
    flexDirection: "row",
  },
  headerRightIcon: { marginLeft: 20 },
  drawerLabel: {
    fontSize: 14,
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  badge: {
    borderRadius: 50,
    height: 8,
    minWidth: 0,
    width: 8,
  },
  badgeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0,
  },
});

export default ReduxWrapper(HeaderLeft);
