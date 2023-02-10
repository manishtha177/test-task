import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import nock from "nock";
import App from "../../../App";

const characterRoute = "/people/1";
describe("Given user visits the character details page", () => {
  describe("When the content is loading", () => {
    it("Then it should show a loading spinner", async () => {
      render(
        <MemoryRouter initialEntries={[characterRoute]}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });
  });

  describe("When the character data loads", () => {
    beforeAll(() => {
      nock("https://swapi.dev/api")
        .defaultReplyHeaders({
          "access-control-allow-origin": "*",
        })
        .get("/people/1")
        .reply(200, {
          name: "John Doe",
          hair_color: "blond",
          eye_color: "blue",
          gender: "female",
          homeworld: "example/planets/1/",
          films: [
            "example/films/1/",
            "example/films/2/",
            "example/films/3/",
            "example/films/6/",
          ],
        });
    });

    it("Then it should all the details regarding the character", async () => {
      render(
        <MemoryRouter initialEntries={[characterRoute]}>
          <App />
        </MemoryRouter>
      );
      const characterDetails = await screen.findByTestId("details");
      expect(characterDetails).toHaveTextContent("John Doe");

      //back click test
      const back = await screen.findByText("Back");
      fireEvent.click(back, { force: true });

      expect(screen.getByTestId('header')).toBeInTheDocument()
    });
  });
});
