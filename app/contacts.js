import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Layout } from "../constants/layout";
import Footer from "../Components/Footer";
import { Link } from "expo-router";

export default function Contacts() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={{ flex: 1 }}>
        <View style={styles.hero}>
          <View style={styles.inner}>
            <View style={styles.heroText}>
              <Text style={styles.bigText}>
                Ti è piaciuto quello che hai visto? Contattami
              </Text>
              <Text style={styles.smallText}>
                Contattami tramite questi canali ufficiali per qualsiasi
                informazione e per ottenere il mio contatto telefonico!
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contactSection}>
          <View style={styles.cardRow}>
            <View style={styles.card}>
              <Text style={styles.cardLabel}>EMAIL</Text>
              <Link href="mailto:sposato.fs@outlook.it" style={styles.textLink}>
                sposato.fs@outlook.it
              </Link>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardLabel}>GITHUB</Text>
              <Link
                href="https://github.com/FrancescoSposato"
                style={styles.textLink}
              >
                https://github.com/FrancescoSposato
              </Link>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardLabel}>LINKEDIN</Text>
              <Link
                href="https://linkedin.com/in/francesco-sposato-318992431"
                style={styles.textLink}
              >
                https://linkedin.com/in/francesco-sposato-318992431
              </Link>
            </View>
          </View>
        </View>
      </View>
      <Footer></Footer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: Colors.ink.surface,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1, // fa sì che il contenuto occupi ALMENO tutta l'altezza dello schermo, non solo quella dei suoi figli
  },
  heroText: {
    maxWidth: 640,
    alignItems: "flex-start",
  },
  inner: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.ink.surface,
    width: "100%",
  },
  bigText: {
    fontFamily: Fonts.heading,
    fontSize: 48,
    color: Colors.ink.text,
  },
  smallText: {
    paddingTop: 20,
    fontFamily: Fonts.body,
    color: Colors.ink.textSecondary,
    fontSize: 17,
  },
  contactSection: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    paddingVertical: 64,
    alignSelf: "center",
    width: "100%",
    gap: 20,
  },
  cardRow: {
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
    gap: 18,
  },
  card: {
    flex: 1, // fa crescere la card per occupare la sua quota di spazio nella riga
    minWidth: 220, // evita che si schiacci troppo se la riga va a capo su schermi stretti
    gap: 10,
    paddingHorizontal: 24,
    paddingVertical: 28,
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  cardLabel: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    color: Colors.light.textSecondary,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  textLink: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 18,
    color: Colors.light.text,
  },
});
