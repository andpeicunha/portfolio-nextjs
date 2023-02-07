"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ExampleComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://dev.to/api/articles?username=andpeicunha"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return <p>Data: {JSON.stringify(data)}</p>;
}

export default ExampleComponent;
