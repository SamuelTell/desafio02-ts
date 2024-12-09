import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { Botao } from "./botao/botao";
import { Header } from "./Header/Header";

interface ICard {
  id: number;
  paragraph: string;
  details: string;
}

export const Card = () => {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Botao />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
