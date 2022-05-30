import {Flex, Text, Icon, Box} from "native-base";
import { AntDesign } from "@expo/vector-icons";

const Calendar = () => {
    return (
      <Flex
        direction="row"
        align="center"
        width="35%"
        justify="flex-end"
        mt={2}
      >
        <Text fontWeight="bold" fontSize={11}>
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