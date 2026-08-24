import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

export default function CodeAnimation() {
  return (
    <View style={styles.panel}>
      <Text style={styles.codeLine}>
        <Text style={styles.tokKeyword}>const </Text>
        <Text style={styles.tokDefault}>developer</Text>
        <Text style={styles.tokPunct}> = {"{"}</Text>
      </Text>
      <Text style={styles.codeLine}>
        <Text style={styles.tokDefault}> {"  "}name:</Text>
        <Text style={styles.tokString}> "Francesco Sposato"</Text>
        <Text style={styles.tokPunct}>,</Text>
      </Text>
      <Text style={styles.codeLine}>
        <Text style={styles.tokDefault}> {"  "}stack:</Text>
        <Text style={styles.tokPunct}>{" ["}</Text>
        <Text style={styles.tokString}>"React Native"</Text>
        <Text style={styles.tokPunct}>, </Text>
        <Text style={styles.tokString}>"Expo"</Text>
        <Text style={styles.tokPunct}>, </Text>
        <Text style={styles.tokString}>"ASP.net Core"</Text>
        <Text style={styles.tokPunct}>, </Text>
        <Text style={styles.tokString}>"MySQL"</Text>
        <Text style={styles.tokPunct}>{"], "}</Text>
      </Text>
      <Text style={styles.codeLine}>
        <Text style={styles.tokDefault}> {"  "}learning:</Text>
        <Text style={styles.tokKeyword}> true</Text>
        <Text style={styles.tokPunct}>,</Text>
      </Text>
      <Text style={styles.codeLine}>
        <Text style={styles.tokPunct}>{"};"}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: Colors.ink.surface2,
    borderWidth: 1,
    borderColor: Colors.ink.border,
    borderRadius: 12,
    padding: 16,
  },
  codeLine: {
    fontFamily: Fonts.mono,
    fontSize: 14,
  },
  tokKeyword: {
    color: Colors.ink.primary,
  },
  tokDefault: {
    color: Colors.ink.text,
  },
  tokPunct: {
    color: Colors.ink.textSecondary,
  },
  tokString: {
    color: Colors.ink.accent,
  },
});
