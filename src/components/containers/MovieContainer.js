import { useEffect, useState } from "react"
import { Button, Container, ScrollView } from "native-base";
import MoveList from "../lists/MovieList";
import React from "react";

const MovieContainer = ({ navigation, records, mediaType }) => {
  const [passingData, setPassingData] = useState([]);

  useEffect(() => {
    if (records) {
      const initialData = records;
      setPassingData(initialData);
    }
  }, [records]);

  return (
    <Container maxWidth="100%" style={{ flex: 1 }}>
      <MoveList
        navigation={navigation}
        records={passingData.length > 0 ? passingData : records}
        mediaType={mediaType}
      />
    </Container>
  );
};

export default MovieContainer;
