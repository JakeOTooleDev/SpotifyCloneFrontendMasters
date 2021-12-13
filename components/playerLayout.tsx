import { Box } from "@chakra-ui/layout";

const PlayerLayout = ({ children }) => (
  <Box width="100vw" height="100vh">
    <Box
      position="absolute"
      width="250px"
      top="0"
      left="0"
      border="1px solid black"
    >
      Sidebar
    </Box>
    <Box marginLeft="250px" marginBottom="100px">
      {children}
    </Box>
    <Box postion="absolute" bottom="0" left="0" border="1px solid black">
      Player
    </Box>
  </Box>
);
export default PlayerLayout;
