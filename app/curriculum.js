import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import { Layout } from "../constants/layout";
import Kicker from "../Components/Kicker";
import ButtonLink from "../Components/ButtonLink";
import CvCard from "../Components/CvCard";
import Tags from "../Components/Tags";
import Footer from "../Components/Footer";

export default function Curriculum() {
  return (
    <ScrollView>
      <View style={styles.hero}>
        <View style={styles.inner}>
          <View style={styles.imageContainer}></View>
          <View style={styles.rightContainer}>
            <Kicker label="curriculum vitae"></Kicker>
            <Text style={styles.bigText}>Francesco Sposato</Text>
            <Text style={styles.smallText}>
              Mi reputo una persona creativa a cui piace porsi sempre nuove
              sfide. Sono molto curioso, questo mi porta ad approfondire le
              nuove attività che mi si propongono, puntando sempre alla massima
              efficienza.
            </Text>
            <View style={styles.buttonRow}>
              <ButtonLink
                href="/Francesco_Sposato_CV.pdf"
                label="Scarica il CV"
                external
              ></ButtonLink>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.abilitySection}>
        <View style={styles.aboutMeContainer}>
          <View style={styles.aboutMe}>
            <View style={styles.cvSection}>
              <Kicker label="Su di me" style={styles.sectionText}></Kicker>
            </View>
            <Text style={styles.cvSectionTitle}>
              Competenze, lingue e interessi
            </Text>
            <View style={styles.cardSection}>
              <CvCard
                style={[
                  styles.cvCardItem,
                  { backgroundColor: Colors.light.surface2 },
                ]}
              >
                <Text style={styles.cardTitle}>Competenze Informatiche</Text>
                <Tags
                  tags={[
                    "SQL",
                    "C#",
                    "C++",
                    "Python",
                    "PHP",
                    "React Native",
                    ".NET",
                    "HTML&CSS",
                  ]}
                ></Tags>
              </CvCard>
              <CvCard
                style={[
                  styles.cvCardItem,
                  { backgroundColor: Colors.light.surface2 },
                ]}
              >
                <Text style={styles.cardTitle}>Lingue</Text>
                <View style={styles.itemRow}>
                  <Text style={styles.cardSubtitle}>Italiano</Text>
                  <Text style={styles.cardText}>- madrelingua</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.cardSubtitle}>Inglese</Text>
                  <Text style={styles.cardText}>- fluente</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.cardSubtitle}>Francese</Text>
                  <Text style={styles.cardText}>- fluente</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.cardSubtitle}>Spagnolo</Text>
                  <Text style={styles.cardText}>- ottimo</Text>
                </View>
              </CvCard>
              <CvCard
                style={[
                  styles.cvCardItem,
                  { backgroundColor: Colors.light.surface2 },
                ]}
              >
                <Text style={styles.cardTitle}>Interessi</Text>
                <Tags
                  tags={[
                    "Chitarra",
                    "Arti circensi",
                    "Videgiochi indie",
                    "VJing/TouchDesigner",
                  ]}
                  styleRow={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                ></Tags>
              </CvCard>
              <CvCard
                style={[
                  styles.cvCardItem,
                  { backgroundColor: Colors.light.surface2 },
                ]}
              >
                <Text style={styles.cardTitle}>Disponibilità</Text>
                <Text style={styles.cardText}>Patente B</Text>
                <Text style={styles.cardText}>
                  Disponibile al trasferimento
                </Text>
              </CvCard>
            </View>
          </View>
        </View>
        <View style={styles.formationContainer}>
          <View style={styles.formation}>
            <View style={styles.cvSection}>
              <Kicker label="Percorso" style={styles.kickerText}></Kicker>
            </View>
            <Text style={styles.cvSectionTitle}>Istruzione e formazione</Text>
            <View style={[styles.cardSection, { flexDirection: "column" }]}>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.sectionText}>11/2025 - in corso</Text>
                <Text style={styles.cardTitle}>
                  ITS Umbria Academy - Perugia (PG)
                </Text>
                <Text style={styles.cardText}>
                  Tecnico Superiore in Data Management & Coding. Metodologia
                  progettuale e tecniche di programmazione, informatica avanzata
                  e ingegneria del software, basi di dati e big data management,
                  reti e internet technologies, machine learning e realtà
                  aumentata/virtuale.
                </Text>
              </CvCard>
              <CvCard style={styles.cvCardItem}>
                <Text style={styles.sectionText}>9/2013 - 7/2018</Text>
                <Text style={styles.cardTitle}>
                  Istituto Tecnico Agrario "A. M. Camaiti" — Pieve Santo Stefano
                  (AR)
                </Text>
                <Text style={styles.cardText}>
                  Diploma conseguito con votazione 78/100.
                </Text>
              </CvCard>
            </View>
          </View>
        </View>
        <View style={styles.worksContainer}>
          <View style={styles.works}>
            <View style={styles.cvSection}>
              <Kicker label="Esperienza" style={styles.kickerText}></Kicker>
            </View>
            <Text style={styles.cvSectionTitle}>
              Esperienze lavorative e altre attività
            </Text>
            <View style={[{ flexDirection: "column" }]}>
              <View style={styles.cardSection}>
                <CvCard
                  style={[
                    styles.cvCardItem,
                    { backgroundColor: Colors.light.surface2 },
                  ]}
                >
                  <Text style={styles.sectionText}>
                    2019 - 2025, periodi estivi
                  </Text>
                  <Text style={styles.cardTitle}>
                    Attività agricole{" "}
                    {"(Vendemmia, raccolta frutta, potatura)."}
                  </Text>
                  <Text style={[styles.cardText, styles.cardTextBottom]}>
                    Francia
                  </Text>
                </CvCard>
                <CvCard
                  style={[
                    styles.cvCardItem,
                    { backgroundColor: Colors.light.surface2 },
                  ]}
                >
                  <Text style={styles.sectionText}>2020 - 2025</Text>
                  <Text style={styles.cardTitle}>
                    Artista di strada - spettacoli con fuoco
                  </Text>
                  <Text style={[styles.cardText, styles.cardTextBottom]}>
                    Attività itinerante per tutta Europa.
                  </Text>
                </CvCard>
              </View>
              <View style={styles.cardSection}>
                <CvCard
                  style={[
                    styles.cvCardItem,
                    { backgroundColor: Colors.light.surface2 },
                  ]}
                >
                  <Text style={styles.sectionText}>giugno - agosto 2025</Text>
                  <Text style={styles.cardTitle}>Montatore palchi</Text>
                  <Text style={[styles.cardText, styles.cardTextBottom]}>
                    Svizzera
                  </Text>
                </CvCard>
                <CvCard
                  style={[
                    styles.cvCardItem,
                    { backgroundColor: Colors.light.surface2 },
                  ]}
                >
                  <Text style={styles.sectionText}>Febbraio - Aprile 2023</Text>
                  <Text style={styles.cardTitle}>Montatore arredamenti</Text>
                  <Text style={[styles.cardText, styles.cardTextBottom]}>
                    Italia
                  </Text>
                </CvCard>
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
  imageContainer: {
    flex: 1,
    width: 280,
    maxWidth: 580,
  },
  rightContainer: {
    flex: 1,
    width: 780,
    maxWidth: 580,
    justifyContent: "flex-start",
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
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  abilitySection: {
    backgroundColor: Colors.light.surface,
  },
  aboutMeContainer: {
    width: "100%",
    backgroundColor: Colors.light.surface,
    paddingVertical: 48,
  },
  aboutMe: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    backgroundColor: Colors.light.surface,
    width: "100%",
    gap: 10,
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  formationContainer: {
    width: "100%",
    backgroundColor: Colors.light.surface2,
    paddingVertical: 48,
  },
  formation: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    backgroundColor: Colors.light.surface2,
    alignSelf: "center",
    width: "100%",
    justifyContent: "flex-start",
  },
  worksContainer: {
    width: "100%",
    backgroundColor: Colors.light.surface,
    paddingVertical: 48,
  },
  works: {
    maxWidth: Layout.contentMaxWidth,
    paddingHorizontal: Layout.contentPaddingHorizontal,
    backgroundColor: Colors.light.surface,
    width: "100%",
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  cardSection: {
    flexDirection: "row",
    gap: 14,
    paddingVertical: 15,
  },
  sectionText: {
    fontFamily: Fonts.mono,
    fontSize: 15,
    color: Colors.light.accent,
  },
  kickerText: {
    fontFamily: Fonts.mono,
    fontSize: 15,
    color: Colors.light.accent,
    paddingVertical: 25,
  },
  cvSectionTitle: {
    fontFamily: Fonts.heading,
    fontSize: 30,
  },
  cardTitle: {
    fontFamily: Fonts.heading,
    fontSize: 15,
    color: Colors.light.text,
    marginBottom: 14,
  },
  cardSubtitle: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 14,
    color: Colors.light.text,
  },
  cardText: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  cardTextBottom: {
    marginTop: "auto",
  },
  itemRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  cvCardItem: {
    flex: 1,
    minWidth: 220,
  },
});
