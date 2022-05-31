import { Icon, Text, Flex } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useFonts } from 'expo-font'

const CurrentPosition = () => {
  const [loaded] = useFonts({
    Gilroy: require("../assets/Gilroy-Light.otf"),
    GilroyBold: require("../assets/Gilroy-ExtraBold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Flex direction="row" justify="start" align="center" ml={5}>
      <Icon as={Feather} color="#FF8D78" name="map-pin" mr={2}></Icon>
      <Text fontFamily="Gilroy">Mumbai, Maharashtr</Text>
    </Flex>
  );
};

export default CurrentPosition;
