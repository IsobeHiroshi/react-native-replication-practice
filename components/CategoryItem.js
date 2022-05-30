import {Center,Flex, Text, Image} from 'native-base'

const CategoryItem = (props) => {
    return (
      <Flex width="100" height="100" align="center" mt={6} left={2}>
        <Image
          source={props.imgSrc}
          alt="category image"
          width="75%"
          height="75%"
          rounded="50"
        ></Image>
        <Center>
          <Text mt={2}>{props.categoryName}</Text>
        </Center>
      </Flex>
    );
}

export default CategoryItem;