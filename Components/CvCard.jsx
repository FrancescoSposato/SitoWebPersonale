import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Colors } from "../constants/colors";

export default function CvCard({ style, children }) {
  const { width } = useWindowDimensions();
  const narrow = width < 700;
  return (
    <View style={[styles.card, style, narrow && styles.narrow]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.border,
    padding: 24,
    gap: 8,
  },
  narrow: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  },
});
