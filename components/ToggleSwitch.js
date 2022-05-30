import { Switch, Flex, Text }from 'native-base'

const ToggleSwitch = (props)=> {
    return (
      <Flex direction='row' alignItems="center" height="10" width="40%" mt={4}>
        <Switch
          size="sm"
          offTrackColor="#fff"
          onTrackColor="#fff"
          onThumbColor="#FF8D78"
          offThumbColor="#A6BDD5"
        />
        <Text ml={1} fontSize={11}>{props.category}</Text>
      </Flex>
    );
}

export default ToggleSwitch;