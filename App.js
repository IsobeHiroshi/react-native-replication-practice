import React from "react";
import { NativeBaseProvider, Box, Flex, ScrollView, Text } from "native-base";

import CurrentPosition from "./components/CurrentPosition";
import SearchBar from "./components/SearchBar";
import ProfileImage from "./components/ProfileImage";
import ToggleSwitch from "./components/ToggleSwitch";
import Calendar from "./components/Calendar";
import CategoryItem from "./components/CategoryItem";
import TopRated from "./components/TopRated";


const imgSrc = require("./assets/hiroshi.jpg");

const App = ()=> {
  return (
    <NativeBaseProvider>
      {/* Wrapper */}
      <ScrollView
        py={10}
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
          mt={4}
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
            <CategoryItem categoryName="Indian" imgSrc={imgSrc} />
            <CategoryItem categoryName="Chinese" imgSrc={imgSrc} />
            <CategoryItem categoryName="Italian" imgSrc={imgSrc} />
            <CategoryItem categoryName="Mexican" imgSrc={imgSrc} />
            <CategoryItem categoryName="Japanese" imgSrc={imgSrc} />
            <CategoryItem categoryName="Spanish" imgSrc={imgSrc} />
          </ScrollView>
        </Flex>
        {/* Top Rated Section */}
        <Text mb={5} ml={5} fontSize={19}>
          Top Rated
        </Text>
        <Flex direction="row" mb={10}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TopRated
              imgSrc={imgSrc}
              firstName="Gordon"
              LastName="Ramsayiski"
              cuisine="Italian"
              location="California"
              minPeople="8"
              maxPeople="15"
              costPerPerson="5000"
            />
            <TopRated
              imgSrc={imgSrc}
              firstName="Jacob"
              LastName="Namhyung"
              cuisine="Korean"
              location="Vancouver"
              minPeople="2"
              maxPeople="98"
              costPerPerson="1200"
            />
            <TopRated
              imgSrc={imgSrc}
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
        <Text mb={5} ml={5} fontSize={19}>
          Nearby
        </Text>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default App;