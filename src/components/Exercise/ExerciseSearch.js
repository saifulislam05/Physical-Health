import React, { useState } from "react";

const ExerciseSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(searchQuery);
  };

  return (
    <div className="mb-4 flex justify-center items-center">
      <div className="w-full max-w-xs">
        <input
        type="text"
        placeholder="Search by target, body part, or exercise"
        className="input input-neutral input-bordered w-full"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {/* <button onClick={()=>} className="btn btn-neutral text-lg" >Search</button> */}
      </div>
      

    </div>
  );
};

export default ExerciseSearch;
