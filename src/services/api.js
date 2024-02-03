const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN_AUTH =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJiNjgwZDBjZDU2YjUyYjlkYWEzMjFhOWU4MzUzZiIsInN1YiI6IjY1NWU0YjNjMjQ0MTgyMDBjYTc1NDliNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AWVpF7dV8GBxk6ry-esfk6fr0nyTG9ZNLSV4iuF52yQ";

/**
 * Sends a GET request to retrieve multiple records.
 * @param {string} mediaType - Type of media (e.g., movie, tv)
 * @param {string} listType - Type of listing (e.g., popular, top_rated)
 * @returns {Promise<Array>} - An array of records
 */
export const getRecords = async (mediaType, listType) => {
  const params = new URLSearchParams({
    language: "en-US",
    page: "1"
  });
  const url = `${BASE_URL}/${mediaType}/${listType}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
      }
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

/**
 * Sends a GET request to retrieve a single record.
 * @param {string} mediaType - Type of media (e.g., movie, tv)
 * @param {string} id - Record ID
 * @returns {Promise<Object>} - A record object
 */
export const getRecord = async (mediaType, id) => {
  const params = new URLSearchParams({
    language: "en-US"
  });
  const url = `${BASE_URL}/${mediaType}/${id}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
      }
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Sends a GET request to search for records.
 * @param {string} mediaType - Type of media (e.g., movie, multi, tv)
 * @param {string} query - Search keyword
 * @returns {Promise<Array>} - An array of search results
 */
export const getSearchResults = async (mediaType, query) => {
  const params = new URLSearchParams({
    query: query,
    language: "en-US",
    page: "1"
  });
  const url = `${BASE_URL}/search/${mediaType}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
      }
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};
