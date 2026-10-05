import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import AnimatedLink from "./AnimatedLink";

export default function ProjectCard({
  variant = "small",
  tags,
  title,
  description,
  status,
  linkHref,
  linkLabel,
  style,
}) {
  const isBig = variant === "big";

  return (
    <View
      style={[styles.pCard, isBig ? styles.pCardBig : styles.pCardSmall, style]}
    >
      <View style={styles.pTagRow}>
        {tags.map((tag) => (
          <Text key={tag} style={styles.pTag}>
            {tag}
          </Text>
        ))}
      </View>
      <Text style={isBig ? styles.pCardBigTitle : styles.pCardTitle}>
        {title}
      </Text>
      <Text style={styles.pCardText}>{description}</Text>
      {status ? (
        <View style={styles.pStatus}>
          <View style={styles.pStatusDot}></View>
          <Text style={styles.pStatusText}>{status}</Text>
        </View>
      ) : null}
      <AnimatedLink
        href={linkHref}
        style={styles.pLink}
        hoveredStyle={styles.pLinkHovered}
        wrapperStyle={styles.pLinkWrap}
      >
        {linkLabel}
      </AnimatedLink>
    </View>
  );
}

const styles = StyleSheet.create({
  pCard: {
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.border,
    padding: 26,
    gap: 14, //applica spaziatura su tutti i figli, evita di mettere marginBottom a tutti
  },
  pCardBig: {
    flex: 1.4,
    minWidth: 280,
  },
  pCardSmall: {
    flex: 1,
    minWidth: 240,
  },
  pTagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  pTag: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    color: Colors.light.textSecondary,
    borderWidth: 1,
    borderColor: Colors.light.border,
    paddingVertical: 4,
    paddingHorizontal: 9,
  },
  pCardBigTitle: {
    fontFamily: Fonts.heading,
    fontSize: 27,
    color: Colors.light.text,
    lineHeight: 23,
  },
  pCardTitle: {
    fontFamily: Fonts.heading,
    fontSize: 27,
    color: Colors.light.text,
  },
  pCardText: {
    fontFamily: Fonts.body,
    fontSize: 15,
    color: Colors.light.textSecondary,
    lineHeight: 23,
  },
  pStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  pStatusDot: {
    backgroundColor: Colors.ink.accent,
    width: 6,
    height: 6,
    borderRadius: 999,
  },
  pStatusText: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    color: Colors.light.accent,
  },
  pLinkWrap: {
    alignSelf: "flex-start",
    paddingTop: 4,
  },
  pLink: {
    fontFamily: Fonts.mono,
    fontSize: 13,
    color: Colors.light.primary,
  },
  pLinkHovered: {
    textDecorationLine: "underline",
  },
});
