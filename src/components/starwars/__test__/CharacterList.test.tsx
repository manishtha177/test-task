import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import CharacterList from "../CharacterList";
import nock from "nock";

describe("Given user visits the home page", () => {
  describe("When the content is loading", () => {
    it("Then it should show a loading spinner", async () => {
      render(<CharacterList />, { wrapper: BrowserRouter });
      expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });
  });

  describe("When the character data loads", () => {
    beforeAll(() => {
      nock("https://swapi.dev/api")
        .defaultReplyHeaders({
          "access-control-allow-origin": "*",
        })
        .get("/people")
        .reply(200, {
          count: 82,
          next: "https://swapi.dev/api/people/?page=2",
          previous: null,
          results: [
            {
              name: "John Doe",
              gender: "male",
              homeworld: "example/planets/1/",
              url: "example/people/1/",
            },
            {
              name: "Jean Doe",
              gender: "female",
              homeworld: "example/planets/1/",
              url: "example/people/1/",
            },
          ],
        });
    });

    it("Then it should show a loading spinner", async () => {
      render(<CharacterList />, { wrapper: BrowserRouter });
      const characterCard = await screen.findAllByTestId("character-card")
      expect(characterCard).toHaveLength(2)
      expect(characterCard[0]).toHaveTextContent('John Doe')
      expect(characterCard[1]).toHaveTextContent('Jean Doe')
    });
  });
});
