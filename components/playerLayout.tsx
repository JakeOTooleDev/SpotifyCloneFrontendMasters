import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => (
  <Box width="100vw" height="100vh">
    <Box position="absolute" width="250px" top="0" left="0">
      <Sidebar />
    </Box>
    <Box marginLeft="250px" marginBottom="100px">
      {children}
    </Box>
    <Box postion="absolute" bottom="0" left="0">
      Player
    </Box>
  </Box>
);
export default PlayerLayout;
