import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrContext } from "../App";

const StudentList = () => {
  const { value, setValue, favourites, setFavourites } = useContext(ArrContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/favourite");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddStudent = () => {
    if (input) {
      setValue([...value, { id: value.length + 1, name: input }]);
      setInput("");
    }
  };

  const handleAddToFavourites = (student) => {
    if (!favourites.some((fav) => fav.id === student.id)) {
      setFavourites([...favourites, student]);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center p-5 mt-10 bg-[#FEFAE0]">
      <div className="flex gap-10 ">
        <h1 className="border bg-black text-white p-2 rounded-md font-medium">
          STUDENT LIST
        </h1>
        <h1
          className="border bg-black text-white p-2 rounded-md font-medium cursor-pointer"
          onClick={handleClick}
        >
          FAVOURITE STUDENT
        </h1>
      </div>
      <div className="flex w-full">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="w-full p-1 outline-none"
          placeholder="Enter Student Name..."
        />
        <button
          className="border bg-black text-white px-2 py-1"
          onClick={handleAddStudent}
        >
          Add
        </button>
      </div>
      <div className="w-full">
        <ul>
          {value.map((student) => (
            <div
              key={student.id}
              className="flex items-center gap-10 mt-1 w-full border-b-2 border-black"
            >
              <li className="flex-grow ml-1">
                {student.id}. {student.name}
              </li>
              <button
                className={`${
                  favourites.some((fav) => fav.id === student.id)
                    ? "bg-[#2283c4]"
                    : "bg-[#134668]"
                } p-1 text-white rounded-md`}
                onClick={() => handleAddToFavourites(student)}
              >
                {favourites.some((fav) => fav.id === student.id)
                  ? "Added to Favourite"
                  : "Add to Favourite"}
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
