import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <Box h={"100vh"}>
        <Navbar />
        <Main />
      </Box>
    </>
  );
}

export default App;
