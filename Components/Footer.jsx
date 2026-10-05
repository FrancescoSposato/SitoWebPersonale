import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Layout } from "../constants/layout";
import AnimatedLink from "./AnimatedLink";

export default function Footer() {
  const { width } = useWindowDimensions();
  const iconMode = width < 700;

  return (
    <View style={styles.bar}>
      <View style={styles.inner}>
        <Text style={styles.brand}>
          Francesco Sposato - studente e aspirante sviluppatore
        </Text>
        <View style={styles.links}>
          <AnimatedLink
            href="mailto:sposato.fs@outlook.it"
            style={styles.textLink}
            hoveredStyle={styles.textLinkHovered}
            accessibilityLabel="Email"
          >
            {iconMode ? (
              <Ionicons name="mail-outline" size={24} color={Colors.ink.textSecondary} />
            ) : (
              "Email"
            )}
          </AnimatedLink>
          <AnimatedLink
            href="https://github.com/FrancescoSposato"
            style={styles.textLink}
            hoveredStyle={styles.textLinkHovered}
            accessibilityLabel="GitHub"
          >
            {iconMode ? (
              <Ionicons name="logo-github" size={24} color={Colors.ink.textSecondary} />
            ) : (
              "Github"
            )}
          </AnimatedLink>
          <AnimatedLink
            href="https://linkedin.com/in/francesco-sposato-318992431"
            style={styles.textLink}
            hoveredStyle={styles.textLinkHovered}
            accessibilityLabel="LinkedIn"
          >
            {iconMode ? (
              <Ionicons name="logo-linkedin" size={24} color={Colors.ink.textSecondary} />
            ) : (
              "Linkedin"
            )}
          </AnimatedLink>
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
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
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
    flexShrink: 1,
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
  textLinkHovered: {
    color: Colors.ink.text,
    textDecorationLine: "underline",
  },
});
