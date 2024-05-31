import { Box, Container, Flex, Heading, Input, VStack, Text, HStack, Spacer } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} align="center">
        <Heading size="md">Carpet Price Aggregator</Heading>
      </Flex>

      {/* Search Bar */}
      <Box bg="gray.100" p={4}>
        <Input
          placeholder="Search for carpet types or brands..."
          value={searchTerm}
          onChange={handleSearchChange}
          size="lg"
        />
      </Box>

      {/* Main Section */}
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="xl">Displaying results for: {searchTerm}</Text>
          {/* Placeholder for carpet prices list */}
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Text>No results found.</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Flex as="footer" bg="blue.600" color="white" p={4} mt={4} align="center">
        <Text>Contact us at: info@carpetaggregator.com</Text>
        <Spacer />
        <Text>&copy; 2023 Carpet Price Aggregator</Text>
      </Flex>
    </Container>
  );
};

export default Index;