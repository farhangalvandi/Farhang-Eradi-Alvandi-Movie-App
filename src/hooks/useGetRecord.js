import { useEffect, useState } from "react";
import { getRecord } from "../services/api";

export const useGetRecord = (mediaType, id) => {
  const [record, setRecord] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRecord(mediaType, id)
      .then(response => {
        setRecord(response);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return {
    record,
    isLoading
  };
};
