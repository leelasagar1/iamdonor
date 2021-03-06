import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Colors from "../contants/Colors";

const TextInputField = ({ text, keyboardType }) => {
  return (
    <View>
      <TextInput
        style={styles.mobileNumber}
        placeholder={text}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextInputField;
const styles = StyleSheet.create({
  mobileNumber: {
    width: 290,
    height: 47,
    backgroundColor: Colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderRadius: 24,
    fontSize: 16,
    marginTop: 10,
    marginEnd: 6,
    marginStart: 9,
  },
});
