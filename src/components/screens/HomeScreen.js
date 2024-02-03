import { useState } from "react";
import { VStack } from "native-base";
import SelectType from "../form/SelectType";
import MovieContainer from "../containers/MovieContainer";
import { useGetListType } from "../../hooks/useGetListType";
import PropTypes from "prop-types";
import {
  tvOptionsConstants,
  movieOptionsConstants
} from "../../constants/Constants";

const HomeScreen = ({ navigation }) => {
  const [selectedListType, setSelectedListType] = useState("popular");

  const { isLoading, records } = useGetListType("movie", selectedListType);

  const handleListTypeChange = listType => {
    setSelectedListType(listType);
  };

  return (
    <VStack space={3} alignSelf="center">
      <SelectType
        options={movieOptionsConstants}
        onSelectChange={handleListTypeChange}
        selectedOption={selectedListType}
      />
      <MovieContainer
        records={records}
        navigation={navigation}
        mediaType="movie"
      />
    </VStack>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
