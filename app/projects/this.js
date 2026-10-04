import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import { Layout } from "../../constants/layout";
import Footer from "../../Components/Footer";
import Kicker from "../../Components/Kicker";
import CvCard from "../../Components/CvCard";
import ButtonLink from "../../Components/ButtonLink";
import AnimatedLink from "../../Components/AnimatedLink";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function This() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={{ flex: 1 }}>
        <View style={styles.hero}>
          <View style={styles.inner}>
            <View style={styles.heroText}>
              <Kicker label="dettaglio progetto"></Kicker>
              <Text style={styles.bigText}>FrancescoSposato.dev</Text>
              <Text style={styles.smallText}>
                Il sito che stai guardando ora: costruito da zero con Expo
                Router, un componente alla volta, per avere un'unica base di
                codice che funziona identica sul web e su Android.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.overviewContainer}>
          <View style={styles.overview}>
            <View style={styles.cardSection}>
              <CvCard style={[styles.cvCardItem, styles.tagCardCenter]}>
                <Text style={styles.cardTitle}>React Native</Text>
              </CvCard>
              <CvCard style={[styles.cvCardItem, styles.tagCardCenter]}>
                <Text style={styles.cardTitle}>Expo Router</Text>
              </CvCard>
              <CvCard style={[styles.cvCardItem, styles.tagCardCenter]}>
                <Text style={styles.cardTitle}>Web + Android</Text>
              </CvCard>
            </View>
          </View>
        </View>

        <View style={styles.stackContainer}>
          <View style={styles.stack}>
            <Kicker label="stack tecnologico"></Kicker>
            <Text style={styles.cvSectionTitle}>Cosa ho utilizzato </Text>
            <View style={styles.cardSection}>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>React Native + Expo</Text>
                <Text style={styles.cardText}>
                  Un'unica base di codice per web e Android, senza dover
                  mantenere due progetti separati.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Expo Router</Text>
                <Text style={styles.cardText}>
                  Routing a file: ogni file in app/ è una schermata, incluse le
                  pagine di dettaglio come questa.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>StyleSheet nativo</Text>
                <Text style={styles.cardText}>
                  Nessuna libreria di styling esterna: solo StyleSheet.create di
                  React Native.
                </Text>
              </CvCard>
            </View>
          </View>
        </View>

        <View style={styles.decisionsContainer}>
          <View style={styles.decisions}>
            <Kicker label="decisioni e problemi risolti"></Kicker>
            <Text style={styles.cvSectionTitle}>
              Quello che ho imparato costruendolo
            </Text>
            <View style={styles.cardSection}>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Separazione in componenti</Text>
                <Text style={styles.cardText}>
                  Invece di scrivere ogni pagina da zero, ho tirato fuori i
                  pezzi che si ripetono (intestazione, footer, le card dei
                  progetti) in componenti a parte. Così se cambio una card,
                  cambia dappertutto. Lo scopo è anche capire e creare una
                  "libreria" di componenti riutilizzabili per progetti futuri.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Costanti centralizzate</Text>
                <Text style={styles.cardText}>
                  Colori, font e larghezze massime non sono scritti a mano in
                  ogni pagina, ma vivono in tre soli file dentro constants/. Se
                  domani cambio il colore principale del sito, lo cambio in un
                  posto solo e si aggiorna ovunque. Questo è importantissimo per
                  una manutenzione rapida e chhirurgica.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Routing a file</Text>
                <Text style={styles.cardText}>
                  Con Expo Router ogni file dentro app/ diventa automaticamente
                  una pagina raggiungibile.
                </Text>
              </CvCard>
            </View>
          </View>
        </View>

        <View style={styles.closingSection}>
          <View style={styles.closingInner}>
            <View style={styles.closingPanel}>
              <Text style={styles.closingText}>
                Il codice di questo sito è pubblico su GitHub.
              </Text>
              <View style={styles.closingCtas}>
                <ButtonLink
                  href="https://github.com/FrancescoSposato/SitoWebPersonale"
                  label="Vedi il repository"
                  external
                ></ButtonLink>
                <AnimatedLink
                  href="/projects"
                  style={styles.sectionLink}
                  hoveredStyle={styles.sectionLinkHovered}
                >
                  ← Torna ai progetti
                </AnimatedLink>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Footer></Footer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: Colors.ink.surface,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    width: "100%",
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
    lineHeight: 27,
  },
  overviewContainer: {
    width: "100%",
    backgroundColor: Colors.light.surface,
    paddingVertical: 48,
  },
  overview: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    width: "100%",
    gap: 14,
  },
  tagCardCenter: {
    alignItems: "center",
  },
  imageSquareFull: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  screenshot: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  stackContainer: {
    width: "100%",
    backgroundColor: Colors.light.surface2,
    paddingVertical: 48,
  },
  stack: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    width: "100%",
    gap: 10,
  },
  decisionsContainer: {
    width: "100%",
    backgroundColor: Colors.light.surface,
    paddingVertical: 48,
  },
  decisions: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    width: "100%",
    gap: 10,
  },
  cvSectionTitle: {
    fontFamily: Fonts.heading,
    fontSize: 30,
  },
  cardSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    paddingVertical: 15,
  },
  cardTitle: {
    fontFamily: Fonts.heading,
    fontSize: 15,
    color: Colors.light.text,
    marginBottom: 14,
  },
  cardText: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.light.textSecondary,
    lineHeight: 22,
  },
  cvCardItem: {
    flex: 1,
    minWidth: 220,
  },
  closingSection: {
    width: "100%",
    backgroundColor: Colors.light.bg,
    paddingVertical: 48,
  },
  closingInner: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    width: "100%",
  },
  closingPanel: {
    backgroundColor: Colors.ink.surface,
    padding: 32,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  closingText: {
    fontFamily: Fonts.body,
    fontSize: 16,
    color: Colors.ink.textSecondary,
  },
  closingCtas: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  sectionLink: {
    fontFamily: Fonts.mono,
    fontSize: 14,
    color: Colors.ink.primary,
  },
  sectionLinkHovered: {
    color: Colors.ink.text,
    textDecorationLine: "underline",
  },
});
