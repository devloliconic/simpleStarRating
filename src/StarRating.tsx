import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Istar {
  selected: boolean;
  onSelect(selectedStarCount: any): any;
}

const Star = ({ selected = false, onSelect }: Istar) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};

const createArray = (length: number) => [...Array(length)];

export const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n: number, i: number) => (
        <Star
          key={i}
          selected={selectedStars > i ? true : false}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};
