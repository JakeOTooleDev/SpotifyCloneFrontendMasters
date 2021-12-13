import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryAdd,
  MdFavorite,
  MdPlaylistAdd,
  MdLibraryMusic,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => (
  <Box
    width="100%"
    height="calc(100vh - 100px)"
    bg="black"
    paddingX="5px"
    color="gray"
  >
    <Box paddingY="20px" height="100%">
      <Box width="120px" marginBottom="20px" paddingX="20px">
        <NextImage src="/logo.svg" height={60} width={120} />
      </Box>
      <Box marginBottom="20px">
        <List spacing={2}>
          {navMenu.map((menuItem) => (
            <ListItem paddingX="20px" fontSize="16px" key={menuItem.name}>
              <LinkBox>
                <NextLink href={menuItem.route} passHref>
                  <LinkOverlay>
                    <ListIcon
                      as={menuItem.icon}
                      color="white"
                      marginRight="20px"
                    />
                    {menuItem.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginTop="20px">
        <List spacing={2}>
          {musicMenu.map((musicItem) => (
            <ListItem paddingX="20px" fontSize="16px" key={musicItem.name}>
              <LinkBox>
                <NextLink href={musicItem.route} passHref>
                  <LinkOverlay>
                    <ListIcon
                      as={musicItem.icon}
                      color="white"
                      marginRight="20px"
                    />
                    {musicItem.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider color="gray.800" />
      <Box height="66%" overflowY="auto" paddingY="20px">
        <List spacing={2}>
          {playlists.map((playlist) => (
            <LinkBox>
              <NextLink href="/" passHref>
                <LinkOverlay>{playlist}</LinkOverlay>
              </NextLink>
            </LinkBox>
          ))}
        </List>
      </Box>
    </Box>
  </Box>
);

export default Sidebar;
