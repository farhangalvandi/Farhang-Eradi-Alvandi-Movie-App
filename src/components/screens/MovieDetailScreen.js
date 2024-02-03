import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Heading, VStack, Text, Image, Center, Box } from "native-base";
import { useGetRecord } from "../../hooks/useGetRecord";

const MovieDetail = ({
  route: {
    params: { id, mediaType }
  }
}) => {
  const { record, isLoading } = useGetRecord(mediaType, id);

  if (!record) {
    return null;
  }

  // Placeholder image URL
  const defaultImageUrl = "https://your-default-image-url.png"; // Replace with your actual placeholder image URL

  // Construct the poster URL or use the default image URL
  const posterUrl =
    record?.backdrop_path || record?.poster_path
      ? `https://image.tmdb.org/t/p/w500${record?.backdrop_path ||
          record?.poster_path}`
      : defaultImageUrl;

  const title = mediaType === "tv" ? record.name : record.title;
  const releaseDate =
    mediaType === "tv" ? record.first_air_date : record.release_date;

  return (
    <ScrollView style={styles.container}>
      <VStack>
        <Center style={styles.centerContainer}>
          <Heading style={styles.heading} size="lg">
            {title}
          </Heading>
        </Center>
        <Center>
          <Image
            alt={title}
            source={{ uri: posterUrl }}
            size="2xl"
            onError={e => {
              console.error("Failed to load image", e.nativeEvent.error); // Handle image load error
            }}
          />
        </Center>
        <Box margin={7}>
          <Text style={styles.overview}>{record.overview}</Text>
          <Text style={styles.details}>
            Popularity: {record.popularity ?? "-"} | Release Date:{" "}
            {releaseDate ?? "-"}
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  centerContainer: {
    height: 120,
    width: "100%",
    overflow: "hidden"
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden"
  },
  overview: {
    marginTop: 20,
    marginBottom: 10
  },
  details: {
    marginTop: 10,
    fontWeight: "bold"
  }
});

export default MovieDetail;
