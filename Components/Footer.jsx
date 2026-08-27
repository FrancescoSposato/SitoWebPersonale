import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Link } from "expo-router";
import { Layout } from "../constants/layout";

export default function Footer() {
  return (
    <View style={styles.bar}>
      <View style={styles.inner}>
        <Text style={styles.brand}>
          Francesco Sposato - studente e aspirante sviluppatore
        </Text>
        <View style={styles.links}>
          <Link href="mailto:sposato.fs@outlook.it" style={styles.textLink}>
            Email
          </Link>
          <Link
            href="https://github.com/FrancescoSposato"
            style={styles.textLink}
          >
            Github
          </Link>
          <Link
            href="https://linkedin.com/in/francesco-sposato-318992431"
            style={styles.textLink}
          >
            Linkedin
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.ink.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.ink.border,
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    width: "100%",
    paddingVertical: 16,
  },
  brand: {
    fontFamily: Fonts.monoMedium,
    fontSize: 15,
    color: Colors.ink.text,
  },
  links: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  textLink: {
    fontFamily: Fonts.body,
    color: Colors.ink.textSecondary,
  },
});
