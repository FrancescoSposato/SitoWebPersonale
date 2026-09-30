import { useEffect, useRef, useState } from "react";
import { Animated, Easing, View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

const stack = [
  "React Native",
  "Expo",
  "Expo Router",
  "C#",
  "ASP.NET Core",
  "Entity Framework",
  "Javascript",
  "C++",
  "Pyhton",
];

const PIXELS_PER_SECOND = 40;

function StackItems() {
  return (
    <>
      {stack.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.dot}></View>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </>
  );
}

export default function StackLine() {
  const [bandWidth, setBandWidth] = useState(0);
  const [oneWidth, setOneWidth] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const gap = bandWidth > 0 ? bandWidth * 0.25 : 96; // 25% della banda, con un valore di partenza prima della prima misura

  useEffect(() => {
    if (oneWidth === 0) return;

    let active = true;
    translateX.setValue(0);

    function loop() {
      Animated.timing(translateX, {
        toValue: -oneWidth,
        duration: (oneWidth / PIXELS_PER_SECOND) * 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished && active) {
          translateX.setValue(0);
          loop();
        }
      });
    }

    loop();

    return () => {
      active = false;
    };
  }, [oneWidth]);

  // quante copie servono per coprire tutta la banda, più una di scorta
  const copies = oneWidth > 0 ? Math.ceil(bandWidth / oneWidth) + 2 : 2;

  return (
    <View
      style={styles.band}
      onLayout={(e) => setBandWidth(e.nativeEvent.layout.width)}
    >
      <Animated.View style={[styles.track, { transform: [{ translateX }] }]}>
        {Array.from({ length: copies }).map((_, i) => (
          <View
            key={i}
            style={[styles.copy, { paddingRight: gap }]}
            onLayout={
              i === 0
                ? (e) => setOneWidth(e.nativeEvent.layout.width)
                : undefined
            }
          >
            <StackItems></StackItems>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  band: {
    backgroundColor: Colors.light.surface,
    overflow: "hidden",
    width: "100%",
  },
  track: {
    flexDirection: "row",
  },
  copy: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  item: {
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 999,
    backgroundColor: Colors.ink.accent,
  },
  text: {
    color: Colors.ink.textSecondary,
    fontFamily: Fonts.mono,
    fontSize: 14,
  },
});
