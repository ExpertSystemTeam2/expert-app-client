import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Box h={"100vh"} border={"solid"}>
        <Navbar />
      </Box>
    </>
  );
}

export default App;
