import { useState } from "react";
import { Center, Heading, VStack } from "native-base";
import SearchBox from "../form/SearchBox";
import MovieContainer from "../containers/MovieContainer";
import { useGetSearch } from "../../hooks/useGetSearch";
import PropTypes from 'prop-types';

const SearchScreen = ({ navigation }) => {
  const [selectedMediaType, setSelectedMediaType] = useState("multi");
  const [query, setQuery] = useState("");

  const { handleSearch, isLoading, records } = useGetSearch({
    mediaType: selectedMediaType,
    query
  });

  const handleMediaTypeChange = (mediaType) => {
    setSelectedMediaType(mediaType);
  };

  const handleInputChange = (input) => {
    setQuery(input);
  };

  return (
    <VStack space={3} alignSelf="center">
      <SearchBox
        query={query}
        onSelectChange={handleMediaTypeChange}
        onChangeInput={handleInputChange}
        onSubmit={handleSearch}
        selectedOption={selectedMediaType}
      />
      {records ? (
        <MovieContainer records={records} navigation={navigation} />
      ) : (
        <Center px={4} py={40}>
          <Heading size="md">Please initiate a search</Heading>
        </Center>
      )}
    </VStack>
  );
};

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SearchScreen;