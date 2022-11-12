import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  Text,
  HStack,
  Box,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <Box bg={useColorModeValue("blue.700", "gray.900")} px={4}>
        <Flex h={'10vh'} alignItems={"center"} justifyContent={"space-between"}>
          <Box mx={5}>
            <Text
              fontFamily={"Bebas Neue"}
              fontSize={[14, 20, 20, 24]}
              color={'white'}
            >
              Job Matcher
            </Text>
          </Box>
          <Flex alignItems={"center"}>
            <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
