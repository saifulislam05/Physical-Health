import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import ExerciseSearch from "./ExerciseSearch";
import exercises from "../../Data/Exercise.json";

const Exercise = () => {
  const [numCards, setNumCards] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const url =
    //     "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10";
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "a4da324b9fmshe304ef949d33600p13fb2fjsne08b12264f85",
    //       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    //     },
    //   };
    //   try {
    //     const response = await fetch(url, options);
    //     const data = await response.json();
    //     setExercises(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchData();
  }, []);

  const loadMoreCards = () => {
    setNumCards(numCards + 23);
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
  }, [searchQuery]);

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
