import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { Link, usePathname } from "expo-router";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Layout } from "../constants/layout";
import AnimatedLink from "./AnimatedLink";

function ContactButton() {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const lift = useRef(new Animated.Value(0)).current;
  const [hovered, setHovered] = useState(false);

  const pressIn = () => {
    Animated.spring(scale, {
      toValue: 0.94,
      useNativeDriver: true,
      speed: 40,
      bounciness: 6,
    }).start();
    Animated.timing(opacity, {
      toValue: 0.85,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 40,
      bounciness: 6,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const hoverIn = () => {
    setHovered(true);
    Animated.spring(lift, {
      toValue: -2,
      useNativeDriver: true,
      speed: 30,
      bounciness: 8,
    }).start();
  };

  const hoverOut = () => {
    setHovered(false);
    Animated.spring(lift, {
      toValue: 0,
      useNativeDriver: true,
      speed: 30,
      bounciness: 8,
    }).start();
  };

  return (
    <Link href="/contacts" asChild>
      <Pressable
        onPressIn={pressIn}
        onPressOut={pressOut}
        onHoverIn={hoverIn}
        onHoverOut={hoverOut}
      >
        <Animated.View
          style={[
            styles.cta,
            hovered && styles.ctaHovered,
            { opacity, transform: [{ scale }, { translateY: lift }] },
          ]}
        >
          <Text style={styles.ctaText}>Contattami</Text>
        </Animated.View>
      </Pressable>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <View style={styles.bar}>
      <View style={styles.inner}>
        <Text style={styles.brand}>Francesco Sposato</Text>
        <View style={styles.links}>
          <AnimatedLink
            href="/"
            style={[styles.link, pathname === "/" && styles.linkActive]}
            hoveredStyle={styles.linkHovered}
          >
            Home
          </AnimatedLink>
          <AnimatedLink
            href="/curriculum"
            style={[
              styles.link,
              pathname === "/curriculum" && styles.linkActive,
            ]}
            hoveredStyle={styles.linkHovered}
          >
            Curriculum
          </AnimatedLink>
          <AnimatedLink
            href="/projects"
            style={[
              styles.link,
              pathname === "/projects" && styles.linkActive,
            ]}
            hoveredStyle={styles.linkHovered}
          >
            Progetti
          </AnimatedLink>
        </View>
        <ContactButton></ContactButton>
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
  linkHovered: {
    color: Colors.ink.text,
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
  ctaHovered: {
    shadowColor: Colors.ink.bg,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  ctaText: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 15,
    color: Colors.ink.onGradient,
  },
});
