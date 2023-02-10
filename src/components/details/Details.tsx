import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card } from "react-bootstrap";
import { Gender, PeopleResponse } from "../../types/peopleType";
import LoadingSpinner from "../loadingSpinner";
import "./Details.css";
import avatar from "../../utils/avatar.png";
import { Link } from "react-router-dom";

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
        <div
          className="container mt-5 full-height"
          style={{ padding: "50px 0" }}
        >
          <div className="row">
            <div className="col-sm-4">
              <div className="image_box border text-center">
                <Card.Img variant="top" src={avatar} className="__avatar" />
              </div>
            </div>
            <div className="col-sm-8">
              <h2> {starData?.name}</h2>
              <h5>Hair Color : {starData?.hair_color}</h5>
              <h5>Eye Color : {starData?.eye_color}</h5>
              <h5>
                Gender :
                {starData?.gender === Gender.MALE
                  ? " Male"
                  : starData?.gender === Gender.FEMALE
                  ? " Female"
                  : " N/A"}
              </h5>
              <h5>Home World : {starData?.homeworld}</h5>
              <h5>Films : </h5>
              {starData?.films.map((film, index) => (
                <div key={index}>
                  <Link to={`${film}`}>
                    <h5>{film}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Button variant="primary" href="/">
            Back
          </Button>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Details;
