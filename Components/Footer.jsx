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
        <View style={[styles.brand, !iconMode && styles.brandWide]}>
          <Text style={styles.brandName}>Francesco Sposato</Text>
          <Text style={styles.brandRole}>
            {(!iconMode ? "- " : "") + "studente e aspirante sviluppatore"}
          </Text>
        </View>
        <View style={[styles.links, iconMode && styles.linksCentered]}>
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
    flexShrink: 1,
    gap: 2,
  },
  brandWide: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  brandName: {
    fontFamily: Fonts.monoMedium,
    fontSize: 15,
    color: Colors.ink.text,
  },
  brandRole: {
    fontFamily: Fonts.body,
    fontSize: 13,
    color: Colors.ink.textSecondary,
  },
  links: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  linksCentered: {
    marginLeft: 0,
    width: "100%",
    justifyContent: "center",
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
