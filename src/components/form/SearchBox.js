import { useState } from "react";
import {
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  Box,
  VStack,
  Select,
  CheckIcon,
  Icon
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBox = props => {
  const {
    query,
    onSelectChange,
    onChangeInput,
    onSubmit,
    selectedOption
  } = props;
  const [service, setService] = useState(selectedOption);
  const [inputError, setInputError] = useState(false);

  const handleSearch = () => {
    if (!query) {
      setInputError(true);
    }
    if (query && service) {
      onSubmit();
    }
  };

  return (
    <Center>
      <VStack mx="3" mt={5}>
        <FormControl isRequired isInvalid={inputError}>
          <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
          <Input
            InputLeftElement={
              <Icon
                size={5}
                ml={2}
                color="gray.400"
                as={<Ionicons name={"ios-search"} />}
              />
            }
            placeholder="i.e. James Bond, CSI"
            onChangeText={value => onChangeInput(value)}
            value={query}
          />
          <HStack>
            <Box>
              <FormControl.Label>Choose Search Type</FormControl.Label>
              <Select
                selectedValue={service}
                minWidth="180"
                marginRight="4"
                accessibilityLabel="Choose Service"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" color="white" />
                }}
                mt={1}
                onValueChange={value => {
                  setService(value);
                  onSelectChange(value);
                }}
              >
                <Select.Item label="Movie" value="movie" />
                <Select.Item label="Multi" value="multi" />
                <Select.Item label="TV" value="tv" />
              </Select>
              {inputError ? (
                <FormControl.ErrorMessage>
                  Movie/TV show name is required
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText
                  _text={{
                    fontSize: "xs"
                  }}
                >
                  Please select a search type
                </FormControl.HelperText>
              )}
            </Box>
            <Box margin="auto">
              <Button
                size="sm"
                bgColor={"#06B6D4"}
                leftIcon={
                  <Icon
                    size={5}
                    ml={2}
                    color="white"
                    as={<Ionicons name={"ios-search"} />}
                  />
                }
                onPress={handleSearch}
              >
                Search
              </Button>
            </Box>
          </HStack>
        </FormControl>
      </VStack>
    </Center>
  );
};

export default SearchBox;
