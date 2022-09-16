import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import googlePlayBtn from "../../public/googleplay.png";
import appStoreBtn from "../../public/appstore.png";

type Props = {};

const HeroText = (props: Props) => {
  return (
    <Flex
      direction="column"
      width={{ base: "full", md: "35%" }}
      py={{ base: 4, md: "unset" }}
    >
      <Text
        textTransform="uppercase"
        fontWeight={600}
        mb={6}
        color="text.white"
      >
        Coming Soon!
      </Text>
      <Heading size="2xl" mb={8} color="brand.blue">
        Share your daily lifestyle activities
      </Heading>
      <Text fontSize={14} mb={6} color="text.grey">
        Flashback is one of the world&apos;s best platforms to share your
        memories
      </Text>

      <HStack>
        <Image src={googlePlayBtn} alt="GooglePlayStore" objectFit="contain" />
        <Box width={2} />
        <Image src={appStoreBtn} alt="GooglePlayStore" objectFit="contain" />
      </HStack>
    </Flex>
  );
};

export default HeroText;
