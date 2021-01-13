import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
const currencyPerRuppe = {
  DOLLAR: 0.012,
  EURO: 0.011,
  POUND: 0.012,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  YEN: 1.5,
  BITCOIN: 0.000005,
  CANDY: 1,
  LEAF: 20,
};

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const buttonPress = (currency) => {
    if (!inputValue) {
      Alert.alert("Please enter a correct value", "Enter a numeric value", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    let result = parseFloat(inputValue) * currencyPerRuppe[currency];
    setResultValue(result.toFixed(2));
  };
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultValue}>{resultValue}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputValue}
          keyboardType="numeric"
          placeholderTextColor="#c1c1c1"
          placeholder="Value"
          value={inputValue}
          onChangeText={(inputValue) => setInputValue(inputValue)}
        ></TextInput>
      </View>
      <View style={styles.convertButtonContainer}>
        {Object.keys(currencyPerRuppe).map((currency) => (
          <TouchableOpacity
            key={currency}
            style={styles.currencyButton}
            onPress={() => buttonPress(currency)}
          >
            <Text style={styles.currencyText}>{currency}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  resultContainer: {
    margin: 30,
    marginTop: 150,
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center",
    fontSize: 30,
    borderRadius: 10,
  },
  resultValue: {
    fontSize: 25,
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  inputContainer: {
    margin: 30,
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center",
    fontSize: 30,
    borderRadius: 10,
  },
  inputValue: {
    fontSize: 25,
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  convertButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    padding: 20,
  },
  currencyButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "30%",
    borderWidth: 2,
    borderColor: 2,
    borderColor: "#bbe1fa",
    borderRadius: 30,
    margin: 6,
  },
  currencyText: {
    color: "#fff",
  },
});
