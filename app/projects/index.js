import { Fonts } from "../../constants/fonts";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";
import Footer from "../../Components/Footer";
import Kicker from "../../Components/Kicker";
import ProjectCard from "../../Components/ProjectCard";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

export default function Projects() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.hero}>
        <View style={styles.inner}>
          <View style={styles.heroText}>
            <Kicker label="I miei progetti"></Kicker>
            <Text style={styles.bigText}>Cosa sto costruendo</Text>
            <Text style={styles.smallText}>
              Una selezione di progetti a cui sto lavorando o che ho concluso:
              dal sito che stai guardando ora a strumenti pensati per risolvere
              problemi reali, fino a progetti del tutto ludico-didattici.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.projectInner}>
        <View style={styles.projectContainer}>
          <View style={styles.projectSection}>
            <View style={styles.cardRow}>
              <View style={styles.imageSquare}>
                <Image
                  source={require("../../assets/sitoFake.png")}
                  style={styles.screenshot}
                ></Image>
              </View>
              <ProjectCard
                style={{ backgroundColor: Colors.light.surface2 }}
                tags={["React Native", "Expo Router", "Web + Android"]}
                title="Questo sito portfolio"
                description="Tutto ciò che vedi è stato creato da me, un componente alla volta."
                status="Concluso"
                linkHref={"/projects/this"}
                linkLabel={"Vai ai dettagli →"}
              ></ProjectCard>
            </View>
          </View>
        </View>

        <View style={styles.projectContainer2}>
            <View style={styles.projectSection}>
              <View style={styles.cardRow}>
                <ProjectCard
                  tags={[
                    "React Native",
                    "Expo Router",
                    "C#",
                    "ASP.NET Core",
                    "EF Core",
                    "PostGree",
                  ]}
                  title="Project GoCare"
                  description="Un progetto di gruppo che facilità il contatto tra persone bisognose 
                di un trasporto sociale e associazioni di volontariato che forniscono questo servizio."
                  status="In costruzione"
                  linkHref={"/projects/gocare"}
                  linkLabel={"Vai ai dettagli →"}
                ></ProjectCard>
                <View style={styles.imageSquare}>
                  <Image
                    source={require("../../assets/gocare_wheel.png")}
                    style={styles.screenshot}
                  ></Image>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.projectContainer}>
            <View style={styles.projectSection}>
              <View style={styles.cardRow}>
                <View style={styles.imageSquare}></View>
                <ProjectCard
                  style={{ backgroundColor: Colors.light.surface2 }}
                  tags={["JAVA", "Java.Fx"]}
                  title="QuantoSpendo"
                  description="Applicazione Java che simula un gestionale di spese personali."
                  status="concluso"
                  linkHref={"/projects/quantospendo"}
                  linkLabel={"Vai ai dettagli →"}
                ></ProjectCard>
              </View>
            </View>
          </View>
          <View style={styles.projectContainer2}>
            <View style={styles.projectSection}>
              <View style={styles.cardRow}>
                <ProjectCard
                  tags={["PHP", "HTML", "CSS", "JAVASCRIPT", "SQL"]}
                  title="MyITSdiet"
                  description="Sito web con la funzione di aiutarti nel gestira la dieta con un calendario settimanale."
                  status="Concluso"
                  linkHref={"/projects/itsdiet"}
                  linkLabel={"Vai ai dettagli →"}
                ></ProjectCard>
                <View style={styles.imageSquare}></View>
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
  projectSection: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    paddingVertical: 20,
    alignSelf: "center",
    width: "100%",
    gap: 20,
  },
  cardRow: {
    flexDirection: "row",
    gap: 10,
  },
  imageSquare: {
    width: 400, // prima era solo maxWidth: 400 — ora è una larghezza definita, non calcolata dal contenuto,
  },
  screenshot: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // ritaglia mantenendo le proporzioni, riempiendo il box
  },
  projectContainer: {
    width: "100%",
    backgroundColor: Colors.light.surface,
    paddingVertical: 20,
  },
  projectContainer2: {
    width: "100%",
    backgroundColor: Colors.light.surface2,
    paddingVertical: 20,
  },
  projectInner: {},
});
