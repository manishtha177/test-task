import axios from "axios";
import { useEffect, useState } from "react";
import { ResponseData } from "../../types/apiResponseType";
import Character from "./Character";

const CharacterList = () => {
  const [starsData, setStarsData] = useState<ResponseData[]>([]);
  const fetchData = async () => {
    const res = await axios
      .get(`https://swapi.dev/api/people`)
      .catch((error) => console.error(`Error: ${error.message}`));
    setStarsData(res?.data?.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Character data={starsData} />
    </div>
  );
};

export default CharacterList;
