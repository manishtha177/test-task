import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";
import { PeopleResponse } from "../../types/peopleType";
import LoadingSpinner from "../loadingSpinner";
import "./Details.css";

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
        <div className="__starwars">
          <Card className="__cards shadow-lg bg-grey rounded">
            <Card.Title className="__character-title">
              {starData?.name}
            </Card.Title>
            <Card.Body className="__cards-details">
              <Card.Subtitle>Hair Color:</Card.Subtitle>
              <Card.Text> {starData?.hair_color}</Card.Text>
              <Card.Subtitle>Eye Color: </Card.Subtitle>
              <Card.Text>{starData?.eye_color}</Card.Text>
              <Card.Subtitle>Gender: </Card.Subtitle>
              <Card.Text>{starData?.gender}</Card.Text>
              <Card.Subtitle>Home PLanet:</Card.Subtitle>
              <Card.Link href={`${starData?.homeworld}`}>
                {starData?.homeworld}
              </Card.Link>
              <Card.Subtitle>Films</Card.Subtitle>
              {starData?.films.map((film, index) => (
                <div key={index}>
                  <Card.Link href={`${film}`}>{film}</Card.Link>
                </div>
              ))}
            </Card.Body>
          </Card>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Details;
