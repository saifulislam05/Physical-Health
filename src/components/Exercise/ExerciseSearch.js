import React, { useState } from "react";

const ExerciseSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="mb-4 flex justify-center items-center">
      <div className="flex gap-4">
        <input
        type="text"
        placeholder="Type target, body part, or exercise"
        className="input input-neutral input-bordered w-full max-w-sm mx-auto"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={()=>onSearch(searchQuery)} className="btn btn-neutral text-lg p-2 " >Search</button>
      </div>
      

    </div>
  );
};

export default ExerciseSearch;
