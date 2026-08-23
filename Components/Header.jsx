import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link, usePathname } from "expo-router";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Layout } from "../constants/layout";
export default function Header() {
  const pathname = usePathname();

  return (
    <View style={styles.bar}>
      <View style={styles.inner}>
        <Text style={styles.brand}>Francesco Sposato</Text>
        <View style={styles.links}>
          <Link href="/">
            <Text style={[styles.link, pathname === "/" && styles.linkActive]}>
              Home
            </Text>
          </Link>
          <Link href="/curriculum">
            <Text
              style={[
                styles.link,
                pathname === "/curriculum" && styles.linkActive,
              ]}
            >
              Curriculum
            </Text>
          </Link>
          <Link href="/projects">
            <Text
              style={[
                styles.link,
                pathname === "/projects" && styles.linkActive,
              ]}
            >
              Progetti
            </Text>
          </Link>
        </View>
        <Link href="/contacts" asChild>
          <Pressable style={styles.cta}>
            <Text style={styles.ctaText}>Contattami</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.ink.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.ink.border,
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
  links: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
  },
  link: {
    fontFamily: Fonts.body,
    fontSize: 15,
    color: Colors.ink.textSecondary,
  },
  linkActive: {
    fontFamily: Fonts.bodySemiBold,
    color: Colors.ink.text,
    borderBottomWidth: 2,
    borderBottomColor: Colors.ink.accent,
    paddingBottom: 4,
  },
  brand: {
    fontFamily: Fonts.monoMedium,
    fontSize: 15,
    color: Colors.ink.text,
  },
  cta: {
    backgroundColor: Colors.ink.accent,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  ctaText: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 15,
    color: Colors.ink.onGradient,
  },
});
