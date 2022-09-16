import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import bgShape from "../../public/images/bg-shape.png";
import bgCamera from "../../public/images/camera.png";
import bgPost from "../../public/images/post.png";

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <Flex overflow="hidden" height="full">
      <Box
        position="absolute"
        left={{ base: 32, md: 700 }}
        right={{ base: 2 }}
        top={{ base: 32, md: 130 }}
        zIndex={1}
      >
        <Image
          src={bgPost}
          alt="mobile"
          width={676}
          height={500}
          objectFit="cover"
        />
      </Box>
      <Box
        position="absolute"
        left={{ base: 8, md: 550 }}
        right={{ base: 32 }}
        top={{ base: 24, md: 200 }}
        zIndex={2}
      >
        <Image
          src={bgCamera}
          alt="mobile"
          width={676}
          height={530}
          objectFit="cover"
        />
      </Box>
      <Box
        position="absolute"
        right={580}
        bottom={1}
        display={{ base: "none", md: "inherit" }}
      >
        <Image
          src={bgShape}
          alt="bg-shape"
          width={160}
          height={140}
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default HeroImage;
