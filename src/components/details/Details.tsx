import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { PeopleResponse } from "../../types/peopleType";
import LoadingSpinner from "../loadingSpinner";

const Details = () => {
  const { id } = useParams();

  const initialValues = {
    name: "",
    gender: "",
    hair_color: "",
    homeworld: "",
    eye_color: "",
    films: [],
  };

  const [starData, setStarData] = useState<PeopleResponse>(initialValues);
  const [loading, setLoading] = useState<boolean>(true);

  const fetch = async () => {
    const res = await axios
      .get(`https://swapi.dev/api/people/${id}`)
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
    setStarData(res?.data);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <strong>Name: </strong>
          <div>{starData?.name}</div>
          <strong>Hair Color: </strong>
          <div>{starData?.hair_color}</div>
          <strong>Eye Color: </strong>
          <div>{starData?.eye_color}</div>
          <strong>Gender: </strong>
          <div>{starData?.gender}</div>
          <strong>Home Planet: </strong>
          <div>{starData?.homeworld}</div>
          <strong>Films: </strong>
          {starData?.films.map((film, index) => (
            <div key={index}>
              <Link to={`${film}`}>{film}</Link>
            </div>
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Details;
