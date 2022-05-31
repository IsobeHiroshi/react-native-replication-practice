import {Flex, Text, Icon, Box} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Calendar = () => {

  const [loaded] = useFonts({
    Gilroy: require("../assets/Gilroy-Light.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Flex direction="row" align="center" width="35%" justify="flex-end" mt={2}>
      <Text fontSize={11} fontFamily="GilroyBold" color="#4E7CAC">
        12 April 2022
      </Text>
      <Flex
        width={8}
        height={8}
        bg="#fff"
        align="center"
        justify="center"
        rounded="7"
        ml={2}
      >
        <Icon as={AntDesign} name="calendar" size={5}></Icon>
      </Flex>
    </Flex>
  );
}

export default Calendar;