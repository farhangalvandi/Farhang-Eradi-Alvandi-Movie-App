import { useState } from "react";
import { VStack } from "native-base";
import SelectType from "../form/SelectType";
import MovieContainer from "../containers/MovieContainer";
import { useGetListType } from "../../hooks/useGetListType";
import PropTypes from "prop-types";
import { tvOptionsConstants } from "../../constants/Constants";

const TvScreen = ({ navigation }) => {
  const [selectedListType, setSelectedListType] = useState("airing_today");

  const { isLoading, records } = useGetListType("tv", selectedListType);

  const handleListTypeChange = listType => {
    setSelectedListType(listType);
  };

  return (
    <VStack space={3} alignSelf="center">
      <SelectType
        options={tvOptionsConstants}
        onSelectChange={handleListTypeChange}
        selectedOption={selectedListType}
      />
      <MovieContainer
        records={records}
        navigation={navigation}
        mediaType="tv"
      />
    </VStack>
  );
};

TvScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default TvScreen;
