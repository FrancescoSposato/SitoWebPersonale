import { Platform, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Layout } from "../constants/layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedLink from "./AnimatedLink";

export default function Footer() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingBottom: insets.bottom }]}>
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
            {Platform.OS === "android" ? (
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
            {Platform.OS === "android" ? (
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
            {Platform.OS === "android" ? (
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
