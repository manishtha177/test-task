import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import App from './App';

describe('Given user visits the home page', () => {
  describe('When the content is loading',()=>{
    it('Then it should show a loading spinner', async () => {
      render(<App />, {wrapper: BrowserRouter})
      expect(screen.getByTestId('spinner')).toBeInTheDocument()
    });
    it('Then shows header title', async () => {
      render(<App />, {wrapper: BrowserRouter})
      expect(screen.getByTestId('header')).toBeInTheDocument()
    });
    it('Then shows footer title', async () => {
      render(<App />, {wrapper: BrowserRouter})
      expect(screen.getByTestId('footer')).toBeInTheDocument()
    });
  })
  
  describe('When the content is fetched',()=>{
    it('Then it should show list of all the characters from star-wars', async () => {
      render(<App />, {wrapper: BrowserRouter})
      const movie = await screen.findByTestId('character-list')
      expect(movie).toBeTruthy()
    });
  })
});

describe('Given user visits character details page', () => {
  const characterRoute = '/people/1'

  describe('When the content is loading',()=>{
    it('Then it should show a loading spinner', async () => {
      render(<App />, {wrapper: BrowserRouter})
      expect(screen.getByTestId('spinner')).toBeInTheDocument()
    });
  })

  describe('When the character details load',()=>{
    it('Then it should show list of all the details of the character from star-wars', async () => {
      render(
        <MemoryRouter initialEntries={[characterRoute]}>
          <App />
        </MemoryRouter>,
      )
      const detailsPage= await screen.findByTestId('details-page')
      expect(detailsPage).toBeTruthy()
    });
  })
});