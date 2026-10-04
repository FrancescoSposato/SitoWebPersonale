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

export default function MicToText() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={{ flex: 1 }}>
        <View style={styles.hero}>
          <View style={styles.inner}>
            <View style={styles.heroText}>
              <Kicker label="dettaglio progetto"></Kicker>
              <Text style={styles.bigText}>MicToText</Text>
              <Text style={styles.smallText}>
                Uno strumento che registra le lezioni e trasforma l'audio in
                appunti strutturati e schemi visivi, generati in automatico da
                un'IA che gira interamente in locale.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.overviewContainer}>
          <View style={styles.overview}>
            <Tags tags={["Python", "Ollama", "Flask"]}></Tags>
            <View style={styles.status}>
              <View style={styles.statusDot}></View>
              <Text style={styles.statusText}>In costruzione</Text>
            </View>
            <Text style={styles.cvSectionTitle}>Panoramica</Text>
            <Text style={styles.cardText}>
              MicToText è nato dalla necessità di registrare l'audio delle lezioni
              e trasformarlo in automatico in schemi e schede di studio. L'idea è
              arrivata in un periodo pieno di lezioni, quando costruire uno schema
              anche per un solo argomento mi portava via moltissimo tempo — e gli
              argomenti da studiare erano tanti e diversi tra loro.
            </Text>
            <Text style={styles.cardText}>
              L'obiettivo qui non era il codice in sé: l'app è stata costruita con
              il supporto quasi completo dell'IA, perché la priorità era avere in
              fretta uno strumento che funzionasse davvero.
            </Text>
            <Text style={styles.cardText}>
              L'unico vincolo non negoziabile era che girasse interamente in
              locale, senza appoggiarsi a nessun servizio cloud.
            </Text>
            <View style={styles.imageSquareFull}>
              <Image
                source={require("../../assets/micToText.png")}
                style={styles.screenshot}
              ></Image>
            </View>
          </View>
        </View>

        <View style={styles.stackContainer}>
          <View style={styles.stack}>
            <Kicker label="stack tecnologico"></Kicker>
            <Text style={styles.cvSectionTitle}>Cosa ho utilizzato</Text>
            <View style={styles.cardSection}>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Python</Text>
                <Text style={styles.cardText}>
                  Tutta la pipeline gira in locale in Python: dalla cattura del
                  microfono all'orchestrazione dei vari passaggi.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>faster-whisper</Text>
                <Text style={styles.cardText}>
                  Trascrive l'audio in testo direttamente sul PC, senza inviare
                  nulla a servizi cloud.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Ollama (qwen2.5:7b)</Text>
                <Text style={styles.cardText}>
                  Un modello linguistico eseguito in locale trasforma la
                  trascrizione in appunti strutturati e in uno schema Mermaid.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Flask</Text>
                <Text style={styles.cardText}>
                  Un'interfaccia web opzionale, in locale, per avviare la
                  registrazione e seguire l'elaborazione senza usare la riga di
                  comando.
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
                  E' stata un applicazione incredibilmente veloce da creare. Ho
                  creato da subito un piano incrementeale: prima le cose piu
                  semplici, e man mano che i test proseguivano ho aumentato le
                  funzionalità. Avendo tralasciato quasi compeletamente la parte
                  di codice, mi sono concentrato soprattutto sulla
                  strutturazione dei requisiti e la mitigazione delle
                  problematiche.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>Difficoltà incontrate</Text>
                <Text style={styles.cardText}>
                  Uno dei grandi problemi dell'IA è la necessità di grandi
                  potenze di calcolo per poter funzionare in locale. Ho dovuto
                  effettuare ricerche per capire quale fosse il modello piu'
                  potente da me utilizzabile.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.cardTitle}>
                  Cosa rifaresti diversamente
                </Text>
                <Text style={styles.cardText}>
                  Avendo avuto piu' tempo a disposizione nella creazione,
                  cercherei di studiare e capire il codice prima di
                  implementarlo, perchè la reputo una cosa essenziale per creare
                  buon codice e migliorare lo sviluppo: il fatto che un app sia
                  vibe-codata non giustifica la non conoscenza dei dettagli del
                  suo funzionamento.
                </Text>
              </CvCard>
            </View>
          </View>
        </View>

        <View style={styles.closingSection}>
          <View style={styles.closingInner}>
            <View style={styles.closingPanel}>
              <Text style={styles.closingText}>
                Il codice di MicToText è pubblico su GitHub.
              </Text>
              <View style={styles.closingCtas}>
                <ButtonLink
                  href="https://github.com/FrancescoSposato/MicToText"
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
