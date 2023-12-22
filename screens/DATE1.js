import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import React, { useState } from 'react';

const DATE1 = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState();

  return (
    <View style={styles.date}>
      <Image
        style={styles.picIcon}
        contentFit="cover"
        source={require("../assets/pic.png")}
      />
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <View style={styles.dateChild} />
      <Pressable
        style={[styles.setButton, styles.setLayout]}
        onPress={() => navigation.navigate("TIME")}
      >
        <LinearGradient
          style={[styles.setButtonChild, styles.childBg]}
          locations={[0.28, 0.65, 1]}
          colors={["#3aa601", "#4fbe00", "#64e100"]}
        />
        <Text style={styles.confirm}>{`Confirm `}</Text>
      </Pressable>
      <View style={[styles.schedules, styles.schedulesLayout]}>
        <View style={styles.schedulesChild} />
          
            <Text style={styles.schedules1}>
              <Text style={styles.schedules2}>{`Schedules`}
            </Text>
        </Text>
      </View>
      <View style={[styles.about, styles.aboutLayout]}>
        <Text style={[styles.readMore]}>read more</Text>
        <Text style={[styles.about1, styles.aboutLayout]}>
          <Text style={styles.about2}>{`About
`}</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.obstetricianClr]}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`}</Text>
        </Text>
      </View>
      <Text style={styles.nameTitleContainer}>
        <Text style={styles.about2}>{`Jane Doe
`}</Text>
        <Text
          style={[styles.obstetrician, styles.obstetricianClr]}
        >{`Obstetrician
`}</Text>
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#BCF48F',
          },
        }}
      /></View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backPosition: {
    top: 32,
    position: "absolute",
  },
  back: {
    width: 37,
    height: 37,
    left: 25,
  },
  container: {
    top: 0,
    flex: 0,
    justifyContent: '',
    alignItems: '',
  },
  calendar: {
    right: 13,
    top: 145,
    width: 385, 
    height: 26, 
  },
  setLayout: {
    height: 42,
    width: 215,
    position: "absolute",
  },
  childBg: {
    backgroundColor: "transparent",
    top: 0,
  },
  monthLayout: {
    height: 21,
    position: "absolute",
  },
  schedulesLayout: {
    height: 432,
    width: 369,
  },
  aboutLayout: {
    width: 320,
    position: "absolute",
  },
  obstetricianClr: {
    color: Color.colorDimgray,
  },
  picIcon: {
    height: 300,
    width: 410,
    position: "absolute",
  },
  dateChild: {
    top: 235,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 10,
    elevation: 10,
    height: 620,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    width: 415,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  setButtonChild: {
    borderRadius: Border.br_mini,
    height: 38,
    width: 215,
    position: "absolute",
    left: 0,
  },
  confirm: {
    top: 7,
    left: 43,
    fontSize: FontSize.size_base,
    width: 128,
    textAlign: "center",
    color: Color.colorWhite,
  },
  setButton: {
    top: 810,
    left: 95,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  schedules2: {
    fontSize: FontSize.size_xl,
  },
  schedules1: {
    color: Color.colorBlack,
  },
  sun: {
    fontSize: FontSize.size_2xs,
  },
  text: {
    fontSize: FontSize.size_mini,
  },
  text2: {
    color: Color.colorRed,
  },
  text4: {
    color: Color.colorSilver,
  },
  sunMonTue: {
  },
  dayDateContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  dayDateContainer: {
    textAlign: "left",
    height: 432,
    width: 369,
    top: 0,
  },
  monthChild: {
    left: 1,
    borderRadius: Border.br_6xs,
    width: 74,
    backgroundColor: "transparent",
    top: 0,
  },
  fluentiosArrow24FilledIcon: {
    top: 8,
    left: 59,
    width: 7,
    height: 7,
    position: "absolute",
    overflow: "hidden",
  },
  month: {
    top: 50,
    left: 244,
    width: 76,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  schedules: {
    top: 415,
    left: 26,
    position: "absolute",
  },
  readMore: {
    top: 74,
    color: Color.colorGreen_100,
    width: 109,
    height: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  about2: {
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
  },
  about1: {
    height: 68,
    textAlign: "left",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  about: {
    top: 315,
    height: 88,
    left: 26,
  },
  obstetrician: {
    fontSize: FontSize.size_sm,
  },
  nameTitleContainer: {
    top: 253,
    width: 145,
    height: 55,
    textAlign: "left",
    left: 26,
    position: "absolute",
  },
  date: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default DATE1;
