import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

export default function StackLine() {
  const stack = [
    "React Native",
    "Expo",
    "Expo Router",
    "C#",
    "ASP.net Core",
    "Entity Framework",
    "Javascript",
    "C++",
    "Pyhton",
  ];
  return (
    <View style={styles.background}>
      {stack.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.dot}></View>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.light.surface,
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  background: {
    backgroundColor: Colors.light.surface,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 999,
    backgroundColor: Colors.ink.accent,
  },
  text: {
    color: Colors.ink.textSecondary,
    fontFamily: Fonts.mono,
    fontSize: 14,
  },
});
