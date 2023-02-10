import { Card } from "react-bootstrap";
import "./Character.css";

const Character = (starwars: any) => {
  return (
    <div>
      <div className="__heading">
        <h1>Starwars Collections</h1>
      </div>
      <div className="row row-cols-3 g-3">
        {starwars?.data?.length &&
          starwars?.data.map((data: any, index: string) => (
            <div key={index} className="__star-wars col">
              <Card className="__character-cards shadow-lg bg-grey rounded">
                <Card.Body>
                  <Card.Title>
                    <Card.Link href={`/people/${data?.url.substr(-2, 1)}`}>
                      {data?.name}
                    </Card.Link>
                  </Card.Title>
                  <Card.Subtitle>{data?.gender}</Card.Subtitle>
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
  );
};

export default Character;
