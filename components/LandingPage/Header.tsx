import { Button, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Flex justify="space-between" align="center" width="full" mb={10}>
      {/* logo */}
      <HStack cursor="pointer" align="center">
        <Image src="/infinity.svg" alt="logo" width={68} height={32} />
        <Text
          display={{ base: "none", md: "inline-flex" }}
          fontWeight={600}
          color="text.white"
          fontSize={14}
        >
          Flashback
        </Text>
      </HStack>
      {/* nav links with button */}
      <HStack spacing={10} align="center">
        <Button variant="link" display={{ base: "none", md: "inline-flex" }}>
          Home
        </Button>
        <Button variant="link" display={{ base: "none", md: "inline-flex" }}>
          Features
        </Button>
        <Button
          bg="brand.blue"
          color="text.white"
          _hover={{ bg: "brand.blue" }}
        >
          Get Started
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;
