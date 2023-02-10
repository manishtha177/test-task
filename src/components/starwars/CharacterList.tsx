import React, { useEffect, useState } from "react";
import { ResponseData } from "../../types/apiResponseType";
import LoadingSpinner from "../loadingSpinner";
import Character from "./Character";

const CharacterList = () => {
  const [starsData, setStarsData] = useState<ResponseData[]>([]);
  const fetchData = async () => {
    const data = await fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
    setStarsData(data?.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div data-testid="character-list">
      {starsData?.length ? <Character data={starsData} /> : <LoadingSpinner />}
    </div>
  );
};

export default CharacterList;
