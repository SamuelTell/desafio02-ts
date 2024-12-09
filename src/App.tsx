import { Center, ChakraProvider, Input, Box, Button } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { login } from "./services/login";
import { Botao } from "./components/botao/botao";
import { Card } from "./components/Card";

function App() {
  return <Card id={0} paragraph={""} details={""} />;
}

export default App;
