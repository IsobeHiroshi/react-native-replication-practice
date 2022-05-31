import {Center,Flex, Text, Image} from 'native-base'
import { useFonts } from "expo-font";

const CategoryItem = (props) => {

  const [loaded] = useFonts({
    Gilroy: require("../assets/Gilroy-Light.otf"),
    });
    return (
      <Flex width="100" height="100" align="center" mt={6} left={2}>
        <Image
          source={props.imgSrc}
          alt="category image"
          width="70%"
          height="70%"
          rounded="50"
        ></Image>
        <Center>
          <Text mt={3} fontFamily="Gilroy">
            {props.categoryName}
          </Text>
        </Center>
      </Flex>
    );
}

export default CategoryItem;