import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Badge } from "react-native-paper";
import ReduxWrapper from "../Utils/ReduxWrapper";
import searchIcon from "../assets/Icons/searchIcon.png";
import scanner from "../assets/Icons/scanner.png";
import notiInactive from "../assets/Icons/notiInactive.png";
import Balance from "./Balance";

function HeaderRight({ app }) {
  const { enableBackWithBal = true, myBalance = false } = app;
  console.log(myBalance, enableBackWithBal);
  if (!enableBackWithBal) {
    return (
      <View style={styles.headerRight}>
        <Image source={searchIcon} style={styles.headerRightIcon} />
        <Image source={scanner} style={styles.headerRightIcon} />
        {/* <Image source={notiInactive} style={styles.headerRightIcon} /> */}
        <Badge
          badgeStyle={styles.badge}
          textStyle={styles.badgeText}
          status="success"
          size={10}
          containerStyle={[styles.badgeContainer]}
        >
          <Image source={notiInactive} style={styles.headerRightIcon} />
        </Badge>
      </View>
    );
  } else {
    return (
      <View style={styles.headerRight}>
        <Balance myBalance={myBalance} />
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

export default ReduxWrapper(HeaderRight);
