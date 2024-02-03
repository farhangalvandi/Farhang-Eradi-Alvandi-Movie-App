import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box, Heading, Text, Image, Button, HStack } from "native-base";

const Card = ({
  posterPath,
  title,
  popularity,
  releaseDate,
  id,
  navigation,
  mediaType
}) => {
  const handleImageClick = () => {
    navigation.navigate("Detail", {
      id: id,
      mediaType: mediaType,
      title: title
    });
  };

  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
  const formattedReleaseDate = releaseDate || "-";
  const formattedPopularity = popularity || "-";

  return (
    <Box style={styles.container}>
      <HStack space={4}>
        <Box style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImageClick}>
            <Image
              alt={title.length > 17 ? `${title.slice(0, 17)}...` : title}
              source={{ uri: imageUrl }}
              size="xl"
            />
          </TouchableOpacity>
        </Box>
        <Box style={styles.detailsContainer}>
          <Heading style={styles.title} size="sm">
            {title}
          </Heading>
          <Text style={styles.text} fontSize="sm">
            Popularity: {formattedPopularity}
          </Text>
          <Text style={styles.text} fontSize="sm">
            Released Date: {formattedReleaseDate}
          </Text>
          <Box style={styles.buttonContainer}>
            <Button style={styles.button} onPress={handleImageClick}>
              More Details
            </Button>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    justifyContent: "center",
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    padding: 2
  },
  imageContainer: {
    paddingVertical: 1
  },
  detailsContainer: {
    paddingVertical: 1,
    maxWidth: "60%"
  },
  title: {
    fontWeight: "bold"
  },
  text: {
    color: "#333"
  },
  buttonContainer: {
    marginTop: "auto"
  },
  button: {
    minWidth: "100%",
    alignSelf: "flex-end",
    backgroundColor: "#06B6D4"
  }
});

export default Card;
