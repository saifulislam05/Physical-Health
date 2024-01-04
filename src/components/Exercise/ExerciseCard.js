import React from "react";

const ExerciseCard = ({ exercise }) => {
  const capitalizeFirstLetter = (text) => {
    return text?.charAt(0).toUpperCase() + text?.slice(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
      <div className="p-4 w-full h-auto">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-2 items-center bg-neutral py-4 px-1 h-[30%]">
        <h2 className="text-xl font-semibold text-center text-neutral-content">
          {capitalizeFirstLetter(exercise.name)}
        </h2>
        <div className=""><p className="text-neutral-content">Target : <span className="font-semibold"> {capitalizeFirstLetter(exercise.target)}</span>
        </p>
        <p className="text-neutral-content"> Body Part : <span className="font-semibold">{capitalizeFirstLetter(exercise.bodyPart)}</span>
        </p></div>
        
      </div>
    </div>
  );
};

export default ExerciseCard;
