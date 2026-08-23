import { Text, StyleSheet, Pressable, Linking } from "react-native";
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
  if (external) {
    return (
      <Pressable
        style={StyleSheet.flatten([styles.button, style])}
        onPress={() => Linking.openURL(href)}
      >
        <Text style={StyleSheet.flatten([styles.buttonText, textStyle])}>
          {label}
        </Text>
      </Pressable>
    );
  }

  return (
    <Link href={href} asChild>
      <Pressable style={StyleSheet.flatten([styles.button, style])}>
        <Text style={StyleSheet.flatten([styles.buttonText, textStyle])}>
          {label}
        </Text>
      </Pressable>
    </Link>
  );
}

// StyleSheet.flatten = mi permette di prendere l'ultimo elemento dell'array sovrapponendo le parti uguali, elementi come Pressable, Text e View lo hanno già, ma il <Link asChild> NO.
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: Colors.ink.accent,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 15,
    color: Colors.ink.onGradient,
  },
});
