import { View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function CvCard({ style, children }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.border,
    padding: 24,
    gap: 8,
  },
});
