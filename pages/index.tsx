import { Flex, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/LandingPage/Header";
import HeroImage from "../components/LandingPage/HeroImage";
import HeroText from "../components/LandingPage/HeroText";

const Home: NextPage = () => {
  return (
    <Flex
      bg="bg.dark"
      height="100vh"
      overflow="hidden"
      py={10}
      px={{ base: 4, md: 16 }}
      direction="column"
    >
      <Header />
      {/* Hero */}
      <Flex
        flexGrow={1}
        direction={{ base: "column-reverse", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
      >
        {/* hero text*/}
        <HeroText />
        {/* images */}
        <HeroImage />
      </Flex>
    </Flex>
  );
};

export default Home;
