import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { ArrContext } from "../App";
import { useNavigate } from "react-router-dom";

const FvtStudent = () => {
  const navigate = useNavigate()
  const { favourites, setFavourites } = useContext(ArrContext);

  const handleChange = () => {
    navigate('/')
  }

  const handleClick = (selectedId) => {
    const newArr = favourites.filter((student) => student.id !== selectedId);
    setFavourites(newArr);
  };

  return (
    <div className="mt-5 bg-[#FFFBE6] p-5">
      <div className="flex gap-10 ">
        <h1 className="border bg-black text-white p-2 rounded-md font-medium" onClick={handleChange}>
          STUDENT LIST
        </h1>
        <h1
          className="border bg-black text-white p-2 rounded-md font-medium cursor-pointer"
        >
          FAVOURITE STUDENT
        </h1>
      </div>
      
      {favourites.length > 0 ? (
        <ul>
          {favourites.map((student, index) => (
            <div
              key={student.id}
              className="flex justify-between items-center mt-2 border-b-2 mt-5 border-black"
            >
              <li>
                {index+1}. {student.name}
              </li>
              <button
                className="bg-red-500 text-white px-5 py-1 rounded-md"
                onClick={() => handleClick(student.id)}
              >
                <RiDeleteBinLine size={20}/>
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p className="mt-5 text-xl text-center">No favourite student list</p>
      )}
    </div>
  );
};

export default FvtStudent;
