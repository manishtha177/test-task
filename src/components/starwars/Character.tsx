import { Link } from "react-router-dom";

const Character = (starwars: any) => {
  return (
    <div>
      {starwars?.data?.length &&
        starwars?.data.map((data: any, index: string) => (
          <div key={index}>
            <div>
              <span>
                <strong>Name: </strong>
              </span>
              <Link to={`/people/${data?.url.substr(-2, 1)}`}>
                {data?.name}
              </Link>
            </div>
            <div>
              <span>
                <strong>Gender: </strong>
              </span>
              {data?.gender}
            </div>
            <div>
              <span>
                <strong>Home Planet: </strong>
              </span>
              {data?.homeworld}
            </div>
            <div>
              <span>
                <strong>URL: </strong>
              </span>
              {data?.url}
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Character;
