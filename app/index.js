import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Layout } from "../constants/layout";
import AnimatedLink from "../Components/AnimatedLink";
import ButtonLink from "../Components/ButtonLink";
import CodeAnimation from "../Components/CodeAnimation";
import Kicker from "../Components/Kicker";
import StackLine from "../Components/StackLine";
import { ScrollView } from "react-native";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";

export default function Index() {
  const { width } = useWindowDimensions();
  const isNarrow = width < 700;

  return (
    <ScrollView>
      <View style={styles.hero}>
        <View style={[styles.inner, isNarrow && styles.innerNarrow]}>
          <View style={[styles.leftContainer, isNarrow && styles.containerNarrow]}>
            <Kicker label="Studente & aspirante sviluppatore"></Kicker>
            <Text style={styles.bigText}>
              Studente di coding presso ITS Umbria Academy.
            </Text>
            <Text style={styles.smallText}>
              Pronto da subito a entrare nel mondo del lavoro. Ogni occasione di
              crescita personale e professionale è benvenuta.
            </Text>
            <View style={styles.buttonRow}>
              <ButtonLink
                href="/projects"
                label="Guarda i progetti"
              ></ButtonLink>
            </View>
          </View>
          <View style={[styles.rightContainer, isNarrow && styles.containerNarrow]}>
            <CodeAnimation></CodeAnimation>
          </View>
        </View>
      </View>
      <StackLine></StackLine>
      <View style={styles.statsSection}>
        <View style={styles.statsInner}>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>1000+</Text>
            <Text style={styles.statLabel}>Ore di formazione</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>5+</Text>
            <Text style={styles.statLabel}>
              Core items nello stack: React Native, Expo, EF Core, ASP.NET Core
            </Text>
          </View>
          <View style={styles.statCard}>
            <Text></Text>
            <Text style={styles.statNumQuote}>"Measure twice, cut once"</Text>
          </View>
        </View>
      </View>
      <View style={styles.projectsSection}>
        <View style={styles.projectsInner}>
          <View style={styles.sectionHead}>
            <Text style={styles.sectionTitle}>Cosa sto costruendo</Text>
            <AnimatedLink
              href="/projects"
              style={styles.sectionLink}
              hoveredStyle={styles.sectionLinkHovered}
            >
              Tutti i progetti →
            </AnimatedLink>
          </View>
          <View style={[styles.projectCardsRow, isNarrow && styles.projectCardsRowNarrow]}>
            <ProjectCard
              variant="big"
              tags={["React Native", "Expo Router", "Web + Android"]}
              title={"Questo sito"}
              description={
                "Questo pagina web nasce dall'esigenza di avere un portfolio/vetrina: costruito da zero con Expo Router, visibile su ogni piattaforma grazie al framework React Native."
              }
              status="Concluso"
              linkHref={""}
            ></ProjectCard>
            <ProjectCard
              variant="small"
              tags={["React Native", "C#", "ASP.NET Core", "PostGree"]}
              title={"Project GoCare"}
              description={
                "Una web app leggera e veloce che facilita il contatto tra persone bisognose di trasporti sociali e associazioni di volontariato."
              }
              status="In produzione"
              linkHref={"/projects/gocare"}
              linkLabel={"Apri il progetto →"}
            ></ProjectCard>
          </View>
        </View>
      </View>
      <View style={styles.blackViewSection}>
        <View style={styles.blackViewInner}>
          <View style={styles.blackViewPanel}>
            <View style={styles.blackViewPanelText}>
              <Text style={styles.blackViewTitle}>
                Vuoi il quadro completo del mio percorso?
              </Text>
            </View>
            <View style={styles.blackViewCtas}>
              <ButtonLink
                href="/curriculum"
                label="Vai al curriculum"
              ></ButtonLink>
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
    flex: 1,
    backgroundColor: Colors.ink.surface,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
  },
  inner: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.ink.surface,
    width: "100%",
  },
  innerNarrow: {
    flexDirection: "column-reverse",
    alignItems: "stretch",
    gap: 32,
  },
  containerNarrow: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "100%",
    maxWidth: "100%",
  },
  leftContainer: {
    flex: 1,
    maxWidth: 580,
  },
  rightContainer: {
    flex: 1,
    maxWidth: 580,
    justifyContent: "center",
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
  buttonRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    paddingTop: 20,
  },
  statsSection: {
    backgroundColor: Colors.light.bg,
    paddingVertical: 64,
  },
  statsInner: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  statCard: {
    flex: 1,
    minWidth: 220,
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.border,
    padding: 24,
    shadowColor: Colors.light.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2, //per android
  },
  statNum: {
    fontFamily: Fonts.mono,
    fontSize: 40,
    color: Colors.light.primary,
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 15,
    color: Colors.light.textSecondary,
    lineHeight: 22,
  },
  statNumQuote: {
    fontSize: 30,
    fontFamily: Fonts.mono,
    color: Colors.light.primary,
    fontStyle: "italic",
    marginTop: 10,
  },
  projectsSection: {
    backgroundColor: Colors.light.bg,
    paddingVertical: 64,
  },
  projectsInner: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    width: "100%",
  },
  sectionTitle: {
    fontFamily: Fonts.heading,
    fontSize: 35,
    color: Colors.light.text,
  },
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 28,
  },
  sectionLink: {
    fontFamily: Fonts.mono,
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  sectionLinkHovered: {
    color: Colors.light.text,
    textDecorationLine: "underline",
  },
  projectCardsRow: {
    flexDirection: "row",
    gap: 20,
  },
  projectCardsRowNarrow: {
    flexDirection: "column",
  },
  blackViewSection: {
    backgroundColor: Colors.light.bg,
    paddingVertical: 64,
  },
  blackViewInner: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    alignSelf: "center",
    width: "100%",
  },
  blackViewPanel: {
    backgroundColor: Colors.ink.surface,
    padding: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 24,
  },
  blackViewPanelText: {
    flex: 1,
    minWidth: 260,
  },
  blackViewTitle: {
    fontFamily: Fonts.heading,
    fontSize: 28,
    color: Colors.ink.text,
  },
  blackViewText: {
    fontFamily: Fonts.body,
    fontSize: 16,
    color: Colors.ink.textSecondary,
    marginTop: 8,
  },
  blackViewCtas: {
    flexDirection: "row",
    gap: 12,
  },
});
