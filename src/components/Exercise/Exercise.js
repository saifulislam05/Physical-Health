import React, { useEffect, useState } from "react";
import axios from "axios";
import ExerciseCard from "./ExerciseCard";
import ExerciseSearch from "./ExerciseSearch";

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [numCards, setNumCards] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
     const fetchData = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=30";
  const headers = {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  };

  try {
    const response = await axios.get(url, { headers });
    const data = response.data;
    setExercises(data);
  } catch (error) {
    console.error(error);
  }
};
    fetchData();
  }, []);

  const loadMoreCards = () => {
    setNumCards(numCards + 8);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults(exercises);
    }
    let timeout;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      // Filter exercises based on the search query
      const filteredResults = exercises.filter(
        (exercise) =>
          exercise.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredResults);
    }, 3000);
  }, [searchQuery,exercises]);

  return (
    <div className="w-11/12 mx-auto p-4">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold mb-4 text-center border-b-4 w-fit pb-3 border-neutral ">
          Exercise List
        </h1>
      </div>

      <ExerciseSearch onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {(searchResults.length > 0 ? searchResults : exercises)
          .slice(0, numCards)
          .map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
      </div>
      {numCards <
        (searchResults.length > 0 ? searchResults : exercises).length && (
        <div className="mt-4 flex justify-center items-center">
          <button onClick={loadMoreCards} className="btn btn-neutral">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercise;
