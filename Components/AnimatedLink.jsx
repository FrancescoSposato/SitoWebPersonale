import { useRef, useState } from "react";
import { Pressable, Animated } from "react-native";
import { Link } from "expo-router";

// Wrapper riusabile per i link di testo (non i bottoni pieni, quelli usano
// ButtonLink): un po' di opacità al tocco, colore/sottolineatura all'hover
// (solo dove c'è un mouse, quindi web).
export default function AnimatedLink({
  href,
  children,
  style,
  hoveredStyle,
  wrapperStyle,
}) {
  const opacity = useRef(new Animated.Value(1)).current;
  const [hovered, setHovered] = useState(false);

  const pressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.6,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    // <Link asChild> clona il Pressable per agganciarci la navigazione: per
    // questo lo stile di layout (wrapperStyle) va messo qui, su un oggetto
    // fisso — non su un array costruito da fuori, che Link non saprebbe gestire.
    <Link href={href} asChild>
      <Pressable
        style={wrapperStyle}
        onPressIn={pressIn}
        onPressOut={pressOut}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
      >
        <Animated.Text style={[style, hovered && hoveredStyle, { opacity }]}>
          {children}
        </Animated.Text>
      </Pressable>
    </Link>
  );
}
