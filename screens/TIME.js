import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Pressable, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color } from "../GlobalStyles";

const TIME = () => {
  const navigation = useNavigation();
  const [selectedSlot, setSelectedSlot] = useState(0);
  return (
    <View style={styles.time}>
      <View style={styles.pic}>
        <View style={styles.picChild} />
        <Image
          style={[styles.image8Icon, styles.backPosition]}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
      </View>
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("DATE1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <View style={styles.timeChild} />
      <Pressable
        style={[styles.setButton, styles.setLayout]}
        onPress={() => navigation.navigate("SUMMARY")}
      >
        <LinearGradient
          style={[styles.setButtonChild, styles.setLayout]}
          locations={[0.28, 0.65, 1]}
          colors={["#3aa601", "#4fbe00", "#64e100"]}
        />
        <Text style={styles.confirm}>{`Confirm `}</Text>
      </Pressable>
      <View style={styles.time1}>
        <FlatList
          numColumns={2}
          data={[
            '10:00-12:00', 
            '12:00-14:00', 
            '14:00-16:00', 
            '16:00-18:00', 
          ]}
          renderItem={({item, index }) => {
            return (
              <TouchableOpacity 
                style={[
                  styles.timeSlot,
                  {borderColor: selectedSlot == index ? 'green' : 'black'},
                ]}
                onPress={() => {
                  setSelectedSlot(index);
                }}>
                <Text style={{color: selectedSlot == index ? 'green' : 'black'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={[styles.about, styles.aboutLayout1]}>
        <Text style={[styles.about1, styles.aboutClr]}>{`Choose Your Time

`}</Text>
      </View>
      <View style={[styles.about2, styles.aboutLayout]}>
        <Text style={styles.readMore}>read more</Text>
        <Text style={[styles.about3, styles.aboutLayout]}>
          <Text style={[styles.about4, styles.aboutClr]}>{`About
`}</Text>
          <Text
            style={[styles.loremIpsumDolor, styles.obstetricianClr]}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`}</Text>
        </Text>
      </View>
      <Text style={styles.nameTitleContainer}>
        <Text style={[styles.about4, styles.aboutClr]}>{`Jane Doe
`}</Text>
        <Text
          style={[styles.obstetrician, styles.obstetricianClr]}
        >{`Obstetrician
`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeSlot:{
    right: 10,
    bottom: 10,
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1.2,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backPosition: {
    top: 32,
    position: "absolute",
  },
  setLayout: {
    height: 40,
    width: 216,
    position: "absolute",
  },
  aboutLayout1: {
    height: 24,
    width: 178,
    position: "absolute",
  },
  aboutClr: {
    color: Color.colorBlack,
  },
  aboutLayout: {
    width: 320,
    position: "absolute",
  },
  obstetricianClr: {
    color: Color.colorDimgray,
  },
  picChild: {
    backgroundColor: Color.colorPalegreen,
    left: 0,
    height: 265,
    width: 420,
    top: 0,
    position: "absolute",
  },
  image8Icon: {
    left: 101,
    width: 202,
    height: 201,
  },
  pic: {
    left: 1,
    height: 265,
    width: 376,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    width: 37,
    height: 37,
    left: 25,
  },
  timeChild: {
    top: 233,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 10,
    elevation: 10,
    width: 420,
    height: 635,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  setButtonChild: {
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  confirm: {
    top: 7,
    left: 45,
    fontSize: 18,
    color: Color.colorWhite,
    width: 129,
    height: 20,
    textAlign: "center",
    position: "absolute",
  },
  setButton: {
    top: 770,
    left: 95,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 40,
    width: 216,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  time1: {
    top: 494,
    width: 319,
    height: 147,
    left: 25,
    position: "absolute",
  },
  about1: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    height: 24,
    width: 178,
    position: "absolute",
    left: 0,
    top: 0,
  },
  about: {
    top: 447,
    left: 25,
  },
  readMore: {
    top: 74,
    color: Color.colorGreen_100,
    width: 109,
    height: 14,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  about4: {
    fontSize: FontSize.size_3xl,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray,
  },
  about3: {
    height: 68,
    textAlign: "left",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  about2: {
    top: 325,
    height: 88,
    left: 25,
  },
  obstetrician: {
    fontSize: FontSize.size_sm,
  },
  nameTitleContainer: {
    top: 258,
    left: 26,
    width: 145,
    height: 55,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TIME;
