import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

const lines = [
  [
    { text: "const ", style: "tokKeyword" },
    { text: "developer", style: "tokDefault" },
    { text: " = {", style: "tokPunct" },
  ],
  [
    { text: "  name:", style: "tokDefault" },
    { text: ' "Francesco Sposato"', style: "tokString" },
    { text: ",", style: "tokPunct" },
  ],
  [
    { text: "  stack:", style: "tokDefault" },
    { text: " [", style: "tokPunct" },
    { text: '"React Native"', style: "tokString" },
    { text: ", ", style: "tokPunct" },
    { text: '"Expo"', style: "tokString" },
    { text: ", ", style: "tokPunct" },
    { text: '"ASP.NET Core"', style: "tokString" },
    { text: ", ", style: "tokPunct" },
    { text: '"MySQL"', style: "tokString" },
    { text: "], ", style: "tokPunct" },
  ],
  [
    { text: "  learning:", style: "tokDefault" },
    { text: " true", style: "tokKeyword" },
    { text: ",", style: "tokPunct" },
  ],
  [{ text: "};", style: "tokPunct" }],
];

const totalChars = lines.reduce(
  (sum, line) => sum + line.reduce((s, tok) => s + tok.text.length, 0),
  0
);

export default function CodeAnimation() {
  const [charsShown, setCharsShown] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let active = true;
    let shown = 0;

    function step() {
      if (!active || shown >= totalChars) return;
      shown += 1;
      setCharsShown(shown);
      setTimeout(step, 20 + Math.random() * 30);
    }

    step();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    function blinkStep() {
      setTimeout(() => {
        if (!active) return;
        setCursorVisible((v) => !v);
        blinkStep();
      }, 500);
    }

    blinkStep();

    return () => {
      active = false;
    };
  }, []);

  let consumed = 0; // conteggio globale dei caratteri già "assegnati" mentre scorriamo i token
  let cursorPlaced = false; // il cursore va messo una volta sola, sulla riga "attiva"

  return (
    <View style={styles.panel}>
      <View style={styles.termBar}>
        <View style={styles.termDot}></View>
        <View style={styles.termDot}></View>
        <View style={styles.termDot}></View>
        <Text style={styles.termFile}>profilo.js</Text>
      </View>
      <View style={styles.termBody}>
        {lines.map((line, li) => {
          const lineTokens = line.map((tok, ti) => {
            const start = consumed;
            consumed += tok.text.length;
            const visible = Math.max(
              0,
              Math.min(tok.text.length, charsShown - start)
            );
            return (
              <Text key={ti} style={styles[tok.style]}>
                {tok.text.slice(0, visible)}
              </Text>
            );
          });

          const showCursorHere = !cursorPlaced && charsShown <= consumed;
          if (showCursorHere) cursorPlaced = true;

          return (
            <Text key={li} style={styles.codeLine}>
              {lineTokens}
              {showCursorHere && (
                <Text
                  style={[styles.cursor, { opacity: cursorVisible ? 1 : 0 }]}
                >
                  █
                </Text>
              )}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: Colors.ink.surface2,
    borderWidth: 1,
    borderColor: Colors.ink.border,
    borderRadius: 10,
    shadowColor: Colors.ink.bg,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.35,
    shadowRadius: 30,
    elevation: 10,
  },
  termBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.ink.border,
  },
  termDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: Colors.ink.border,
  },
  termFile: {
    marginLeft: 6,
    fontFamily: Fonts.mono,
    fontSize: 13,
    color: Colors.ink.textSecondary,
    letterSpacing: 0.3,
  },
  termBody: {
    padding: 20,
    minHeight: 190,
  },
  codeLine: {
    fontFamily: Fonts.mono,
    fontSize: 14,
    lineHeight: 24,
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
  cursor: {
    color: Colors.ink.accent,
    fontFamily: Fonts.mono,
  },
});
