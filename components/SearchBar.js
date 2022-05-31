import {Flex, Icon, Input} from "native-base";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const SearchBar = () => {

    const [loaded] = useFonts({
      Gilroy: require("../assets/Gilroy-Light.otf"),
    });

    if (!loaded) {
      return null;
    }
    return (
      <Flex
        bg="#fff"
        height="12"
        width="90%"
        rounded="12"
        alignItems="center"
        direction="row"
        mx={5}
      >
        <Icon as={FontAwesome} name="search" size={5} ml={3} />
        <Input
          variant="unstyled"
          width="80%"
          placeholder="Search your favorite chef..."
          fontFamily="Gilroy"
        />
        <Icon
          as={MaterialCommunityIcons}
          name="microphone-outline"
          size={6}
        ></Icon>
      </Flex>
    );
}

export default SearchBar;