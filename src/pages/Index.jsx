import React from "react";
import { Box, Container, Heading, Text, VStack, Image, Button, Link, HStack, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon, FaPlus } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bgColor} color={color} minH="100vh">
      <Container maxW="container.md" pt={10}>
        <VStack spacing={4} as="header">
          <HStack justifyContent="space-between" w="full">
            <Heading as="h1" size="xl">
              Dhruvil Kathiriya
            </Heading>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="md" alignSelf="flex-start" onClick={toggleColorMode} aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} />
          </HStack>
          <Text as="h2" fontSize="lg" fontWeight="medium">
            Software Developer | Tech Enthusiast
          </Text>
          <Image borderRadius="full" boxSize="150px" src="https://placehold.co/600x400" alt="Dhruvil Kathiriya" />
        </VStack>

        <VStack spacing={8} as="main" py={10}>
          <Text fontSize="lg" textAlign="center">
            Hi! I'm Dhruvil Kathiriya, a passionate software developer with a love for building engaging and intuitive web applications. I specialize in modern web technologies and strive to create seamless user experiences.
          </Text>

          <HStack spacing={4}>
            <Link href="https://www.linkedin.com/in/dhruvilkathiriya" isExternal>
              <IconButton aria-label="LinkedIn Profile" icon={<FaLinkedin />} bg="blue.500" color="white" _hover={{ bg: "blue.600" }} />
            </Link>
            <Link href="https://github.com/dhruvilkathiriya" isExternal>
              <IconButton aria-label="GitHub Profile" icon={<FaGithub />} bg="gray.700" color="white" _hover={{ bg: "gray.600" }} />
            </Link>
            <Link href="mailto:dhruvil@example.com">
              <IconButton aria-label="Email" icon={<FaEnvelope />} bg="red.500" color="white" _hover={{ bg: "red.600" }} />
            </Link>
          </HStack>
        </VStack>

        <VStack as="footer" spacing={4} pt={10}>
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Dhruvil Kathiriya. All rights reserved.</Text>
          <Button rightIcon={<FaPlus />} colorScheme="blue" variant="solid">
            Download Resume
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
