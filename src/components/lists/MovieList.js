import { FlatList } from "native-base";
import Card from "../card/Card";

const getReleaseDate = item => {
  return item.release_date || item.first_air_date || "N/A";
};

const MoveList = ({ navigation, records, mediaType }) => {
  return (
    <FlatList
      data={records}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          posterPath={item.backdrop_path}
          title={item.title || item.name || "N/A"}
          popularity={item.popularity || "N/A"}
          releaseDate={getReleaseDate(item)}
          uri={item.uri}
          navigation={navigation}
          id={item.id}
          mediaType={item.media_type || mediaType || "N/A"}
        />
      )}
    />
  );
};

export default MoveList;
