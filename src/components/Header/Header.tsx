import { Box, Center, ChakraProvider } from "@chakra-ui/react";
import "./Header.css";

export const Header = () => {
  return (
    <ChakraProvider>
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h2>Dio Bank</h2>
        </Center>
      </Box>
    </ChakraProvider>
  );
};
