import * as React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import searchIcon from "../assets/Icons/searchIcon.png";
import scanner from "../assets/Icons/scanner.png";
import notiInactive from "../assets/Icons/notiInactive.png";
import BottomTabNavigator from "./BottomTabNavigator";
import { routes, screens } from "./RouteItems";
import { Avatar, Badge, Text, useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
import ReduxWrapper from "../Utils/ReduxWrapper";
import Balance from "../Components/Balance";
import HeaderRight from "../Components/HeaderRight";
import HeaderLeft from "../Components/HeaderLeft";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;
  const theme = useTheme();
  return (
    <DrawerContentScrollView {...props}>
      {routes
        .filter((route) => route.showInDrawer)
        .map((route) => {
          const focusedRoute = routes.find((r) => r.name === currentRouteName);
          const focused = focusedRoute
            ? route.name === focusedRoute?.focusedRoute
            : route.name === screens.HomeStack;
          const { Compo, isCompo = false, title = "" } = route;
          return (
            <DrawerItem
              key={route.name}
              label={() => <Compo />}
              onPress={() => isCompo && props.navigation.navigate(route.name)}
              style={[
                styles.drawerItem,
                focused ? { backgroundColor: theme.colors.background } : null,
              ]}
            />
          );
        })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({ nav, app }) => {
  const theme = useTheme();
  const { bannerScrolled = false, myBalance } = app;
  console.log(bannerScrolled);
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: theme.colors.background,
          height: 50,
        },
        headerLeft: () => <HeaderLeft />,
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen
        name={screens.HomeTab}
        component={BottomTabNavigator}
        options={{
          title: "Home",
          headerTitle: () => {
            return (
              <>
                {bannerScrolled ? (
                  <Balance myBalance={myBalance} />
                ) : (
                  <Text>HOME</Text>
                )}
              </>
            );
          },
          headerRight: () => <HeaderRight />,
        }}
      />
    </Drawer.Navigator>
  );
};

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

export default ReduxWrapper(DrawerNavigator);
