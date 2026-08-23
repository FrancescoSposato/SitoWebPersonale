import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

export default function Kicker({ label, style }) {
  return (
    <View style={styles.kicker}>
      <View style={styles.kickerDotExternal}>
        <View style={styles.kickerDot}></View>
      </View>
      <Text style={[styles.kickerText, style]}> {label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  kicker: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  kickerDot: {
    height: 10,
    width: 10,
    borderRadius: 999,
    backgroundColor: Colors.ink.accent,
  },
  kickerText: {
    fontFamily: Fonts.mono,
    fontSize: 13,
    color: Colors.ink.accent,
    letterSpacing: 0.8,
  },
  kickerDotExternal: {
    height: 16,
    width: 16,
    borderRadius: 999,
    backgroundColor: "rgba(52, 216, 160, 0.18)",
    alignItems: "center",
    justifyContent: "center",
  },
});
