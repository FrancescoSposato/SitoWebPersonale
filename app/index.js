import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Layout } from "../constants/layout";
import { Link } from "expo-router";
import ButtonLink from "../Components/ButtonLink";
import CodeAnimation from "../Components/CodeAnimation";
import Kicker from "../Components/Kicker";
import StackLine from "../Components/StackLine";
import { ScrollView } from "react-native";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.hero}>
        <View style={styles.inner}>
          <View style={styles.leftContainer}>
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
              <ButtonLink
                href="/Francesco_Sposato_CV.pdf"
                label="Scarica il CV"
                external
                textStyle={{ color: Colors.ink.textSecondary }}
                style={styles.buttonCV}
              ></ButtonLink>
            </View>
          </View>
          <View style={styles.rightContainer}>
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
              Core items nello stack: React Native, Expo, EF Core, ASP.net Core
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
            <Link href="/projects" style={styles.sectionLink}>
              Tutti i progetti →
            </Link>
          </View>
          <View style={styles.projectCardsRow}>
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
              tags={["React Native", "C#", "ASP.net Core", "PostGree"]}
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
              <Text style={styles.blackViewText}>
                Curriculum, competenze tecniche e percorso formativo in un'unica
                pagina.
              </Text>
            </View>
            <View style={styles.blackViewCtas}>
              <ButtonLink
                href="/curriculum"
                label="Vai al curriculum"
              ></ButtonLink>
              <ButtonLink
                href="/contacts"
                label="Scrivimi"
                textStyle={{ color: Colors.ink.textSecondary }}
                style={styles.buttonCV}
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
  buttonCV: {
    backgroundColor: Colors.ink.surface,
    borderWidth: 1,
    borderColor: Colors.ink.border,
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
    shadowColor: "#0F172A",
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
    textDecorationLine: "underline",
  },
  projectCardsRow: {
    flexDirection: "row",
    gap: 20,
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
