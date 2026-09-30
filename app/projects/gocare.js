import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import { Layout } from "../../constants/layout";
import Footer from "../../Components/Footer";
import Kicker from "../../Components/Kicker";
import CvCard from "../../Components/CvCard";
import Tags from "../../Components/Tags";
import AnimatedLink from "../../Components/AnimatedLink";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function GoCare() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={{ flex: 1 }}>
        <View style={styles.hero}>
          <View style={styles.inner}>
            <View style={styles.heroText}>
              <Kicker label="dettaglio progetto"></Kicker>
              <Text style={styles.bigText}>Project GoCare</Text>
              <Text style={styles.smallText}>
                Un progetto di gruppo che facilita il contatto tra persone
                bisognose di un trasporto sociale e associazioni di volontariato
                che forniscono questo servizio.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.overviewContainer}>
          <View style={styles.overview}>
            <Tags
              tags={[
                "React Native",
                "Expo Router",
                "C#",
                "ASP.NET Core",
                "EF Core",
                "PostGree",
              ]}
            ></Tags>
            <View style={styles.status}>
              <View style={styles.statusDot}></View>
              <Text style={styles.statusText}>In costruzione</Text>
            </View>
            <Text style={styles.cvSectionTitle}>Panoramica</Text>
            <Text style={styles.cardText}>
              GoCare nasce per risolvere un problema concreto: molte persone
              anziane o con mobilità ridotta hanno bisogno di essere
              accompagnate a visite mediche, ricoveri o dimissioni, ma oggi
              questo si organizza ancora per telefono, tra caregiver familiari e
              associazioni di volontariato — senza uno storico, senza visibilità
              su chi ha già risposto, senza modo di tracciare lo stato del
              viaggio in corso. GoCare digitalizza questo processo: un caregiver
              registra la persona di cui si occupa e richiede un trasporto per
              suo conto; la richiesta arriva automaticamente alle associazioni
              accreditate competenti per zona, che possono accettarla o
              rifiutarla; una volta presa in carico, lo stato del viaggio viene
              aggiornato passo passo (partenza, arrivo, ritorno) e sia il
              caregiver sia l'associazione hanno sempre visibilità completa su
              richieste attive e storiche. Ho curato lo sviluppo del backend per
              intero: dal disegno del modello di dominio (gestione
              multi-caregiver per la stessa persona assistita, gestione degli
              stati del viaggio, gestione dell'accreditamento delle
              associazioni) alle scelte architetturali (autenticazione,
              validazione, gestione degli errori), fino all'evoluzione della
              struttura del progetto man mano che i requisiti si chiarivano.
            </Text>
            <View style={styles.imageSquareFull}>
              <Image
                source={require("../../assets/care_icon.png")}
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
                <Text style={styles.cardTitle}>React Native + Expo Router</Text>
                <Text style={styles.cardText}>
                  [Il tuo contributo su questa parte / perché questa scelta]
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>ASP.NET Core + EF Core</Text>
                <Text style={styles.cardText}>
                  [Il tuo contributo su questa parte / perché questa scelta]
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>PostgreSQL</Text>
                <Text style={styles.cardText}>
                  [Il tuo contributo su questa parte / perché questa scelta]
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
                  [Scrivi qui, es. la collaborazione col gruppo, la divisione
                  dei compiti tra frontend e backend...]
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Difficoltà incontrate</Text>
                <Text style={styles.cardText}>[Scrivi qui...]</Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>
                  Cosa rifaresti diversamente
                </Text>
                <Text style={styles.cardText}>[Scrivi qui...]</Text>
              </CvCard>
            </View>
          </View>
        </View>

        <View style={styles.closingSection}>
          <View style={styles.closingInner}>
            <View style={styles.closingPanel}>
              <Text style={styles.closingText}>
                {/* Quando avrai un repo pubblico per GoCare, aggiungi qui un
                ButtonLink "Vedi il repository" come in this.js */}
                Torna alla lista dei progetti per vedere gli altri lavori.
              </Text>
              <View style={styles.closingCtas}>
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
