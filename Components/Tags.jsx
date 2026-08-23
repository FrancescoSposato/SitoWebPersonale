import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

export default function Tags({ tags, styleRow, styleTag }) {
  return (
    <View style={[styles.tagRow, styleRow]}>
      {tags.map((tag) => (
        <Text key={tag} style={[styles.tag, styleTag]}>
          {tag}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    color: Colors.light.textSecondary,
    borderWidth: 1,
    borderColor: Colors.light.border,
    paddingVertical: 4,
    paddingHorizontal: 9,
  },
});
