import { Box, Button, Center, ChakraProvider } from "@chakra-ui/react";
import { login } from "../../services/login";

export const Botao = () => {
  return (
    <Center>
      <Button
        onClick={login}
        colorScheme="teal"
        size="sm"
        width="100%"
        marginTop="5px"
      >
        Button
      </Button>
    </Center>
  );
};
