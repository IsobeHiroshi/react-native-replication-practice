import { Icon, Text, Flex } from "native-base";
import { Feather } from "@expo/vector-icons";

const CurrentPosition = () => {
  return (
    <Flex direction="row" justify="start" align="center" ml={5}>
      <Icon as={Feather} color="pink.300" name="map-pin" mr={2}></Icon>
      <Text>Mumbai, Maharashtr</Text>
    </Flex>
  );
};

export default CurrentPosition;
