import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { rename } from "../Redux/slices/personSlice";

export const Person = () => {
  const theme = useTheme();
  // REDUX
  const count = "daule";
  const dispatch = useDispatch();

  return (
    <>
      <View>
        <View style={{ flexDirection: "row", margin: 5 }}>
          <Text style={{ color: theme.colors.primary, fontSize: 20 }}>
            Person Component: {count}
          </Text>
        </View>
        <View style={{ margin: 5 }}>
          <TextInput
            mode="outlined"
            label="Your name"
            placeholder="Full name"
            value={count}
            onChangeText={(text) => dispatch(rename(text))}
          />
        </View>
      </View>
    </>
  );
};
