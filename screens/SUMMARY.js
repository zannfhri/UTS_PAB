import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SUMMARY = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.summary}>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("TIME")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
      </Pressable>
      <View style={[styles.setButton, styles.setLayout]}>
        <LinearGradient
          style={[styles.setButtonChild, styles.setLayout]}
          locations={[0.28, 0.65, 1]}
          colors={["#3aa601", "#4fbe00", "#64e100"]}
        />
        <Text style={styles.setAppointment}>Set Appointment</Text>
      </View>
      <Text
        style={[styles.nameTitle, styles.nameTitleFlexBox]}
      >{`Appointment Summary
`}</Text>
      <View style={[styles.summaryChild, styles.summaryShadowBox]} />
      <View style={[styles.summaryItem, styles.summaryShadowBox]} />
      <View style={[styles.summaryInner, styles.summaryShadowBox]} />
      <Text style={[styles.janeDoe, styles.amTypo]}>Jane Doe</Text>
      <Text style={[styles.october18, styles.amTypo]}>October 18</Text>
      <Text style={[styles.am, styles.amTypo]}>09:00 AM</Text>
      <Text style={[styles.doctor, styles.dateTypo]}>DOCTOR</Text>
      <Text style={[styles.date, styles.dateTypo]}>DATE</Text>
      <Text style={[styles.time, styles.timeTypo]}>TIME</Text>
      <Text style={[styles.appointmentId, styles.dateTypo]}>
        APPOINTMENT ID
      </Text>
      <Text style={[styles.info, styles.timeTypo]}>INFO</Text>
      <Text style={[styles.app101010, styles.app101010Typo]}>App#101010</Text>
      <Text style={[styles.qwerty121314, styles.app101010Typo]}>
        QWERTY121314
      </Text>
      <Text style={[styles.patientDetails, styles.dateTypo]}>{`PATIENT DETAILS
`}</Text>
      <Text style={styles.annisaNurSalsabilla}>{`Annisa Nur Salsabilla
89, Wonokromo, Surabaya, Indonesia
+6282142156332`}</Text>
      <Text style={[styles.makeSureThese, styles.nameTitleFlexBox]}>
        Make sure these details are already correct before you set an
        appointment
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  setLayout: {
    height: 42,
    width: 215,
    position: "absolute",
  },
  nameTitleFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  summaryShadowBox: {
    width: 310,
    elevation: 17,
    shadowRadius: 17,
    borderRadius: Border.br_3xs,
    left: 45,
    shadowOpacity: 2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "black",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  amTypo: {
    letterSpacing: -0.7,
    top: 616,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  dateTypo: {
    color: Color.colorGray,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  timeTypo: {
    width: 43,
    color: Color.colorGray,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  app101010Typo: {
    top: 317,
    height: 17,
    letterSpacing: -0.7,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    left: 30,
    top: 37,
    width: 36,
    height: 39,
    position: "absolute",
  },
  setButtonChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
  },
  setAppointment: {
    top: 9,
    left: 44.3,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
    width: 128,
    height: 21,
    position: "absolute",
  },
  setButton: {
    top: 730,
    left: 100,
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 42,
    width: 215,
  },
  nameTitle: {
    top: 109,
    fontSize: 30,
    width: 232,
    height: 77,
    left: 45,
    textAlign: "left",
    color: Color.colorBlack,
  },
  summaryChild: {
    top: 259,
    height: 97,
  },
  summaryItem: {
    top: 556,
    height: 100,
  },
  summaryInner: {
    top: 388,
    height: 136,
  },
  janeDoe: {
    width: 64,
    height: 18,
    left: 65,
  },
  october18: {
    width: 72,
    height: 17,
    left: 170,
  },
  am: {
    width: 74,
    left: 265,
    height: 17,
  },
  doctor: {
    width: 65,
    top: 574,
    height: 17,
    left: 65,
  },
  date: {
    width: 42,
    top: 574,
    height: 17,
    left: 170,
  },
  time: {
    top: 574,
    height: 17,
    left: 265,
  },
  appointmentId: {
    top: 277,
    width: 139,
    left: 195,
    height: 18,
  },
  info: {
    top: 276,
    left: 65,
    height: 18,
  },
  app101010: {
    width: 102,
    left: 65,
  },
  qwerty121314: {
    width: 124,
    left: 195,
  },
  patientDetails: {
    top: 406,
    width: 141,
    left: 65,
    height: 17,
  },
  annisaNurSalsabilla: {
    top: 447,
    width: 289,
    height: 68,
    left: 65,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  makeSureThese: {
    top: 191,
    left: 46,
    fontSize: FontSize.size_mini,
    width: 305,
    height: 34,
  },
  summary: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SUMMARY;
