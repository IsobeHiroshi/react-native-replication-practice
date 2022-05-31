import React from "react";
import { NativeBaseProvider, Center, Flex, ScrollView, Text } from "native-base";
import { useFonts } from "expo-font";

import CurrentPosition from "./components/CurrentPosition";
import SearchBar from "./components/SearchBar";
import ProfileImage from "./components/ProfileImage";
import ToggleSwitch from "./components/ToggleSwitch";
import Calendar from "./components/Calendar";
import CategoryItem from "./components/CategoryItem";
import TopRated from "./components/TopRated";
import Nearby from "./components/Nearby";


const imgSrc = require("./assets/hiroshi.jpg");
const simerImg = require("./assets/simer.jpg")
const jacobImg = require("./assets/jacob.jpg");
const wingImg = require("./assets/wing.jpg");
const kevalImg = require("./assets/keval.jpg");
const anastasiaImg = require("./assets/anastasia.jpg");
const minteImg = require("./assets/minte.jpg");

const indianImg = require("./assets/indian.jpg");
const russiaImg = require("./assets/russia.jpg");
const nigeriaImg = require("./assets/nigeria.jpg");
const koreaImg = require("./assets/korea.jpg");
const vietnamImg = require("./assets/vietnam.jpg");

const App = ()=> {
  const [loaded] = useFonts({
    Gilroy: require("./assets/Gilroy-Light.otf"),
    GilroyBold: require("./assets/Gilroy-ExtraBold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      {/* Wrapper */}
      <ScrollView
        pt={5}
        bg="#EAEEF2"
        position="absolute"
        left="0"
        right="0"
        top="0"
        bottom="0"
      >
        {/* Header */}
        <Flex
          direction="row"
          justify="space-between"
          alignItems="center"
          mt={10}
          mb={3}
        >
          <CurrentPosition />
          <ProfileImage imgSrc={imgSrc} />
        </Flex>
        <SearchBar />
        {/* Toggle switch section */}
        <Flex direction="row" justify="space-between" align="center" mx={5}>
          <Flex direction="row" width="65%">
            <ToggleSwitch category="Veg" />
            <ToggleSwitch category="Non-Veg" />
          </Flex>
          <Calendar />
        </Flex>
        {/* Category section */}
        <Flex direction="row" mb={10}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CategoryItem categoryName="Indian" imgSrc={indianImg} />
            <CategoryItem categoryName="Russian" imgSrc={russiaImg} />
            <CategoryItem categoryName="Nigerian" imgSrc={nigeriaImg} />
            <CategoryItem categoryName="Vietnamese" imgSrc={vietnamImg} />
            <CategoryItem categoryName="Korean" imgSrc={koreaImg} />
          </ScrollView>
        </Flex>
        {/* Top Rated Section */}
        <Text mb={5} ml={5} fontSize={19} fontFamily="Gilroy">
          Top Rated
        </Text>
        <Flex direction="row" mb={10}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TopRated
              imgSrc={anastasiaImg}
              firstName="Anastasia"
              LastName="Snegur"
              cuisine="Russian"
              location="Vancouver"
              minPeople="2"
              maxPeople="40"
              costPerPerson="2500"
            />
            <TopRated
              imgSrc={minteImg}
              firstName="Minte"
              LastName="Temple"
              cuisine="Nigerian"
              location="Vancouver"
              minPeople="4"
              maxPeople="150"
              costPerPerson="9000"
            />
            <TopRated
              imgSrc={wingImg}
              firstName="Nguyen"
              LastName="Bui"
              cuisine="Vietnamese"
              location="Vancouver"
              minPeople="8"
              maxPeople="15"
              costPerPerson="5000"
            />
            <TopRated
              imgSrc={jacobImg}
              firstName="Jacob"
              LastName="Namhyung"
              cuisine="Korean"
              location="Vancouver"
              minPeople="2"
              maxPeople="98"
              costPerPerson="1200"
            />
            <TopRated
              imgSrc={simerImg}
              firstName="Simer"
              LastName="Singh"
              cuisine="Indian"
              location="Vancouver"
              minPeople="10"
              maxPeople="230"
              costPerPerson="90"
            />
          </ScrollView>
        </Flex>
        <Text mb={5} ml={5} fontSize={19} fontFamily="Gilroy">
          Nearby
        </Text>
        <Center>
          <Nearby
            imgSrc={kevalImg}
            firstName="Keval"
            LastName="Mehta"
            cuisine="Indian"
            location="Vancouver"
            minPeople="10"
            maxPeople="230"
            costPerPerson="90"
          />
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default App;