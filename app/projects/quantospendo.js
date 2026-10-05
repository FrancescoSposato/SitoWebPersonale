import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import { Layout } from "../../constants/layout";
import Footer from "../../Components/Footer";
import Kicker from "../../Components/Kicker";
import CvCard from "../../Components/CvCard";
import Tags from "../../Components/Tags";
import ButtonLink from "../../Components/ButtonLink";
import AnimatedLink from "../../Components/AnimatedLink";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function QuantoSpendo() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={{ flex: 1 }}>
        <View style={styles.hero}>
          <View style={styles.inner}>
            <View style={styles.heroText}>
              <Kicker label="dettaglio progetto"></Kicker>
              <Text style={styles.bigText}>QuantoSpendo</Text>
              <Text style={styles.smallText}>
                Applicazione Java che simula un gestionale di spese personali.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.overviewContainer}>
          <View style={styles.overview}>
            <Tags tags={["JAVA", "Java.Fx"]}></Tags>
            <View style={styles.status}>
              <View style={styles.statusDot}></View>
              <Text style={styles.statusText}>Concluso</Text>
            </View>
            <Text style={styles.cvSectionTitle}>Panoramica</Text>
            <Text style={styles.cardText}>
              QuantoSpendo è stato il primo vero piccolo progetto costruito a
              livello scolastico. Quando ho creato questo progetto sapevo molto
              poco di programmazione: pochi concetti e confusi.
            </Text>
            <Text style={styles.cardText}>
              E' stato il primo contatto con la necessità di creare folder
              structures coerenti e pulite, oltre che il primo approccio con le
              interfacce grafiche. La sua realizazzione ha cominciato a dare
              peso alle conoscenze apprese fino a quel momento.
            </Text>
            <View style={styles.imageSquareFull}>
              <Image
                source={require("../../assets/quanto_icon.png")}
                style={styles.screenshot}
              ></Image>
            </View>
          </View>
        </View>

        <View style={styles.stackContainer}>
          <View style={styles.stack}>
            <Kicker label="stack tecnologico"></Kicker>
            <Text style={styles.cvSectionTitle}>Cosa c'è sotto il cofano</Text>
            <View style={styles.cardSection}>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Java</Text>
                <Text style={styles.cardText}>
                  Al momento della creazione di QuantoSpendo avevo studiato solo
                  Python. Il passaggio a un linguaggio staticamente tipizzato,
                  dove ogni tipo va dichiarato e viene controllato in
                  compilazione, è stato un bel cambio.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>JavaFX</Text>
                <Text style={styles.cardText}>
                  Uno strumento intuitivo per creare GUI con Java.
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
                <Text style={styles.cardTitle}>Cosa ha funzionato bene</Text>
                <Text style={styles.cardText}>
                  Ho capito da subito che in un progetto con svariati file è
                  importantissima un'organizzazione precisa e pulita. La
                  definizione da subito di questa struttura mi ha facilitato in
                  modo esponenziale il lavoro successivo.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Difficoltà incontrate</Text>
                <Text style={styles.cardText}>
                  Essendo la prima vera app mai realizzata sono state molte: 1
                  Comprensione della folder structure necessaria 2 Comprensione
                  architetturale di Service, Controller e Repository 3
                  comprensione di come costruire un metodo e dell'importazione
                  tra moduli differenti
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Cosa rifarei diversamente</Text>
                <Text style={styles.cardText}>
                  Definirei meglio Use Cases e gestione delle tempistiche. Al
                  momento della creazione di QuantoSpendo ancora non erano
                  chiare le buone pratiche per una progettazione ottimale.
                </Text>
              </CvCard>
            </View>
          </View>
        </View>

        <View style={styles.closingSection}>
          <View style={styles.closingInner}>
            <View style={styles.closingPanel}>
              <Text style={styles.closingText}>
                Il codice di QuantoSpendo è pubblico su GitHub.
              </Text>
              <View style={styles.closingCtas}>
                <ButtonLink
                  href="https://github.com/FrancescoSposato/QuantoSpendo"
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
  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statusDot: {
    backgroundColor: Colors.ink.accent,
    width: 6,
    height: 6,
    borderRadius: 999,
  },
  statusText: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    color: Colors.light.accent,
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
    flexWrap: "wrap",
    alignItems: "center",
    gap: 20,
    flexShrink: 1,
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
