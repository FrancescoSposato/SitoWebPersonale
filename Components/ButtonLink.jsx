import { useRef, useState } from "react";
import { Text, StyleSheet, Pressable, Animated, Linking } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

export default function ButtonLink({
  href,
  label,
  style,
  textStyle,
  external,
}) {
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

  // il bottone vero (colore, bordo, padding) vive qui, sull'Animated.View: è lui
  // che riceve scale/opacity/sollevamento. Il Pressable sopra resta "nudo",
  // serve solo a catturare tocco/mouse.
  const content = (
    <Animated.View
      style={[
        styles.button,
        style,
        hovered && styles.buttonHovered,
        { opacity, transform: [{ scale }, { translateY: lift }] },
      ]}
    >
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    </Animated.View>
  );

  if (external) {
    return (
      <Pressable
        style={styles.wrap}
        onPress={() => Linking.openURL(href)}
        onPressIn={pressIn}
        onPressOut={pressOut}
        onHoverIn={hoverIn}
        onHoverOut={hoverOut}
      >
        {content}
      </Pressable>
    );
  }

  return (
    // <Link asChild> clona il suo unico figlio (qui il Pressable) per agganciarci
    // la navigazione: per questo lo stile "wrap" è un oggetto fisso, non un array
    // costruito da fuori — Link non sa gestire array di stili sul figlio.
    <Link href={href} asChild>
      <Pressable
        style={styles.wrap}
        onPressIn={pressIn}
        onPressOut={pressOut}
        onHoverIn={hoverIn}
        onHoverOut={hoverOut}
      >
        {content}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignSelf: "flex-start",
  },
  button: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: Colors.ink.accent,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonHovered: {
    shadowColor: Colors.ink.bg,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  buttonText: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 15,
    color: Colors.ink.onGradient,
  },
});
