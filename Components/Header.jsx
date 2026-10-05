import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Modal,
  Platform,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, usePathname } from "expo-router";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Layout } from "../constants/layout";
import AnimatedLink from "./AnimatedLink";

const PANEL_WIDTH = 300;
const ARROW_SIZE = 14;

function ContactButton() {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const lift = useRef(new Animated.Value(0)).current;
  const [hovered, setHovered] = useState(false);

  const ctaRef = useRef(null);
  const [anchor, setAnchor] = useState(null);
  const { width: screenWidth } = useWindowDimensions();

  const [open, setOpen] = useState(false);
  const panelOpacity = useRef(new Animated.Value(0)).current;
  const panelScale = useRef(new Animated.Value(0.96)).current;

  useEffect(() => {
    if (!open) return;
    Animated.parallel([
      Animated.timing(panelOpacity, {
        toValue: 1,
        duration: 160,
        useNativeDriver: true,
      }),
      Animated.spring(panelScale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 40,
        bounciness: 6,
      }),
    ]).start();
  }, [open]);

  const closePanel = () => {
    Animated.timing(panelOpacity, {
      toValue: 0,
      duration: 120,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setOpen(false);
        panelScale.setValue(0.96);
      }
    });
  };

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

  const rawLeft = anchor ? anchor.x + anchor.width / 2 - PANEL_WIDTH / 2 : 0;
  const panelLeft = Math.max(
    12,
    Math.min(rawLeft, screenWidth - PANEL_WIDTH - 12)
  );
  const arrowLeft = anchor
    ? Math.max(
        12,
        Math.min(
          anchor.x + anchor.width / 2 - panelLeft - ARROW_SIZE / 2,
          PANEL_WIDTH - ARROW_SIZE - 12
        )
      )
    : PANEL_WIDTH / 2 - ARROW_SIZE / 2;

  return (
    <>
      <Pressable
        ref={ctaRef}
        onPress={() => {
          if (open) {
            closePanel();
            return;
          }
          ctaRef.current.measure((fx, fy, w, h, pageX, pageY) => {
            setAnchor({ x: pageX, y: pageY, width: w, height: h });
            setOpen(true);
          });
        }}
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
          {Platform.OS === "android" ? (
            <Ionicons name="mail-outline" size={20} color={Colors.ink.onGradient} />
          ) : (
            <Text style={styles.ctaText}>Contattami</Text>
          )}
        </Animated.View>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="none"
        onRequestClose={closePanel}
      >
        <Pressable style={styles.backdrop} onPress={closePanel}></Pressable>
        <Animated.View
          style={[
            styles.panel,
            anchor && { top: anchor.y + anchor.height + 10, left: panelLeft },
            {
              opacity: panelOpacity,
              transform: [{ scale: panelScale }],
            },
          ]}
        >
          <View style={[styles.arrow, { left: arrowLeft }]}></View>
          <View style={styles.panelRow}>
            <Text style={styles.panelLabel}>Email</Text>
            <AnimatedLink
              href="mailto:sposato.fs@outlook.it"
              style={styles.panelValue}
              hoveredStyle={styles.panelValueHovered}
            >
              sposato.fs@outlook.it
            </AnimatedLink>
          </View>
          <View style={styles.panelRow}>
            <Text style={styles.panelLabel}>Github</Text>
            <AnimatedLink
              href="https://github.com/FrancescoSposato"
              style={styles.panelValue}
              hoveredStyle={styles.panelValueHovered}
            >
              github.com/FrancescoSposato
            </AnimatedLink>
          </View>
          <View style={styles.panelRow}>
            <Text style={styles.panelLabel}>Linkedin</Text>
            <AnimatedLink
              href="https://linkedin.com/in/francesco-sposato-318992431"
              style={styles.panelValue}
              hoveredStyle={styles.panelValueHovered}
            >
              linkedin.com/in/francesco-sposato-318992431
            </AnimatedLink>
          </View>
        </Animated.View>
      </Modal>
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingTop: insets.top }]}>
      <View style={styles.inner}>
        <Text style={styles.brand}>Francesco Sposato</Text>
        <View style={styles.links}>
          <AnimatedLink
            href="/"
            style={[styles.link, pathname === "/" && styles.linkActive]}
            hoveredStyle={styles.linkHovered}
            accessibilityLabel="Home"
          >
            {Platform.OS === "android" ? (
              <Ionicons
                name="home-outline"
                size={22}
                color={pathname === "/" ? Colors.ink.text : Colors.ink.textSecondary}
              />
            ) : (
              "Home"
            )}
          </AnimatedLink>
          <AnimatedLink
            href="/curriculum"
            style={[
              styles.link,
              pathname === "/curriculum" && styles.linkActive,
            ]}
            hoveredStyle={styles.linkHovered}
            accessibilityLabel="Curriculum"
          >
            {Platform.OS === "android" ? (
              <Ionicons
                name="document-text-outline"
                size={22}
                color={pathname === "/curriculum" ? Colors.ink.text : Colors.ink.textSecondary}
              />
            ) : (
              "Curriculum"
            )}
          </AnimatedLink>
          <AnimatedLink
            href="/projects"
            style={[
              styles.link,
              pathname === "/projects" && styles.linkActive,
            ]}
            hoveredStyle={styles.linkHovered}
            accessibilityLabel="Progetti"
          >
            {Platform.OS === "android" ? (
              <Ionicons
                name="folder-open-outline"
                size={22}
                color={pathname === "/projects" ? Colors.ink.text : Colors.ink.textSecondary}
              />
            ) : (
              "Progetti"
            )}
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
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(10, 18, 32, 0.35)", // Colors.ink.bg al 35% di opacità
  },
  panel: {
    position: "absolute",
    width: PANEL_WIDTH,
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.border,
    paddingVertical: 8,
    shadowColor: Colors.light.text,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 10,
  },
  arrow: {
    position: "absolute",
    top: -7,
    width: ARROW_SIZE,
    height: ARROW_SIZE,
    backgroundColor: Colors.light.surface,
    transform: [{ rotate: "45deg" }],
  },
  panelRow: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 3,
  },
  panelLabel: {
    fontFamily: Fonts.mono,
    fontSize: 11,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: Colors.light.textSecondary,
  },
  panelValue: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 15,
    color: Colors.light.text,
  },
  panelValueHovered: {
    color: Colors.light.primary,
    textDecorationLine: "underline",
  },
});
