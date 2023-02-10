export interface PeopleResponse {
  name: string;
  hair_color: string;
  gender: string;
  homeworld: string;
  eye_color: string;
  films: string[];
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
}
