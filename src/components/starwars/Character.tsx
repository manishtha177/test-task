import React from "react";
import { Card } from "react-bootstrap";
import { Gender } from "../../types/peopleType";
import "./Character.css";
import avatar from "../../utils/avatar.png";

const Character = (starwars: any) => {
  return (
    <div>
      <div className="container">
        <div
          className="__heading"
          style={{ paddingLeft: "20px", paddingTop: "50px" }}
        >
          <h1>Starwars Collections</h1>
        </div>
        <div className="row ">
          {starwars?.data?.length &&
            starwars?.data.map((data: any, index: string) => (
              <div
                key={index}
                className="__star-wars col-sm-12 col-md-6  col-lg-4"
                data-testid="character-card"
              >
                <Card className="__character-cards shadow-sm bg-white rounded ">
                  <div className="image_box">
                    <Card.Img variant="top" src={avatar} className="__avatar" />
                  </div>

                  <Card.Body>
                    <Card.Title>
                      <Card.Link
                        href={`/people/${data?.url.substr(-2, 1)}`}
                        target="_blank"
                      >
                        {data?.name}
                      </Card.Link>
                    </Card.Title>
                    <Card.Subtitle>
                      {data?.gender === Gender.MALE
                        ? "Male"
                        : data?.gender === Gender.FEMALE
                        ? "Female"
                        : "N/A"}
                    </Card.Subtitle>
                  </Card.Body>

                  <Card.Body>
                    <Card.Link href={`${data?.homeworld}`}>
                      {data?.homeworld}
                    </Card.Link>
                    <Card.Link href={`${data?.url}`}>{data?.url}</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
