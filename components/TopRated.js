import {Text, Image, Flex, Center, Box, Icon} from 'native-base'
import { MaterialCommunityIcons, Feather, SimpleLineIcons } from "@expo/vector-icons";

const TopRated = (props) => {
    return (
      /* If the width of the parent element is configured with %, the layout will be collapse */
      <Flex
        width="300"
        height="200"
        p={4}
        rounded={20}
        borderWidth={1}
        borderColor="#A6BDD5"
        direction="row"
        mr={5}
        left={5}
        position="relative"
      >
        <Box width="45%" mr={3}>
          <Image
            alt="chef picture"
            source={props.imgSrc}
            height="70%"
            width="100%"
            roundedTop={20}
          />
          <Center
            width="100%"
            height="25%"
            bg="#FAB6A9"
            mt={2}
            roundedBottom={20}
          >
            <Text fontWeight="bold">Book Now</Text>
          </Center>
        </Box>
        <Flex
          position="absolute"
          bg="#fff"
          right={3}
          top={3}
          width={6}
          height={6}
          rounded={7}
          justify="center"
        >
          <Center>
            <Icon as={Feather} name="bookmark" size={4} color="black"></Icon>
          </Center>
        </Flex>
        <Flex justify="space-between">
          <Box>
            <Text fontWeight="bold">{props.firstName}</Text>
            <Text fontWeight="bold">{props.LastName}</Text>
          </Box>
          <Flex direction="row" align="center" mb={1}>
            <Icon
              as={MaterialCommunityIcons}
              name="fire-circle"
              color="pink.300"
              mr={2}
              size={4}
            ></Icon>
            <Text fontSize={13}>{props.cuisine}</Text>
          </Flex>
          <Flex direction="row" mb={1}>
            <Icon
              as={Feather}
              color="#4E7CAC"
              name="map-pin"
              mr={2}
              size={4}
            ></Icon>
            <Text fontSize={13}>{props.location}</Text>
          </Flex>
          <Flex direction="row" mb={1}>
            <Icon
              as={SimpleLineIcons}
              name="user"
              size={4}
              color="#303030"
              mr={2}
            ></Icon>
            <Text fontSize={13}>
              Min-{props.minPeople}, Max-{props.maxPeople}
            </Text>
          </Flex>
          <Flex direction="row">
            <Icon
              as={Feather}
              name="dollar-sign"
              color="#303030"
              size={4}
              mr={2}
            ></Icon>
            <Text fontSize={13}>${props.costPerPerson}/person</Text>
          </Flex>
        </Flex>
      </Flex>
    );
}

export default TopRated;